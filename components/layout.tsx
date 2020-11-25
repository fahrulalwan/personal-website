import React, {FC, PropsWithChildren} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {motion} from 'framer-motion';
import dayjs from 'dayjs';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = '@fahrulalwan';
export const siteTitle = '@fahrulalwan homepage';

const Layout: FC<{home?: boolean}> = ({ children, home }: PropsWithChildren<{home?: boolean}>) => (
  <div className="max-w-screen-sm mx-auto pt-12 pb-24 px-4">
    <Head>
      <title>{name}</title>
      <meta name="description" content="@fahrulalwan 's personal website" />
      <meta name="twitter:card" content="@fahrulalwan 's personal website" />

      {/* belom di edit */}
      {/* Basic HTML Meta Tags */}
      <meta name="fragment" content="!" />
      <meta name="keywords" content="your, tags" />
      <meta name="subject" content="your website's subject" />
      <meta name="language" content="EN" />
      <meta name="robots" content="archive,follow,imageindex,index,odp,snippet,translate" />
      <meta name="revised" content={dayjs().toString()} />
      <meta name="topic" content="blog" />
      <meta name="summary" content="" />
      <meta name="designer" content="" />
      <meta name="reply-to" content="fahrulalwan@gmail.com" />
      <meta name="owner" content="Mohammad Fahrul Alwan" />
      <meta name="url" content="https://fahrulalwan.now.sh" />
      <meta name="identifier-URL" content="https://fahrulalwan.now.sh" />
      <meta name="directory" content="submission" />
      <meta name="category" content="" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="coverage" content="Worldwide" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="Expires" content="0" />
      <meta httpEquiv="Pragma" content="no-cache" />

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content="https://fahrulalwan.now.sh" />
      <meta property="og:image" content="/images/profile.jpg" />
      <meta property="og:site_name" content="fahrulalwan blog" />
      <meta property="og:description" content="@fahrulalwan 's personal website" />
      <meta property="og:email" content="fahrulalwan@gmail.com" />
      <meta property="og:region" content="Jakarta" />
      <meta property="og:country-name" content="Indonesia" />

      {/* Apple Meta Tags */}
      <meta name="MSThemeCompatible" content="no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="translucent black" />
      <meta name="msapplication-navbutton-color" content="translucent black" />
      <meta name="mssmarttagspreventparsing" content="true" />
      <meta name="theme-color" content="#b1cff4" />
      <meta httpEquiv="Page-Enter" content="RevealTrans(Duration=1.0,Transition=1)" />
      <meta httpEquiv="Page-Exit" content="RevealTrans(Duration=1.0,Transition=1)" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="viewport" content="height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,minimal-ui" />
      <link rel="apple-touch-icon" href="/images/profile.jpg" />
      <link rel="apple-touch-startup-image" href="/images/profile.jpg" />

      {/* HTML Link Tags */}
      <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
      <link rel="fluid-icon" type="image/jpg" href="/images/profile.jpg" />
      <link rel="me" type="text/html" href="https://fahrulalwan.now.sh" />
      <link rel="shortlink" href="https://fahrulalwan.now.sh" />
      <link rel="archives" title="May 2003" href="http://blog.unto.net/2003/05/" />
      <link rel="index" title="Mohammad Fahrul Alwan" href="https://fahrulalwan.now.sh" />

      {/* google some update */}

    </Head>
    <header className={styles.header}>
      {home ? (
        <>
          <motion.img
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.9,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
            src="/images/profile.jpg"
            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            alt={name}
          />
          <motion.h1
            className="text-4xl font-semibold my-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
          >
            {name}
          </motion.h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <img
                src="/images/profile.jpg"
                className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className="text-4xl font-semibold my-4 text-black">{name}</a>
            </Link>
          </h2>
        </>
      )}
    </header>
    <main>{children}</main>
    {!home && (
    <div className="mt-8 ml-3">
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </div>
    )}
  </div>
);

export default Layout;
