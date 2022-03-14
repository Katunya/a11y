import React from 'react';
import Head from 'next/head';
import Main from "../src/Main/Main";

export default function Home() {
  return (
          <div>
            <Head>
                <html lang="ru" />
                <title>Государственный музей изобразительных искусств имени А.С. Пушкина</title>
                <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
              />
            </Head>
              <body>
            <Main/>
              </body>
          </div>
      )
}

