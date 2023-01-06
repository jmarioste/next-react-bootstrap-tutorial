import type { AppProps } from "next/app";
import BootstrapThemeProvider from "../components/BootstrapThemeProvider";
import "../styles/main.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BootstrapThemeProvider>
      <Component {...pageProps} />
    </BootstrapThemeProvider>
  );
}

export default MyApp;
