import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Set CSS variable for basePath in static assets
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    document.documentElement.style.setProperty('--base-path', basePath);
  }, []);

  return (
    <Layout {...pageProps.seo}>
      <Component {...pageProps} />
    </Layout>
  );
}
