import { Text, Divider, Flex, Heading, Tag, Box } from '@chakra-ui/react';
import { format } from 'date-fns';
import React from 'react';

interface IPostLayout {
  meta: {
    heading: string;
    subheading: string;
    date: Date;
    tags: string[];
  };
  children: React.ReactNode;
}

function PostLayout({ meta, children }: IPostLayout) {
  return (
    <Flex flexDir="column" pt={16} gap={3}>
      <Heading size="2xl">{meta.heading}</Heading>
      <Text color="gray.600" fontSize="xl">
        {meta.subheading}
      </Text>
      <Flex w="100%" justifyContent="space-between">
        <Text fontSize="sm">
          {format(new Date(meta.date), 'MMMM do, yyyy')}
        </Text>
      </Flex>
      <Flex gap={2}>
        {meta.tags?.length &&
          meta.tags.map((tag) => (
            <Tag key={tag} cursor="pointer">
              {tag}
            </Tag>
          ))}
      </Flex>
      <Divider />
      <Flex flexDir="column" gap={4} mt={4}>
        {children}
      </Flex>
    </Flex>
  );
}

export default PostLayout;
