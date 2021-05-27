import CustomHeader from "../components/CustomHeader";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (
        <CustomHeader>
            <Component {...pageProps} />
        </CustomHeader>
    );
}

export default MyApp;
