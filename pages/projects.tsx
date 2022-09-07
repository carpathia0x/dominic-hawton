import { PROJECTS_PATH } from '@/utils/mds-utils';
import { Flex, Grid, Heading, Text } from '@chakra-ui/react';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import path from 'path';
import { useEffect } from 'react';
import ProjectPreview from '../components/ProjectPreview';

interface IFrontmatter {
  name: string;
  description: string;
  url?: string;
}

interface IProjects {
  projectFrontmatter: IFrontmatter[];
}

function Projects({ projectFrontmatter }: IProjects) {
  useEffect(() => {
    console.log('Frontmatter: ', projectFrontmatter);
  }, [projectFrontmatter]);

  return (
    <>
      <Head>
        <title>Projects | DH</title>
      </Head>
      <Flex w="100%" flexDir="column" flexGrow={1}>
        <Flex flexDir="column" gap={6} my={32}>
          <Heading size="xl">Projects</Heading>
          <Text fontSize="lg" color="gray.700">
            Past and side projects.
          </Text>
        </Flex>
        <Grid gridTemplateColumns="repeat(2, 1fr)" gap={8}>
          {projectFrontmatter.map((frontmatter) => (
            <ProjectPreview
              key={frontmatter.name}
              title={frontmatter.name}
              desc={frontmatter.description}
            />
          ))}
        </Grid>
      </Flex>
    </>
  );
}

export default Projects;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projects = fs.readdirSync(PROJECTS_PATH);

  const projectFrontmatter = projects.map((filename) => {
    const projectPath = path.join(PROJECTS_PATH, filename);
    const source = fs.readFileSync(projectPath);

    const { data } = matter(source);

    return data;
  });

  console.log('Frontmatter: ', projectFrontmatter);

  return {
    props: {
      projectFrontmatter,
    },
  };
};
