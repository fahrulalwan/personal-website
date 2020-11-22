import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {GetStaticProps} from 'next';
import Layout, {siteTitle} from 'components/layout';
import utilStyles from 'styles/utils.module.css';
import {getSortedPostsData} from 'lib/posts';
import Date from 'components/date';

export default function Home({ allPostsData }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} bg-white p-5 rounded-xl mt-3`}>
        <p>
          Hi there, I&apos;m a digital magician who loves to learn pretty much anything (including
          outside the dev world!). My journey starts from building this website. stay tuned for the
          next big thing to happen!
        </p>
        <p className="mt-3">
          U can say hi:
          {' '}
          <a href="https://www.instagram.com/fahrulalwan/" rel="noopener noreferrer">Instagram</a>
          {', '}
          <a href="mailto:fahrulalwan@gmail.com">Email</a>
          .
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} px-5 mt-5`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
