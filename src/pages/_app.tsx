import { FC, useEffect } from 'react';
import '../styles/global.css';
import { AppProps } from 'next/app';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import Script from 'next/script';
import { GA_TRACKING_ID, logAnalyticPageView } from '../lib/gtag';
import ErrorBoundary from '../components/ErrorBoundary';
import isProduction from '../lib/isProduction';

const App: FC<AppProps> = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!isProduction) {
        return;
      }

      logAnalyticPageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {isProduction && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
          </Script>
        </>
      )}
      <LazyMotion features={domAnimation} strict>
        <m.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </m.div>
      </LazyMotion>
    </>
  );
};

export default App;
