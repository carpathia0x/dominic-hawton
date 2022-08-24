import React from 'react';
import { Heading } from '@chakra-ui/react';

function H1({ children }) {
  return (
    <Heading size="xl" mt={3}>
      {children}
    </Heading>
  );
}

export default H1;
