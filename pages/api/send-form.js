// pages/api/send-form.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Метод не разрешён' });
  }

  try {
    const { name, phone } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ ok: false, message: 'Не заполнены поля формы' });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const message = `
📩 *Новая заявка с сайта:*
━━━━━━━━━━━━━━━
👤 Имя: ${name}
📞 Телефон: ${phone}
`;

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      throw new Error(data.description || 'Ошибка отправки в Telegram');
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Ошибка в send-form.js:', error);
    return res.status(500).json({ ok: false, message: error.message });
  }
}