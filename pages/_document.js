import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <Html lang="ru" data-scroll-behavior="smooth">
      <Head>
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Gilroy-Light';
              src: url('${basePath}/fonts/Gilroy-Light.woff2') format('woff2'),
                   url('${basePath}/fonts/Gilroy-Light.woff') format('woff');
              font-weight: 300;
              font-style: normal;
              font-display: swap;
            }
            
            @font-face {
              font-family: 'Gilroy-Regular';
              src: url('${basePath}/fonts/Gilroy-Regular.woff2') format('woff2'),
                   url('${basePath}/fonts/Gilroy-Regular.woff') format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
            
            @font-face {
              font-family: 'Gilroy-Medium';
              src: url('${basePath}/fonts/Gilroy-Medium.woff2') format('woff2'),
                   url('${basePath}/fonts/Gilroy-Medium.woff') format('woff');
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }
            
            @font-face {
              font-family: 'Gilda-Display';
              src: url('${basePath}/fonts/GildaDisplay-Regular.woff2') format('woff2'),
                   url('${basePath}/fonts/GildaDisplay-Regular.woff') format('woff');
              font-weight: 600;
              font-style: normal;
              font-display: swap;
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
