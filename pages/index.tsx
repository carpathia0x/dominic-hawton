import { Flex, Heading, Divider, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
// @ts-ignore
import Prism from 'prismjs';
import Code from '../components/Code';
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
import { postFilePaths, POSTS_PATH } from '../utils/mds-utils';
import PostPreview from '../components/PostPreview';

interface IPost {
  data: {
    heading: string;
    subheading: string;
    tags: string[];
    date: string;
  };
  slug: string;
}

function Writing({ posts }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Flex w="100%" flexDir="column" flexGrow={1}>
      <Flex flexDir="column" gap={6} my={32}>
        <Heading size="xl">Writing</Heading>
        <Text fontSize="lg" color="gray.700">
          On software development, decentralised finance, and economics.
        </Text>
      </Flex>
      <Flex flexDir="column" gap={6} mt={4} flexGrow={1}>
        <Heading size="lg">Latest posts</Heading>
        <Divider />
        <Flex
          w="100%"
          flexGrow={1}
          flexDir="column"
          justify="start"
          align="start"
          gap={4}
        >
          {posts?.map(({ data, slug }: IPost) => (
            <PostPreview
              key={data.heading}
              heading={data.heading}
              subheading={data.subheading}
              date={data.date}
              tags={data?.tags}
              slug={`writing/${slug}`}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Writing;

export async function getStaticProps({ params }) {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    const slug = filePath.split('.')[0];

    return {
      content,
      data,
      filePath,
      slug,
    };
  });

  return { props: { posts } };
}
