import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <Html lang="ru">
      <Head>
        {/* Preconnect для ускорения загрузки */}
        <link rel="preconnect" href="https://piterpotolok.ru" />
        <link rel="dns-prefetch" href="https://piterpotolok.ru" />
        
        {/* Preload критичных LCP изображений */}
        <link
          rel="preload"
          href={`${basePath}/images/index/about1.webp`}
          as="image"
          type="image/webp"
          fetchpriority="high"
        />
        <link
          rel="preload"
          href={`${basePath}/images/index/hero_main.webp`}
          as="image"
          type="image/webp"
        />
        
        {/* Preload критичных шрифтов */}
        <link
          rel="preload"
          href={`${basePath}/fonts/Gilroy-Regular.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={`${basePath}/fonts/Gilroy-Medium.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={`${basePath}/fonts/GildaDisplay-Regular.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={`${basePath}/fonts/Gilroy-Light.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Gilroy-Regular';
              src: url('${basePath}/fonts/Gilroy-Regular.woff2') format('woff2');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
            
            @font-face {
              font-family: 'Gilroy-Medium';
              src: url('${basePath}/fonts/Gilroy-Medium.woff2') format('woff2');
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }
            
            @font-face {
              font-family: 'Gilda-Display';
              src: url('${basePath}/fonts/GildaDisplay-Regular.woff2') format('woff2');
              font-weight: 600;
              font-style: normal;
              font-display: swap;
            }
            
            @font-face {
              font-family: 'Gilroy-Light';
              src: url('${basePath}/fonts/Gilroy-Light.woff2') format('woff2');
              font-weight: 300;
              font-style: normal;
              font-display: optional;
            }
          `
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
