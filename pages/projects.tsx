import { Flex, Text, Heading, Grid } from '@chakra-ui/react';
import React from 'react';
import ProjectPreview from '../components/ProjectPreview';

function Projects() {
  return (
    <Flex w="100%" flexDir="column" flexGrow={1}>
      <Flex flexDir="column" gap={6} my={32}>
        <Heading size="xl">Projects</Heading>
        <Text fontSize="lg" color="gray.700">
          Past and side projects.
        </Text>
      </Flex>
      <Grid gridTemplateColumns="repeat(2, 1fr)" gap={8}>
        <ProjectPreview title="Hone" desc="Liquid staking on Algorand" />
        <ProjectPreview title="Allegra" desc="Algorand blockchain explorer" />
        <ProjectPreview
          title="DripX"
          desc="Token streaming for Algorand Standard Assets"
        />
        <ProjectPreview
          title="Parentshop"
          desc="E-Learning and ecommerce store"
        />
      </Grid>
    </Flex>
  );
}

export default Projects;
