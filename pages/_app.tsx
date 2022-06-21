import { FC, useEffect } from 'react';
import '../styles/global.css';
import { AppProps } from 'next/app';
import { motion } from 'framer-motion';
import Script from 'next/script';
import { GA_TRACKING_ID, logAnalyticPageView } from '../lib/gtag';

const App: FC<AppProps> = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
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

      <motion.div
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
        <Component {...pageProps} />
      </motion.div>
    </>
  );
};

export default App;
