import React from 'react';
import { Flex, Heading, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import NavItem from '../NavItem';

function Header() {
  return (
    <Flex w="100%" py={4} justifyContent="space-between" align="center">
      <Link href="/">
        <Heading cursor="pointer" size="lg" _hover={{ textDecoration: 'none' }}>
          DH
        </Heading>
      </Link>
      <Flex gap={8}>
        <NavItem href="writing">Writing</NavItem>
        <NavItem href="projects">Projects</NavItem>
        <NavItem href="about">About</NavItem>
      </Flex>
    </Flex>
  );
}

export default Header;
