import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
    return (
        <Html>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="theme-color" content="#8a1fff"/>
                <meta
                    name="description"
                    content="Site web de Guibi"
                />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
