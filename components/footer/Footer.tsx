import { FC } from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Link as ChakraLink,
  useColorModeValue,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { Logo } from "@/components/logo";
import { FaLinkedin, FaTelegram, FaFacebook, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: FC = (props) => {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const linkHover = useColorModeValue("brand.600", "brand.500");

  return (
    <Box as="footer" mt="5" {...props}>
      <Flex
        px={{ base: 6, md: 4 }}
        py={{ base: 10, md: 16 }}
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="start"
        gap={{ base: 10, md: 20 }}
        maxW="1400px"
        mx="auto"
      >
        {/* LEFT: Logo + Tagline + Social Icons */}
        <VStack align="start" spacing={4} maxW="500px">
          <Logo />
          <Text color={textColor} fontSize="md">
            Jhonswg offers reliable blockchain infrastructure with a focus on
            security, performance, and validator node services.
          </Text>
          <HStack spacing={3} pt={2} ml={-3}>
            <IconButton
              as="a"
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              icon={<Icon as={FaLinkedin} />}
              variant="ghost"
              size="lg"
              color={textColor}
              _hover={{ color: linkHover }}
            />
            <IconButton
              as="a"
              href="https://discordapp.com/users/847151330807382067"
              target="_blank"
              aria-label="Discord"
              icon={<Icon as={FaDiscord} />}
              variant="ghost"
              size="lg"
              color={textColor}
              _hover={{ color: linkHover }}
            />
            <IconButton
              as="a"
              href="https://www.t.me/jhonswg/"
              target="_blank"
              aria-label="Telegram"
              icon={<Icon as={FaTelegram} />}
              variant="ghost"
              size="lg"
              color={textColor}
              _hover={{ color: linkHover }}
            />
            <IconButton
              as="a"
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              icon={<Icon as={FaFacebook} />}
              variant="ghost"
              size="lg"
              color={textColor}
              _hover={{ color: linkHover }}
            />
          </HStack>
        </VStack>

        {/* RIGHT: Link sections */}
        <Flex
          wrap="wrap"
          gap={{ base: 8, md: 12, lg: 20 }}
          justify={{ base: "flex-start", md: "flex-end" }}
          flex="1"
        >
          {/* Services */}
          <VStack align="start" spacing={3}>
            <Text fontWeight="bold" fontSize="lg">
              Services
            </Text>
            <ChakraLink href="/staking" fontSize="md" color={textColor} _hover={{ color: linkHover }}>
              Staking
            </ChakraLink>
            <ChakraLink href="/ibc-relayer" fontSize="md" color={textColor} _hover={{ color: linkHover }}>
              IBC Relayer
            </ChakraLink>
            <ChakraLink href="/monitoring" fontSize="md" color={textColor} _hover={{ color: linkHover }}>
              Monitoring
            </ChakraLink>
            <ChakraLink href="/rpc-endpoint" fontSize="md" color={textColor} _hover={{ color: linkHover }}>
              RPC Endpoint
            </ChakraLink>
          </VStack>

          {/* Support */}
          <VStack align="start" spacing={3}>
            <Text fontWeight="bold" fontSize="lg">
              Support
            </Text>
            <ChakraLink href="/feedback" fontSize="md" color={textColor} _hover={{ color: linkHover }}>
              Feedback & Bug Report
            </ChakraLink>
            <ChakraLink href="/terms" fontSize="md" color={textColor} _hover={{ color: linkHover }}>
              Terms
            </ChakraLink>
            <ChakraLink href="/privacy" fontSize="md" color={textColor} _hover={{ color: linkHover }}>
              Privacy
            </ChakraLink>
          </VStack>

          {/* Contact */}
          <VStack align="start" spacing={3}>
            <Text fontWeight="bold" fontSize="lg">
              Contact
            </Text>
            <Text fontSize="md" color={textColor}>
              Feel free to reach out
            </Text>
            <ChakraLink
              href="mailto:me@jhonswg.com"
              fontSize="md"
              color="pink.500"
              _hover={{ color: "brand.500" }}
            >
              me@jhonswg.com
            </ChakraLink>
          </VStack>
        </Flex>
      </Flex>

      {/* Bottom Bar */}
      <Box borderTop="1px" borderColor={borderColor} py="6">
        <Flex
          px={{ base: 6, md: 8 }}
          align="center"
          justify={{ base: "flex-start", md: "space-between" }}
          direction={{ base: "column", md: "row" }}
          gap={4}
          maxW="1400px"
          mx="auto"
        >
          <Text fontSize="sm" color={textColor}>
            © {new Date().getFullYear()} Jhonswg. All rights reserved.
          </Text>
          <ChakraLink
            href="#top"
            fontSize="sm"
            color={textColor}
            _hover={{ color: linkHover }}
            display="flex"
            alignItems="center"
            gap={2}
          >
            <Text>↑</Text>
            <Text>Back to top</Text>
          </ChakraLink>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
