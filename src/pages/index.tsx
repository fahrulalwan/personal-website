import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import { FC } from 'react';
import Date from '../components/date';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import { logAnalyticEvent } from '../lib/gtag';
import isProduction from '../lib/isProduction';

interface ArticleProps {
  date: string;
  title: string;
  id: string;
}

enum ContactType {
  EMAIL = 'EMAIL',
  LINKEDIN = 'LINKEDIN',
  GITHUB = 'GITHUB',
}

type ContactTypes = ContactType;

const Home: FC<{ allPostsData: ArticleProps[] }> = ({
  allPostsData,
}: {
  allPostsData: ArticleProps[];
}) => {
  const handleLogAnalytic = (contact: ContactTypes) => () =>
    isProduction &&
    logAnalyticEvent({
      action: `contact_${contact}`,
      params: {
        method: contact,
      },
    });

  return (
    <Layout
      home
      description="Hi, welcome to my website. Here you can see my posts. Will updated monthly.">
      <Head>
        <title>@fahrulalwan personal room</title>
      </Head>
      <section className="mt-3 space-y-3 rounded-xl bg-white p-5 text-xl dark:bg-github dark:text-white">
        <p>
          I love to learn pretty much anything (including outside the dev world!). I also into
          philosophical stuff. I often challenge my mind to question stuff coming into my mind.
        </p>
        <p className="space-x-4 text-center">
          <a
            aria-label="Github Link"
            onClick={handleLogAnalytic(ContactType.GITHUB)}
            className="ml-2"
            target="_blank"
            href="https://github.com/fahrulalwan"
            rel="noopener noreferrer">
            <svg
              className="inline-flex opacity-60 hover:opacity-100 dark:text-white"
              width={30}
              height={30}
              enableBackground="new 0 0 438.549 438.549"
              version="1.1"
              viewBox="0 0 438.55 438.55"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg">
              <path
                // eslint-disable-next-line react/no-unknown-property
                fill="currentColor"
                d="m409.13 114.57c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.06-29.408-39.781 0-76.472 9.804-110.06 29.408-33.596 19.605-60.192 46.204-79.8 79.8-19.605 33.595-29.408 70.281-29.408 110.06 0 47.78 13.94 90.745 41.827 128.91 27.884 38.164 63.906 64.572 108.06 79.227 5.14 0.954 8.945 0.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-0.571-0.049-5.708-0.144-15.417-0.098-9.709-0.144-18.179-0.144-25.406l-6.567 1.136c-4.187 0.767-9.469 1.092-15.846 1-6.374-0.089-12.991-0.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-0.572-1.335-0.098-2.43 1.427-3.289s4.281-1.276 8.28-1.276l5.708 0.853c3.807 0.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136s11.704-0.476 16.274-1.423c4.565-0.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-0.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.07-79.226 27.88-38.161 41.825-81.126 41.825-128.91-0.01-39.771-9.818-76.454-29.414-110.05z"
              />
            </svg>
          </a>
          <a
            aria-label="LinkedIn Link"
            onClick={handleLogAnalytic(ContactType.LINKEDIN)}
            target="_blank"
            href="https://www.linkedin.com/in/fahrulalwan/"
            rel="noopener noreferrer">
            <svg
              className="inline-flex opacity-60 hover:opacity-100 dark:text-white"
              width={30}
              height={30}
              enableBackground="new 0 0 382 382"
              version="1.1"
              viewBox="0 0 382 382"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="m347.44 0h-312.89c-19.084 0-34.555 15.471-34.555 34.555v312.89c0 19.085 15.471 34.556 34.555 34.556h312.89c19.085 0 34.556-15.471 34.556-34.556v-312.89c0-19.084-15.471-34.555-34.555-34.555zm-229.24 329.84c0 5.554-4.502 10.056-10.056 10.056h-42.806c-5.554 0-10.056-4.502-10.056-10.056v-179.44c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056v179.44zm-31.459-206.41c-22.459 0-40.666-18.207-40.666-40.666s18.207-40.666 40.666-40.666 40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666zm255.16 207.22c0 5.106-4.14 9.246-9.246 9.246h-45.934c-5.106 0-9.246-4.14-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079c0 5.106-4.139 9.246-9.246 9.246h-44.426c-5.106 0-9.246-4.14-9.246-9.246v-181.06c0-5.106 4.14-9.246 9.246-9.246h44.426c5.106 0 9.246 4.14 9.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.47v86.846z"
                // eslint-disable-next-line react/no-unknown-property
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            aria-label="Email Link"
            onClick={handleLogAnalytic(ContactType.EMAIL)}
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:fahrulalwan@gmail.com">
            <svg
              className="inline-flex opacity-60 hover:opacity-100 dark:text-white"
              width={44}
              height={44}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </p>
      </section>
      <section className="mt-5 px-5 pt-px leading-normal">
        <h2 className="my-4 text-3xl leading-relaxed dark:text-white">Blog</h2>
        <LazyMotion features={domAnimation} strict>
          <m.ul
            initial="closed"
            animate="open"
            className="space-y-5"
            variants={{
              open: {
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}>
            {allPostsData.map(({ id, date, title }) => (
              <m.li
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
                <Link
                  href="/posts/[id]"
                  as={`/posts/${id}`}
                  className="text-xl text-blue-600 dark:text-violet-200">
                  {title}
                </Link>
                <br />
                <small className="text-gray-500 dark:text-gray-400">
                  <Date dateString={date} />
                </small>
              </m.li>
            ))}
          </m.ul>
        </LazyMotion>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
