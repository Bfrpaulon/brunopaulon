import React from 'react';
import { Flex, Heading, Link, useColorModeValue, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaCogs, FaEnvelope, FaDownload } from 'react-icons/fa';
import LogoIcon from './../Logo/Logo'
const Navbar = () => {
  const bgColor = useColorModeValue('bg.100', 'bg.200');
  const linkColor = useColorModeValue('text.100', 'text.200');

  return (
    <Flex as="nav" align="center" justify="space-evenly" p={4} bg={bgColor}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Heading as="h1" size="lg">
          <LogoIcon />
        </Heading>
      </motion.div>
      <Flex align="center" justifyContent="space-between" width="60vw" flexDirection="row">
        <NavLink icon={<FaHome />} to="#home" color={linkColor} >
          Home
        </NavLink>
        <NavLink icon={<FaUser />} to="#about" color={linkColor}>
          About
        </NavLink>
        <NavLink icon={<FaCode />} to="#skills" color={linkColor}>
          Skills
        </NavLink>
        <NavLink icon={<FaProjectDiagram />} to="#projects" color={linkColor}>
          Projects
        </NavLink>
        <NavLink icon={<FaCogs />} to="#services" color={linkColor}>
          Services
        </NavLink>
        <NavLink icon={<FaEnvelope />} to="#contact" color={linkColor}>
          Contact
        </NavLink>
      </Flex>

      <NavLink style={{ display: 'flex', flexDirection: 'column' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} color={linkColor}
      >
        <FaDownload />
        <Text ml={2}>Download My CV</Text>
      </NavLink>

    </Flex>
  );
};

const NavLink = ({ icon, to, children, color }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
      <Link href={to} p={2} mx={2} color={color} _hover={{ textDecoration: 'underline', color: "#ffc7ff" }}>
        {icon}
        {children}
      </Link>
    </motion.div>
  );
};

export default Navbar;
