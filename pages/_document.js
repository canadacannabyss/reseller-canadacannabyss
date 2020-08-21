import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props;
    return (
      <html lang='en-ca'>
        <Head>
          {process.env.NODE_ENV !== 'production' && (
            <link
              rel='stylesheet'
              type='text/css'
              href={`/_next/static/css/styles.chunk.css?v=${Date.now()}`}
            />
          )}
          <link
            href='https://fonts.googleapis.com/css?family=Montserrat&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css'
            rel='stylesheet'
          />
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
