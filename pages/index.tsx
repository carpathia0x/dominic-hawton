import { Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
// @ts-ignore
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Prism from 'prismjs';
import PostPreview from '../components/PostPreview';
import { postFilePaths, POSTS_PATH } from '../utils/mds-utils';
import Head from 'next/head';
import { GetStaticProps } from 'next';

interface IPost {
  data: {
    heading: string;
    subheading: string;
    tags: string[];
    date: string;
  };
  slug: string;
}

interface IWriting {
  posts: IPost[];
}

function Writing({ posts }: IWriting) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Head>
        <title>Writing | DH</title>
      </Head>
      <Flex w="100%" flexDir="column" flexGrow={1}>
        <Flex flexDir="column" gap={6} my={32}>
          <Heading size="xl">Writing</Heading>
          <Text fontSize="lg" color="gray.700">
            On software development, design, finance, and economics.
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
    </>
  );
}

export default Writing;

export const getStaticProps: GetStaticProps = ({ params }) => {
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
};
