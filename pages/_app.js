import "../styles/globals.css";
import { Raleway } from "@next/font/google";

const raleway = Raleway();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
