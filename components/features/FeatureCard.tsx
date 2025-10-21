import { FC, ReactNode } from "react";
import {
  Box,
  BoxProps,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

interface FeatureCardProps extends BoxProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  ...props
}) => {
  const cardBg = useColorModeValue(
    "linear(104.28deg, purple.200 1.24%, purple.500 32.96%, purple.200 68.22%)",
    "linear(104.28deg, rgb(38, 34, 71) 1.24%, purple.500 32.96%, rgb(38, 34, 71) 68.22%)"
  );

  const innerBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.200");

  // cek apakah sedang di tampilan mobile
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      role="group"
      position="relative"
      bgGradient={cardBg}
      borderRadius="3xl"
      overflow="hidden"
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: "translateY(-5px)",
      }}
      {...props}
    >
      <Box position="absolute" inset="1px" bgColor={innerBg} borderRadius="inherit" />

      <Stack position="relative" p="6" spacing="4" textAlign="center">
        <Flex
          w="64px"
          h="64px"
          justifyContent="center"
          alignItems="center"
          color={textColor}
          mx="auto"
        >
          {icon}
        </Flex>

        <Heading as="h3" fontSize="lg" color={textColor}>
          {title}
        </Heading>

        {/* Description:
            - tampil biasa di desktop
            - disembunyikan di mobile kecuali di-hover */}
        <Text
          color="gray.500"
          fontSize="sm"
          transition="all 0.3s ease"
          {...(isMobile
            ? {
                maxH: 0,
                opacity: 0,
                overflow: "hidden",
                _groupHover: {
                  maxH: "200px",
                  opacity: 1,
                  mt: 2,
                },
              }
            : {})}
        >
          {description}
        </Text>
      </Stack>
    </Box>
  );
};

export default FeatureCard;
