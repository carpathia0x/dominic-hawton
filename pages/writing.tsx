import { Flex, Heading, Divider, Text } from '@chakra-ui/react';
import React from 'react';

function Writing() {
  return (
    <Flex w="100%" flexDir="column" flexGrow={1}>
      <Flex flexDir="column" gap={6} my={32}>
        <Heading size="xl">Writing</Heading>
        <Text fontSize="lg" color="gray.700">
          On software development, finance, and technology.
        </Text>
      </Flex>
      <Flex flexDir="column" gap={6} mt={4} flexGrow={1}>
        <Heading size="lg">Latest posts</Heading>
        <Divider />
        <Flex
          w="100%"
          flexGrow={1}
          flexDir="column"
          justify="center"
          align="center"
        >
          <Text fontSize="sm" color="gray.500">
            No posts yet
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Writing;
