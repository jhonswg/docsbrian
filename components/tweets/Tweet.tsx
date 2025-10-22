import { FC, ReactNode } from "react";
import {
  VStack,
  Heading,
  Text,
  useColorModeValue,
  LinkBoxProps,
} from "@chakra-ui/react";

export interface StatCardProps extends LinkBoxProps {
  value: string;
  title: string;
  description: string;
  children?: ReactNode;
  childrenPosition?: "top" | "bottom"; // Posisi children: atas atau bawah
}

export const Tweet: FC<StatCardProps> = ({
  value,
  title,
  description,
  children,
  childrenPosition = "top", // Default: children di atas
  ...props
}) => {
  // ✅ Warna dinamis untuk light/dark mode
  const bg = useColorModeValue(
    "rgba(0,0,0,0.05)", // Light mode: sedikit abu transparan
    "rgba(255,255,255,0.05)" // Dark mode: putih transparan
  );
  const borderColor = useColorModeValue(
    "rgba(0,0,0,0.1)",
    "rgba(255,255,255,0.1)"
  );
  const valueColor = useColorModeValue("purple.600", "white");
  const titleColor = useColorModeValue("gray.800", "gray.200");
  const descColor = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack
      align="start"
      spacing={3}
      p={8}
      borderRadius="2xl"
      bg={bg}
      border={`1px solid ${borderColor}`}
      backdropFilter="blur(16px)"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-5px)",
        borderColor: useColorModeValue(
          "rgba(0,0,0,0.3)",
          "rgba(255,255,255,0.3)"
        ),
      }}
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      {...props}
    >
      {/* 🔹 Children di atas jika childrenPosition = "top" */}
      {childrenPosition === "top" && children}

      <Heading fontSize="3xl" fontWeight="bold" color={valueColor}>
        {value}
      </Heading>

      <Text fontWeight="semibold" color={titleColor}>
        {title}
      </Text>

      {/* 🔹 Description disembunyikan di HP */}
      <Text
        fontSize="sm"
        color={descColor}
        maxW="sm"
        display={{ base: "none", md: "block" }}
      >
        {description}
      </Text>

      {/* 🔹 Children di bawah jika childrenPosition = "bottom" */}
      {childrenPosition === "bottom" && children}
    </VStack>
  );
};

export default Tweet;
