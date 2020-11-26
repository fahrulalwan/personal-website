import React, { FC } from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import dayjs from 'dayjs';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';

interface PostData {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}

const Post: FC<PostData> = ({ postData }: PostData) => (
  <Layout
    description={`${postData.title}. Created on ${dayjs(postData.date).format('MMMM D, YYYY')}`}>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article className="p-5 bg-white dark:bg-github rounded-lg mt-3 prose prose-sm prose-indigo sm:prose-lg dark:prose-dark mx-auto">
      <h1 className="dark:text-indigo-200">{postData.title}</h1>
      <div className="text-gray-500 dark:text-gray-400 dark:text-gray-400 mb-2">
        <Date dateString={postData.date} />
      </div>
      {/* <div className="space-y-2"
       dangerouslySetInnerHTML={{ __html: DOMSanitizer.sanitize(postData.contentHtml) }} /> */}
      <div className="space-y-2" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostData, { id: string }> = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
