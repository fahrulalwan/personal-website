import { FC, useEffect } from 'react';
import '../styles/global.css';
import { AppProps } from 'next/app';
import Script from 'next/script';
import { GA_TRACKING_ID, logAnalyticPageView } from '../lib/gtag';
import ErrorBoundary from '../components/ErrorBoundary';
import Head from 'next/head';

const App: FC<AppProps> = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    const handleRouteChange = (url: string) => logAnalyticPageView(url);

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </Head>

      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_TRACKING_ID}');`}
      </Script>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />

      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
};

export default App;
