import { useRouter } from "next/router";
import Head from "next/head";

const CustomHeader = ({ children }) => {
    const router = useRouter();
    let currentPageName = "";

    if (router.pathname === "/") {
        currentPageName = "Harsh Patel | Coderc";
    }

    return (
        <div>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="Personal portfolio website for Harsh Patel | Coderc"
                />
                <meta
                    name="keywords"
                    content="harsh, patel, coderc, website, matrimonial, marriage, business, engineer"
                />
                <meta
                    property="og:title"
                    content={currentPageName}
                    key="ogtitle"
                />
                <meta
                    property="og:description"
                    content="Personal portfolio website for Harsh Patel | Coderc"
                    key="ogdesc"
                />
                <meta property="og:type" content="website" />
                <title>{currentPageName}</title>
            </Head>
            {children}
        </div>
    );
};

export default CustomHeader;
