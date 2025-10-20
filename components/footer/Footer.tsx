import { FC } from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/config";

const Footer: FC = (props) => {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const linkHover = useColorModeValue("brand.600", "brand.300");
  

  return (
    <Box as="footer" mt="10" {...props}>
      <Flex
        px={{ base: 6, md: 4 }}
        py={{ base: 10, md: 16 }}
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "start", md: "start" }}
        gap={10}

      >
        {/* LEFT: Logo + Description */}
        <VStack align="start" spacing={4} maxW="lg">
          <Logo />
          <Text color={textColor}>
            Jhonswg offers reliable blockchain infrastructure with a focus on
            security, performance, and validator node services.
          </Text>
          <ChakraLink href="mailto:me@jhonswg.com" color="pink.500" _hover={{ color: linkHover }}>
              me@jhonswg.com
            </ChakraLink>
        </VStack>

        {/* RIGHT: Link sections */}
        <Flex wrap="wrap" gap={8} justify="flex-end">
          <VStack align="start">
            <Text fontWeight="bold">Products</Text>
            <ChakraLink href="/staking" _hover={{ color: linkHover }}>
              Staking
            </ChakraLink>
            <ChakraLink href="/nodes" _hover={{ color: linkHover }}>
              Nodes
            </ChakraLink>
            <ChakraLink href="/validators" _hover={{ color: linkHover }}>
              Validators
            </ChakraLink>
          </VStack>
          <VStack align="start">
            <Text fontWeight="bold">Company</Text>
            <ChakraLink href="/about" _hover={{ color: linkHover }}>
              About Us
            </ChakraLink>
            <ChakraLink href="/team" _hover={{ color: linkHover }}>
              Team
            </ChakraLink>
            <ChakraLink href="/careers" _hover={{ color: linkHover }}>
              Careers
            </ChakraLink>
          </VStack>
          <VStack align="start">
            <Text fontWeight="bold">Resources</Text>
            <ChakraLink href="/blog" _hover={{ color: linkHover }}>
              Blog
            </ChakraLink>
            <ChakraLink href="/docs" _hover={{ color: linkHover }}>
              Documentation
            </ChakraLink>
            <ChakraLink href="/contact" _hover={{ color: linkHover }}>
              Contact
            </ChakraLink>
          </VStack>
        </Flex>
      </Flex>

      {/* Footer bottom bar */}
      <Box borderTop="1px" borderColor={borderColor} py="6">
        <Flex
          px={{ base: 6, md: 4 }}
          align="center"
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          gap={4}
        >
          <Text fontSize="sm" color={textColor}>
            &copy; {new Date().getFullYear()} Jhonswg. All rights reserved.
          </Text>
          <HStack spacing={4}>
            <ChakraLink
              href="/privacy"
              fontSize="sm"
              color={textColor}
              _hover={{ color: linkHover }}
            >
              Privacy Policy
            </ChakraLink>
            <ChakraLink
              href="/terms"
              fontSize="sm"
              color={textColor}
              _hover={{ color: linkHover }}
            >
              Terms of Service
            </ChakraLink>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
