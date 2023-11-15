import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function index() {
  return (
    <Box bg="primary.100" p={4} borderRadius="md">
    <Heading color="accent.200">Hello Chakra UI!</Heading>
    <Text color="text.100">This is some text in the primary color.</Text>
  </Box>
  )
}
