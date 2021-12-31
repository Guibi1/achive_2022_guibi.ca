import Head from 'next/head'
import Navigation from '@components/Navigation'

import '@styles/globals.sass'


function MyApp({ Component, pageProps })
{

    return (
        <>
            <Head>
                <title>Guibi.ca</title>
                <meta charSet="utf-8"/>
                <meta name="theme-color" content="#8a1fff"/>
                <meta
                    name="description"
                    content="Site web de Guibi"
                />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
            </Head>

            <Navigation></Navigation>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
