import { Head, Html, Main, NextScript } from 'next/document';
import { FC } from 'react';

const NextDocument: FC<Document> = () => (
  <Html lang="en">
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default NextDocument;
