import { Text, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IProjectPreview {
  title: string;
  desc: string;
}

const bgGradients = {
  allegra: 'linear(to-r, blue.200, pink.500)',
  parentshop: 'linear(to-r, green.200, pink.500)',
  hone: 'linear(to-r, red.200, pink.500)',
  dripx: 'linear(to-r, yellow.200, pink.500)',
};

function ProjectPreview({ title, desc }: IProjectPreview) {
  return (
    <Link href={`/projects/${title.toLowerCase()}`}>
      <Flex
        flexDir="column"
        gap={2}
        borderRadius="md"
        boxShadow="md"
        bgColor="white"
        transition="all 0.1s ease-out"
        cursor="pointer"
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
        position="relative"
        overflow="hidden"
      >
        <Flex
          w="100%"
          h="2rem"
          bgGradient={bgGradients[title.toLowerCase() as any]}
        ></Flex>
        <Flex flexDir="column" gap={2} p={4}>
          <Heading size="md" color="gray.900">
            {title}
          </Heading>
          <Text color="gray.600" fontSize="sm">
            {desc}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}

export default ProjectPreview;
