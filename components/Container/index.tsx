import { Flex, Stack } from '@chakra-ui/react';
import React from 'react';

function Container({ children }) {
  return (
    <Flex flexDir="column" pt={8} gap={4}>
      {children}
    </Flex>
  );
}

export default Container;
