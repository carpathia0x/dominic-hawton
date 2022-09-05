import { Text, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

interface IProjectPreview {
  title: string;
  desc: string;
}

function ProjectPreview({ title, desc }: IProjectPreview) {
  return (
    <Flex
      flexDir="column"
      gap={2}
      p={4}
      borderRadius="md"
      boxShadow="md"
      bgColor="white"
      transition="all 0.1s ease-out"
      cursor="pointer"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      }}
    >
      <Heading size="md" color="gray.900">
        {title}
      </Heading>
      <Text color="gray.600" fontSize="sm">
        {desc}
      </Text>
    </Flex>
  );
}

export default ProjectPreview;
