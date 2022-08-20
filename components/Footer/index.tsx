import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <Flex py={4} align="center" justify="center" gap={4}>
      <FaGithub />
      <FaTwitter />
    </Flex>
  );
}

export default Footer;
