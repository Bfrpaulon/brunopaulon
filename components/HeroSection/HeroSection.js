import { Flex, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload, FaInstagram, FaMailBulk, FaMapMarkerAlt } from "react-icons/fa";
import { FaDatabase, FaServer, FaReact, FaNodeJs, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const boxVariants = {
    hidden: { x: "-100vw" },
    visible: { x: 0, transition: { type: "spring", stiffness: 80 } },
  };


  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Flex>
        {/* Box da Esquerda */}
        <motion.div variants={boxVariants}>
          <Box w="70vw">
            <Text fontSize="xl">Olá, sou Bruno Paulon</Text>
            <Text>
              Desenvolvedor Fullstack em Setúbal, Portugal. 
            </Text>
           <FaMapMarkerAlt /><Text> Setúbal</Text>
           <FaGithub></FaGithub>
           <FaLinkedin></FaLinkedin>
           <i class="fa fa-mail-forward" aria-hidden="true"></i>
          </Box>
        </motion.div>
        <motion.div variants={boxVariants}>
          <Box w="30vw">
          <Image
        src="/Images/Profile-Futuristic.png"
        alt="Minha Imagem"
        width={500} // Largura da imagem
        height={300} // Altura da imagem
      />
          </Box>
        </motion.div>
      </Flex>
    </motion.div>
  );
};

export default HeroSection;
