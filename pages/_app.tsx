import "../styles/homepage.css";
import "../styles/utilities.css";
import "../styles/detail.css";
import "../styles/checkout.css";
import "../styles/complete-checkout.css";
import "../styles/sign-in.css";
import "../styles/sign-up.css";
import "../styles/sign-up-success.css";
import "../styles/sign-up-photo-success.css";
import "../styles/sign-up-photo.css";
import "../styles/navbar-log-in.css";
import "../styles/404-not-found.css";
import "../styles/edit-profile.css";
import "../styles/overview.css";
import "../styles/sidebar.css";
import "../styles/transactions-detail.css";
import "../styles/transactions.css";

import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      />
    </>
  );
}

export default MyApp;
