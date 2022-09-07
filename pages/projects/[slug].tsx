import BackButton from '@/components/BackButton';
import Callout from '@/components/Callout';
import Code from '@/components/Code';
import ProjectLayout, { IProjectMeta } from '@/components/ProjectLayout';
import { projectsFilePath, PROJECTS_PATH } from '@/utils/mds-utils';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import path from 'path';

interface IProjectPage {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  frontMatter: Record<string, unknown>;
}

function ProjectPage({ source, frontMatter }: IProjectPage) {
  return (
    <>
      <Head>
        <title>{`${frontMatter.name} | DH`}</title>
      </Head>
      <ProjectLayout meta={frontMatter as IProjectMeta}>
        <MDXRemote {...source} components={{ Code, Callout, BackButton }} />
      </ProjectLayout>
    </>
  );
}

export default ProjectPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectsFilePath = path.join(PROJECTS_PATH, `${params!.slug}.mdx`);
  const source = fs.readFileSync(projectsFilePath);

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
  const paths = projectsFilePath
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
