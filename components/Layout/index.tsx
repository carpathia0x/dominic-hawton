import { Text, Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <Flex w="100%" flexDir="column" minH="100vh" bgColor="gray.50">
      <Flex w="95%" mx="auto" maxW="900px" flexDir="column" minH="100vh">
        <Flex w="100%" flexDir="column" flexGrow={1}>
          <Header />
          {children}
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
}

export default Layout;
