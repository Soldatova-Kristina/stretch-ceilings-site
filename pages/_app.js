import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout {...pageProps.seo}>
      <Component {...pageProps} />
    </Layout>
  );
}
