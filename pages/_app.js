import Head from "next/head";
import { NAVER_SITE_VERIFICATION } from "../config";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <>
            <Head>
                <meta name="naver-site-verification" content={NAVER_SITE_VERIFICATION} />
            </Head>
            <Component {...pageProps} />
        </>
}