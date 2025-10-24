import {
    Box,
    Flex,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { Navbar } from "@/components/navbar";
  import { navbarRoutes } from "@/config/navbar-routes";
  import { EmpeiriaSidebar } from "@/components/sidebar/empeiria/empeiria-sidebar";
  import { ReactNode } from "react";
  
  export default function EmpeiriaLayout({ children }: { children: ReactNode }) {
    const border = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");
    const sidebarBg = useColorModeValue("white", "gray.800");
  
    return (
      <>
        <Navbar routes={navbarRoutes} />
  
        <Box position="relative" minH="100vh" pt="100px" pb="16" overflow="hidden">
          {/* Background gradient blur */}
          <Box
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
          />
  
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
            <EmpeiriaSidebar />
            <Box
              flex="1"
              minW="0"
              bg={sidebarBg}
              borderRadius="2xl"
              border="1px solid"
              borderColor={border}
              p={{ base: 6, md: 8 }}
            >
              {children}
            </Box>
          </Flex>
        </Box>
      </>
    );
  }
  