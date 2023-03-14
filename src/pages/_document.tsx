import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <link href="https://cdn.tailwindcss.com"/>
        </Head>
        <body  style={{ backgroundImage: `url(/bgcuadrado.jpg)`}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
