import React from 'react';
import { Heading } from '@chakra-ui/react';

function H2({ children }) {
  return (
    <Heading size="lg" mt={3}>
      {children}
    </Heading>
  );
}

export default H2;
