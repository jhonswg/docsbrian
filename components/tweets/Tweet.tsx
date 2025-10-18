import { FC, ReactNode } from "react";
import {
  VStack,
  Heading,
  Text,
  useColorModeValue,
  LinkBoxProps,
} from "@chakra-ui/react";

interface StatCardProps extends LinkBoxProps {
  value: string;
  title: string;
  description: string;
  children?: ReactNode; // ⬅️ tambahkan ini
}

export const Tweet: FC<StatCardProps> = ({
  value,
  title,
  description,
  children, // ⬅️ tambahkan ini
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
      {/* 🔹 Tambahkan children di sini */}
      {children}

      <Heading fontSize="3xl" fontWeight="bold" color="white">
        {value}
      </Heading>
      <Text fontWeight="semibold" color="gray.200">
        {title}
      </Text>
      <Text fontSize="sm" color="gray.400" maxW="sm">
        {description}
      </Text>
    </VStack>
  );
};

export default Tweet;
