import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import PostLayout from '../../components/PostLayout';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { postFilePaths, POSTS_PATH } from '../../utils/mds-utils';
import Code from '../../components/Code';
import Callout from '../../components/Callout';

function ArticlePage({ source, frontMatter }) {
  return (
    <PostLayout meta={frontMatter}>
      <MDXRemote {...source} components={{ Code, Callout }} />
    </PostLayout>
  );
}

export default ArticlePage;

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
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
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
