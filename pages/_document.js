import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta itemProp='name' content='tomorrowfinance.com' />
          <meta
            itemProp='description'
            content='We invite top notch leading financial thinkers, creators and founders of the most innovative fintechs, banks, neobanks, payments companies of the new finance revolution.'
          />
          <meta itemProp='image' content='/static/images/metadata_img.png' />

          <meta property='og:url' content='https://coinnations.com' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='CoinNations.com' />
          <meta
            property='og:description'
            content='We invite top notch leading financial thinkers, creators and founders of the most innovative fintechs, banks, neobanks, payments companies of the new finance revolution.'
          />
          <meta property='og:image' content='/static/images/metadata_img.png' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content='CoinNations.com' />
          <meta
            name='twitter:description'
            content='We invite top notch leading financial thinkers, creators and founders of the most innovative fintechs, banks, neobanks, payments companies of the new finance revolution.'
          />
          <meta
            name='twitter:image'
            content='/static/images/metadata_img.png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
