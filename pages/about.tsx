import {
  Flex,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

function About() {
  return (
    <Flex w="100%" flexDir="column" flexGrow={1}>
      <Flex flexDir="column" gap={6} my={32}>
        <Heading size="xl">About</Heading>
        <Text fontSize="lg" color="gray.700">
          Software developer, writer, and professional problem-solver.
        </Text>
      </Flex>
      <Flex flexDir="column" gap={6}>
        <Heading size="lg">What I'm doing now</Heading>
        <UnorderedList>
          <ListItem>
            CTO at{' '}
            <Link href="https://hone.fi/" target="_blank" fontWeight="semibold">
              hone.fi
            </Link>
          </ListItem>
          <ListItem>
            Building{' '}
            <Link
              href="https://allegra.studio/"
              target="_blank"
              fontWeight="semibold"
            >
              Allegra
            </Link>
          </ListItem>
          <ListItem>
            Writing about software development, finance, economics, and DeFi
          </ListItem>
        </UnorderedList>
      </Flex>
      <Flex flexDir="column" gap={6} mt={16}>
        <Heading size="lg">Previously</Heading>
        <UnorderedList>
          <ListItem>
            Senior Full-Stack Web Developer at{' '}
            <Link
              href="https://mindspot.org.au/"
              target="_blank"
              fontWeight="semibold"
            >
              MindSpot
            </Link>
          </ListItem>
          <ListItem>
            Senior Immersive Technology Developer at{' '}
            <Link
              href="https://bvn.com.au/"
              target="_blank"
              fontWeight="semibold"
            >
              BVN
            </Link>
          </ListItem>
          <ListItem>
            Lead VR Developer at{' '}
            <Link
              href="https://newtonlowe.com/"
              target="_blank"
              fontWeight="semibold"
            >
              NewtonLowe
            </Link>
          </ListItem>
        </UnorderedList>
      </Flex>
    </Flex>
  );
}

export default About;
