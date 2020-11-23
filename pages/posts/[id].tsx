import React, { FC } from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import DOMSanitizer from 'isomorphic-dompurify';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

interface PostData {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}

const Post: FC<PostData> = ({ postData }: PostData) => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article className="p-5 bg-white rounded-lg mt-3">
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={`${utilStyles.lightText} mb-2`}>
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

export const getStaticProps: GetStaticProps<PostData, {id: string}> = async ({ params }) => {
  // @ts-ignore
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
