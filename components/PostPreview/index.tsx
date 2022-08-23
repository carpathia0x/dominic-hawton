import { Flex, Text, Heading, Tag } from '@chakra-ui/react';
import { format } from 'date-fns';
import React from 'react';
import PostTag from '../PostTag';

interface IPostPreview {
  heading: string;
  subheading: string;
  date: string;
  tags: string[];
}

function PostPreview({ heading, subheading, date, tags }: IPostPreview) {
  return (
    <Flex
      flexDir="column"
      gap={2}
      p={6}
      w="100%"
      border="1px solid"
      borderColor="gray.100"
      borderRadius="lg"
      bgColor="white"
      cursor="pointer"
      transition=".1s ease-out all"
      _hover={{
        boxShadow: 'lg',
        transform: 'translateY(-2px)',
      }}
    >
      <Heading size="md">{heading}</Heading>
      <Text color="gray.700">{subheading}</Text>
      <Text fontSize="xs">{format(new Date(date), 'MMMM do, yyyy')}</Text>
      <Flex gap={1}>
        {tags?.map((tag) => (
          <PostTag color="red" key={tag}>
            {tag}
          </PostTag>
        ))}
      </Flex>
    </Flex>
  );
}

export default PostPreview;
