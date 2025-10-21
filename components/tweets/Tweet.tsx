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
  return (
    <VStack
      align="start"
      spacing={3}
      p={8}
      borderRadius="2xl"
      bg={useColorModeValue(
        "rgba(255,255,255,0.08)",
        "rgba(255,255,255,0.05)"
      )}
      border="1px solid rgba(255,255,255,0.1)"
      backdropFilter="blur(16px)"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-5px)",
        borderColor: "rgba(255,255,255,0.3)",
      }}
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.3)"
      {...props}
    >
      {/* 🔹 Children di atas jika childrenPosition = "top" */}
      {childrenPosition === "top" && children}

      <Heading fontSize="3xl" fontWeight="bold" color="white">
        {value}
      </Heading>

      <Text fontWeight="semibold" color="gray.200">
        {title}
      </Text>

      {/* 🔹 Description disembunyikan di HP */}
      <Text
        fontSize="sm"
        color="gray.400"
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
