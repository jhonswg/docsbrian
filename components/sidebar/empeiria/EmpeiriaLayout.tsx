import {
  Box,
  Flex,
  HStack,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Navbar } from "@/components/navbar";
import { navbarRoutes } from "@/config/navbar-routes";
import { Footer } from "@/components/footer";
import { EmpeiriaSidebar } from "@/components/sidebar/empeiria/EmpeiriaSidebar";
import { ReactNode } from "react";
import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import EmpeiriaNetworkBox from "@/components/sidebar/empeiria/EmpeiriaNetworkBox";

export default function EmpeiriaLayout({ children }: { children: ReactNode }) {
  const border = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");
  const sidebarBg = useColorModeValue("white", "gray.800");
  const cardBg = useColorModeValue("whiteAlpha.50", "whiteAlpha.100");

  return (
    <>
      <Navbar routes={navbarRoutes} />

      <Box
        position="relative"
        minH="100vh"
        pt="100px"
        pb="16"
        overflow="visible"
      >
        {/* Background gradient blur */}
        {/* <Box
          boxSize="72"
          position="absolute"
          top="0"
          left="0"
          bg="purple.500"
          borderRadius="full"
          filter="blur(400px)"
        />
        <Box
          boxSize="72"
          position="absolute"
          bottom="0"
          right="0"
          bg="pink.500"
          borderRadius="full"
          filter="blur(400px)"
        /> */}

        {/* Main content */}
        <Flex
          position="relative"
          zIndex={1}
          gap={6}
          px={{ base: 4, md: 8 }}
          align="start"
          maxW="1600px"
          mx="auto"
        >
          {/* Sidebar */}
          <Box display={{ base: "none", lg: "block" }} w="320px" flexShrink={0}>
            <EmpeiriaSidebar />
          </Box>

          {/* Main Right Content */}
          <Box flex="1" minW="0">
            {/* 🟣 Persistent Network Info Box */}
            <EmpeiriaNetworkBox />
            {/* 🧱 Page-specific content */}
            <Box
              bg={sidebarBg}
              borderRadius="2xl"
              border="1px solid"
              borderColor={border}
              p={{ base: 6, md: 8 }}
            >
              {children}
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box position="relative" zIndex={10}>
        <Footer />
      </Box>
    </>
  );
}
