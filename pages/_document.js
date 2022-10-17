import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html>
      <Head>
        <Script
          src='https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.0/dist/mindar-image.prod.js'
          strategy='beforeInteractive'></Script>
        <Script
          src='https://aframe.io/releases/1.2.0/aframe.min.js'
          strategy='beforeInteractive'></Script>
        <Script
          src='https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.0/dist/mindar-image-aframe.prod.js'
          strategy='beforeInteractive'></Script>
        <link rel='icon' href='/login-logo.png' type='image/x-icon' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
