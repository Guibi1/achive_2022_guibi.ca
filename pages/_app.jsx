import Navigation from "@components/Navigation";
import Head from "next/head";

import "@styles/globals.sass";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Guibi.ca</title>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0,  minimum-scale=1.0"></meta>
            </Head>

            <Navigation />
            <Component {...pageProps} />
        </>
    );
}
