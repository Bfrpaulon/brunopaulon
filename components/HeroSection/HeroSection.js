import { Box, Flex, HStack, Heading, Link, LinkBox, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import PhotoHero from './../PhotoHero/PhotoHero'
import {FaCheckCircle,  FaFileDownload,  FaGithub,  FaLinkedinIn,  FaMap } from 'react-icons/fa';

export default function HeroSection() {
  const bgColor = useColorModeValue('bg.100', 'bg.200', 'bg.300');
  const linkColor = useColorModeValue('text.100', 'text.200');
  const HoverableLink = ({ href, children }) => (
    <Box
      as="a"
      href={href}
      textDecoration="none"
      color="inherit"
      _hover={{
        backgroundColor: '#f0f0f0',
        color: '#333',
      }}
    >
      {children}
    </Box>
  );
  const AnimatedText = ({ children }) => (
    <motion.div variants={textVariants}>
      {children}
    </motion.div>
  );
  const boxVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Flex w="100vw" bg={bgColor} align="center" justify="space-evenly" p="8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={boxVariants}
        transition={{ duration: 0.5 }}
        >
       <Box w="65vw" h="60vh" align="center" justify="center">
    <Stack justify="center" align="center" w="100%" h="100%">
      <AnimatedText>
        <Heading
          as="h2"
          color="text.200"
          font="lining-nums"
          fontSize="3rem"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Hello Everyone, I'm Bruno Paulon
        </Heading>
      </AnimatedText>
      <AnimatedText>
        <Text
          fontSize="larger"
          justify="center"
          align="center"
          color="text.200"
          textAlign="justify"
          m="auto"
          w="45vw"
          mt="1rem"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
        >
          MERN FullStack Developer Experienced in Building Attractive and Efficient Web
          Applications. Communicative and collaborative, able to work effectively in a team to
          achieve goals and achieve successful results.
        </Text>
         <HStack  align="center" justify="start" mt={10}><FaMap color='white'/><Text color={'white'}>Setúbal, Portugal.</Text></HStack>
         <HStack align="center" justify="start" mt={10}><FaCheckCircle color='lime'/><Text color={'white'}>Available for new projects.</Text></HStack>
         <HStack  align="center" justify="space-between" mt={10} w={"20%"}>
          <Link href= "https://github.com/Bfrpaulon">
            <FaGithub className="icon" size={25} />
          </Link>
          <Link href= "https://www.linkedin.com/in/bfrpaulon/">
            <FaLinkedinIn className="icon" size={25} />
          </Link>
          <Link href= "https://github.com/Bfrpaulon">
            <FaFileDownload  className="icon" size={25}/>
          </Link>
         </HStack>
      </AnimatedText>
    </Stack>
  </Box>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={boxVariants}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <motion.div variants={textVariants}>
  <Box
    w="100%"
    h="100%"
    justify="center"
    align="center"
    boxShadow="8px 8px 12px  #4d425f" // Adicionando uma sombra suave
  >
    <PhotoHero />
  </Box>
</motion.div>

      </motion.div>
    </Flex>
  );
}
