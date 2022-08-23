import { Flex } from '@chakra-ui/react';
import React from 'react';

function PostTag({ children, color }) {
  return (
    <Flex
      px={2}
      fontSize="sm"
      fontWeight="semibold"
      py={0.25}
      color={`${color}.500`}
      bgColor={`${color}.50`}
      borderRadius="sm"
    >
      {children}
    </Flex>
  );
}

export default PostTag;
