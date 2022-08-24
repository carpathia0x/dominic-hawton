import { Flex } from '@chakra-ui/react';
import React from 'react';

function PostTag({ children }) {
  return (
    <Flex
      px={2.5}
      fontSize="sm"
      fontWeight="semibold"
      py={0.25}
      color="gray.900"
      bgColor="gray.100"
      borderRadius="sm"
    >
      {children}
    </Flex>
  );
}

export default PostTag;
