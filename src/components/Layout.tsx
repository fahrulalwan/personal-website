import React, { FC, PropsWithChildren, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { m } from 'framer-motion';
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
    <div className="mx-auto max-w-screen-sm px-4 pt-12 pb-24">
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

        <meta name="twitter:image" content="/images/profile1.webp" />
        <meta property="og:image" content="/images/profile1.webp" />

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
          content="height=device-height,width=device-width,initial-scale=1.0,minimal-ui"
        />
        <link rel="apple-touch-icon" href="/images/profile1.webp" />

        {/* HTML Link Tags */}
        <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />

        {/* google some update */}
      </Head>
      <header className="flex flex-col items-center pb-4 sm:relative sm:flex-row sm:space-x-6">
        {home ? (
          <>
            <m.img
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
              src="/images/profile1.webp"
              className="h-32 w-32 rounded-full"
              alt={name}
            />
            <m.div
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
              className="my-4">
              <h1 className="text-4xl font-semibold dark:text-white">{name}</h1>
            </m.div>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <m.img
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
                  src="/images/profile1.webp"
                  className="h-32 w-32 rounded-full"
                  alt={name}
                />
              </a>
            </Link>
            <Link href="/">
              <m.a
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
                className="my-4 cursor-pointer text-4xl font-semibold leading-6 text-black dark:text-white sm:my-0">
                {name}
              </m.a>
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

Layout.defaultProps = {
  home: false,
};

export default Layout;
