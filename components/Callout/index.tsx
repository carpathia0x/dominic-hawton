import { Flex, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';

interface ICallout {
  emoji: string;
  children: React.ReactNode;
}

function Callout({ children, emoji }: ICallout) {
  return (
    <Flex p={4} bgColor="gray.100" borderRadius="md">
      <Text mr={3} fontSize="lg">
        {emoji}
      </Text>
      <Text>{children}</Text>
    </Flex>
  );
}

export default dynamic(() => Promise.resolve(Callout), {
  ssr: false,
});
