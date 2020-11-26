import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home description="@fahrulalwan 's personal website">
      <Head>
        <title>@fahrulalwan homepage</title>
      </Head>
      <section className="text-xl bg-white dark:bg-github p-5 rounded-xl mt-3 dark:text-white">
        <p>
          Hi there, I&apos;m a digital magician who loves to learn pretty much anything (including
          outside the dev world!). My journey starts from building this website. stay tuned for the
          next big thing to happen!
        </p>
        <p className="mt-3">
          U can say hi:{' '}
          <a
            className="dark:text-indigo-300"
            href="https://www.instagram.com/fahrulalwan/"
            rel="noopener noreferrer">
            Instagram
          </a>
          {', '}
          <a className="dark:text-indigo-300" href="mailto:fahrulalwan@gmail.com">
            Email
          </a>
          .
        </p>
      </section>
      <section className={`${utilStyles.headingMd} pt-px px-5 mt-5`}>
        <h2 className={`${utilStyles.headingLg} dark:text-white`}>Blog</h2>
        <motion.ul
          className={utilStyles.list}
          initial="closed"
          animate="open"
          variants={{
            open: {
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
            closed: {
              transition: { staggerChildren: 0.05, staggerDirection: -1 },
            },
          }}>
          {allPostsData.map(({ id, date, title }) => (
            <motion.li
              className={utilStyles.listItem}
              key={id}
              variants={{
                open: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    y: { stiffness: 1000, velocity: -100 },
                  },
                },
                closed: {
                  y: 25,
                  opacity: 0,
                  transition: {
                    y: { stiffness: 1000 },
                  },
                },
              }}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a className="dark:text-purple-200">{title}</a>
              </Link>
              <br />
              <small className={`${utilStyles.lightText} dark:text-gray-400`}>
                <Date dateString={date} />
              </small>
            </motion.li>
          ))}
        </motion.ul>
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
