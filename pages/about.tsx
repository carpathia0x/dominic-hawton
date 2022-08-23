import {
  Flex,
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

function About() {
  return (
    <Flex w="100%" flexDir="column" flexGrow={1}>
      <Flex flexDir="column" gap={6} my={32}>
        <Heading size="xl">Hey, I'm Dom</Heading>
        <Text fontSize="lg" color="gray.700">
          I'm a software developer, writer, and cat dad.
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
        <Flex flexDir="column" gap={6}>
          <Stack spacing={0.5}>
            <Text>
              Senior Full-Stack Web Developer at{' '}
              <Link
                href="https://mindspot.org.au/"
                target="_blank"
                fontWeight="semibold"
              >
                MindSpot
              </Link>
            </Text>
            <Text
              fontWeight="semibold"
              fontSize="sm"
              textTransform="uppercase"
              color="gray.500"
            >
              2020 - 2021
            </Text>
          </Stack>
          <Stack spacing={0.5}>
            <Text>
              Senior Immersive Technology Developer at{' '}
              <Link
                href="https://bvn.com.au/"
                target="_blank"
                fontWeight="semibold"
              >
                BVN
              </Link>
            </Text>
            <Text
              fontWeight="semibold"
              fontSize="sm"
              textTransform="uppercase"
              color="gray.500"
            >
              2018 - 2020
            </Text>
          </Stack>
          <Stack spacing={0.5}>
            <Text>
              Lead Unreal Engine Developer at{' '}
              <Link
                href="https://newtonlowe.com/"
                target="_blank"
                fontWeight="semibold"
              >
                NewtonLowe
              </Link>
            </Text>
            <Text
              fontWeight="semibold"
              fontSize="sm"
              textTransform="uppercase"
              color="gray.500"
            >
              2015 - 2018
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default About;
