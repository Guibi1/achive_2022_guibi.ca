import Head from 'next/head'
import Navigation from '@components/Navigation'

import '@styles/globals.sass'


function MyApp({ Component, pageProps })
{

    return (
        <>
            <Head>
                <title>Guibi.ca</title>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0,  minimum-scale=1.0"></meta>
            </Head>

            <Navigation></Navigation>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
