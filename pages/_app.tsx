import type { AppProps } from "next/app";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import "../styles/App.css";
import "../public/slick.min.css";
import "../public/slick-theme.min.css";
import { SSRProvider } from "react-bootstrap";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
