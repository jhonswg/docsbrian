import {
  Box,
  Code,
  IconButton,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";

export const CodeBlock = ({ code }: { code: string }) => {
  const codeBg = useColorModeValue("whiteAlpha.50", "whiteAlpha.100");
  const border = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");
  const toast = useToast();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      bg={codeBg}
      border="1px solid"
      borderColor={border}
      borderRadius="md"
      p={4}
      position="relative"
    >
      <IconButton
        aria-label="Copy code"
        icon={<FiCopy />}
        size="sm"
        position="absolute"
        top={2}
        right={2}
        onClick={copyToClipboard}
        colorScheme={copied ? "green" : "gray"}
      />
      <Box overflowX="auto" whiteSpace="pre">
        <Code display="block" bg="transparent" fontSize="sm">
          {code}
        </Code>
      </Box>
    </Box>
  );
};
