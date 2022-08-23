import React from 'react';
import { Heading } from '@chakra-ui/react';

function H3({ children }) {
  return (
    <Heading size="md" mt={3}>
      {children}
    </Heading>
  );
}

export default H3;
