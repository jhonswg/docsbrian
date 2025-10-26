import {
  Box,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import SymphonyNetworkBox from "@/components/sidebar/symphony/SymphonyNetworkBox";
import { HarmonySidebar } from "@/components/sidebar/symphony/SymphonySidebar";
import { Footer } from "@/components/footer";

export default function SymphonyLayout({ children }: { children: ReactNode }) {
  const border = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");
  const sidebarBg = useColorModeValue("white", "gray.800");

  return (
    <>
      <Box
        position="relative"
        minH="100vh"
        pt="100px"
        pb="16"
        overflow="visible"
      >
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
            <HarmonySidebar/>
          </Box>

          {/* Main Right Content */}
          <Box flex="1" minW="0">
            {/* 🟣 Persistent Network Info Box */}
            <SymphonyNetworkBox />
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