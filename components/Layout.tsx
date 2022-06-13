import React, { FC, PropsWithChildren, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import DarkModeToggle from './DarkModeToggle';

const name = '@fahrulalwan';

interface LayoutInterface {
  home?: boolean;
  description: string;
}

const Layout: FC<PropsWithChildren<LayoutInterface>> = ({
  children,
  home,
  description,
}: PropsWithChildren<LayoutInterface>) => {
  const [isMounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="max-w-screen-sm mx-auto pt-12 pb-24 px-4">
      <Head>
        <title>{name}</title>
        <meta property="og:title" content={name} />
        <meta name="twitter:title" content={name} />

        {description && (
          <>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta name="twitter:card" content={description} />
            <meta name="twitter:description" content={description} />
          </>
        )}

        <meta name="twitter:image" content="/images/profile.jpg" />
        <meta property="og:image" content="/images/profile.jpg" />

        {/* belom di edit */}
        {/* Basic HTML Meta Tags */}
        <meta name="fragment" content="!" />
        <meta
          name="keywords"
          content="fahrul alwan, blog, personal website, website, portofolio, showcase"
        />
        <meta name="subject" content="A personal website portofolio" />
        <meta name="language" content="EN" />
        <meta name="robots" content="archive,follow,imageindex,index,odp,snippet,translate" />
        <meta name="revised" content={dayjs().toString()} />
        <meta name="topic" content="blog" />
        <meta
          name="summary"
          content="A personal website as portofolio & showcase by @fahrulalwan"
        />
        <meta name="reply-to" content="fahrulalwan@gmail.com" />
        <meta name="owner" content="Mohammad Fahrul Alwan" />
        <meta name="url" content="https://fahrulalwan.vercel.app" />
        <meta name="identifier-URL" content="https://fahrulalwan.vercel.app" />
        <meta name="directory" content="submission" />
        <meta name="category" content="blog" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="coverage" content="Worldwide" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="Expires" content="0" />
        <meta httpEquiv="Pragma" content="no-cache" />

        {/* OpenGraph Meta Tags */}
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://fahrulalwan.vercel.app" />
        <meta property="og:site_name" content="fahrulalwan blog" />
        <meta property="og:email" content="fahrulalwan@gmail.com" />
        <meta property="og:region" content="Jakarta" />
        <meta property="og:country-name" content="Indonesia" />

        {/* Apple Meta Tags */}
        <meta name="MSThemeCompatible" content="no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="translucent black" />
        <meta name="msapplication-navbutton-color" content="translucent black" />
        <meta name="mssmarttagspreventparsing" content="true" />
        <meta name="theme-color" content="#140033" />
        <meta httpEquiv="Page-Enter" content="RevealTrans(Duration=1.0,Transition=1)" />
        <meta httpEquiv="Page-Exit" content="RevealTrans(Duration=1.0,Transition=1)" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="viewport"
          content="height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,minimal-ui"
        />
        <link rel="apple-touch-icon" href="/images/profile.jpg" />
        <link rel="apple-touch-startup-image" href="/images/profile.jpg" />

        {/* HTML Link Tags */}
        <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
        <link rel="fluid-icon" type="image/jpg" href="/images/profile.jpg" />
        <link rel="me" type="text/html" href="https://fahrulalwan.vercel.app" />
        <link rel="shortlink" href="https://fahrulalwan.vercel.app" />
        {/*<link rel="archives" title="May 2003" href="http://blog.unto.net/2003/05/" />*/}
        <link rel="index" title="Mohammad Fahrul Alwan" href="https://fahrulalwan.vercel.app" />

        {/* google some update */}
      </Head>
      <header className="flex flex-col sm:flex-row items-center sm:relative sm:space-x-6 pb-4">
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
              className="h-32 w-32 rounded-full"
              alt={name}
            />
            <motion.div
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
              className="my-4"
            >
              <h1 className="text-4xl font-semibold dark:text-white">{name}</h1>
            </motion.div>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
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
                  className="h-32 w-32 rounded-full"
                  alt={name}
                />
              </a>
            </Link>
            <Link href="/">
              <motion.a
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
                className="text-4xl leading-6 font-semibold my-4 text-black dark:text-white cursor-pointer"
              >
                {name}
              </motion.a>
            </Link>
          </>
        )}
        <DarkModeToggle />
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-8 ml-3">
          <Link href="/">
            <a className="dark:text-white">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
