import { Flex, Text, Heading } from '@chakra-ui/react';
import React from 'react';

function Projects() {
  return (
    <Flex w="100%" flexDir="column" flexGrow={1}>
      <Flex flexDir="column" gap={6} my={32}>
        <Heading size="xl">Projects</Heading>
        <Text fontSize="lg" color="gray.700">
          Side projects at various points in their existence.
        </Text>
      </Flex>
    </Flex>
  );
}

export default Projects;
