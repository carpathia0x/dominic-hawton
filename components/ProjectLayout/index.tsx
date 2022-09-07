import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Text,
  Divider,
  Flex,
  Heading,
  Tag,
  Box,
  Link,
  IconButton,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import React from 'react';
import BackButton from '../BackButton';

export interface IProjectMeta extends Record<string, unknown> {
  name: string;
  description: string;
  url: string;
}

interface IProjectLayout {
  meta: IProjectMeta;
  children: React.ReactNode;
}

function ProjectLayout({ meta, children }: IProjectLayout) {
  return (
    <Flex flexDir="column" pt={16} gap={3} align="start">
      <Flex gap={2} align="center" mt={4}>
        <Heading as="h1" size="lg">
          {meta.name}
        </Heading>
        <Link target="_blank" href={meta.url}>
          <IconButton
            icon={<ExternalLinkIcon />}
            variant="ghost"
            size="sm"
            aria-label="Go to website"
          />
        </Link>
      </Flex>
      <Text color="gray.700">{meta.description}</Text>
      <BackButton href="projects" text="All projects" />
      <Divider />
      {children}
    </Flex>
  );
}

export default ProjectLayout;
