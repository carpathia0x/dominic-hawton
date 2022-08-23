import { Text } from '@chakra-ui/react';
import React from 'react';

function Tag({ tag }) {
  return (
    <Text
      p={3}
      borderRadius="sm"
      bgColor="gray.100"
      color="gray.900"
      fontWeight="semibold"
      fontSize="sm"
    >
      {tag}
    </Text>
  );
}

export default Tag;
