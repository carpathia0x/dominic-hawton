import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import path from 'path';
import Callout from '../../components/Callout';
import Code from '../../components/Code';
import PostLayout from '../../components/PostLayout';
import { postFilePaths, POSTS_PATH } from '../../utils/mds-utils';

interface IPostPage {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  frontMatter: Record<string, unknown>;
}

function PostPage({ source, frontMatter }: IPostPage) {
  return (
    <>
      <Head>
        <title>{`${frontMatter.heading} | DH`}</title>
      </Head>
      <PostLayout meta={frontMatter as any}>
        <MDXRemote {...source} components={{ Code, Callout }} />
      </PostLayout>
    </>
  );
}

export default PostPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params!.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
