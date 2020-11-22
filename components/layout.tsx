import React, {FC, PropsWithChildren} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = '@fahrulalwan';
export const siteTitle = '@fahrulalwan homepage';

const Layout: FC<{home?: boolean}> = ({ children, home }: PropsWithChildren<{home?: boolean}>) => (
  <div className={styles.container}>
    <Head>
      <title>{name}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="@fahrulalwan 's personal website"
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <header className={styles.header}>
      {home ? (
        <>
          <img
            src="/images/profile.jpg"
            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            alt={name}
          />
          <h1 className="text-4xl font-semibold my-4">{name}</h1>
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
