import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Stack,
  StackProps,
  Text,
  useColorModeValue,
  keyframes,
} from "@chakra-ui/react";
import { SearchButton } from "@/components/search-button";
import { RiArrowRightLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { FC, useState, useEffect } from "react";

interface HeroProps extends StackProps {}

// Keyframe untuk cursor blink
const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

// Keyframe untuk fade in per karakter
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Hero: FC<HeroProps> = () => {
  const router = useRouter();
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Node Validator";
  const typingSpeed = 100; // ms per karakter saat mengetik
  const deletingSpeed = 50; // ms per karakter saat menghapus
  const pauseTime = 2000; // ms jeda setelah selesai mengetik

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleTyping = () => {
      if (!isDeleting && displayText.length < fullText.length) {
        // Mengetik
        setDisplayText(fullText.slice(0, displayText.length + 1));
        timeout = setTimeout(handleTyping, typingSpeed);
      } else if (!isDeleting && displayText.length === fullText.length) {
        // Jeda setelah selesai mengetik
        timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText.length > 0) {
        // Menghapus
        setDisplayText(fullText.slice(0, displayText.length - 1));
        timeout = setTimeout(handleTyping, deletingSpeed);
      } else if (isDeleting && displayText.length === 0) {
        // Mulai mengetik lagi
        setIsDeleting(false);
        timeout = setTimeout(handleTyping, 500);
      }
    };

    timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  const purpleColor = useColorModeValue("purple.600", "purple.300");

  return (
    <Stack
      position="relative"
      maxW="container.md"
      py="12"
      mx="auto"
      mt="100"
      spacing="6"
      align="center"
      minHeight="60vh"
      justify="center"
      transform={{ base: "translateY(10%)", md: "translateY(5%)" }}
    >
      <Flex
        direction="row"
        alignItems="center"
        blendMode="luminosity"
        zIndex="1"
      >
        <Button
          maxW="60"
          size="sm"
          colorScheme="whiteAlpha"
          color={useColorModeValue("gray.600", "white")}
          shadow="lg"
          border="1px"
          borderColor={useColorModeValue("white", "whiteAlpha.300")}
          borderRadius="full"
          rightIcon={<Icon as={RiArrowRightLine} />}
          onClick={() => router.push("/docs/mdx")}
        >
          Stake with us !
        </Button>
      </Flex>

      <Heading
        as="h1"
        fontSize={{ base: "4xl", md: "7xl" }}
        color={useColorModeValue("gray.700", "gray.100")}
        textAlign="center"
        textTransform="uppercase"
        lineHeight="0.5"
        zIndex="1"
        blendMode="luminosity"
      >
        Proof of Stake
      </Heading>

      {/* Heading dengan Typing Effect - Berulang */}
      <Heading
        as="h3"
        fontSize={{ base: "3xl", md: "6xl" }}
        color={purpleColor}
        textAlign="center"
        textTransform="uppercase"
        lineHeight="1"
        zIndex="1"
        blendMode="luminosity"
        display="flex"
        alignItems="center"
        justifyContent="center"
        minH={{ base: "50px", md: "80px" }}
      >
        {displayText}
        <Box
          as="span"
          display="inline-block"
          w="3px"
          h={{ base: "30px", md: "50px" }}
          bg={purpleColor}
          ml="2"
          animation={`${blink} 1s step-end infinite`}
        />
      </Heading>

      <Text
        fontSize={{ base: "md", md: "md" }}
        fontWeight="medium"
        color={useColorModeValue("gray.600", "gray.100")}
        textAlign="center"
        letterSpacing="tighter"
        zIndex="1"
        blendMode="luminosity"
      >
        We are committed, enthusiastic, and thrifty in operating nodes for
        blockchain projects, always up to date with industry developments, and
        eager to contribute to the advancement of blockchain technology through
        efficient node operations.
      </Text>

      <Box
        boxSize="72"
        position="absolute"
        top="0"
        left="0"
        bg="brand.500"
        borderRadius="full"
        filter="blur(200px)"
      />
      <Box
        boxSize="72"
        position="absolute"
        bottom="0"
        right="0"
        bg="pink.500"
        borderRadius="full"
        filter="blur(200px)"
      />
    </Stack>
  );
};

export default Hero;