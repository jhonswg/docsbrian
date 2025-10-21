import { FC } from "react";
import { Box, BoxProps, SimpleGrid, Image } from "@chakra-ui/react";
import FeatureCard from "./FeatureCard";
import { Section } from "@/components/section";
import { Feature } from "@/types";

interface FeaturesProps extends BoxProps {}

const features: Feature[] = [
  {
    title: "High Security",
    description:
      "Jhonswg Staking Service is highly secure with 24/7 monitoring, giving you peace of mind while your assets earn rewards effortlessly.",
    icon: "/icons/lock.svg",
  },
  {
    title: "Low Fees Commission",
    description:
      "We offer staking services with competitive commissions ranging between 5–10% across all supported chains, providing flexibility and fair rewards for every delegator.",
    icon: "/icons/coins.svg",
  },
  {
    title: "Non Custodial",
    description:
      "Our staking service is fully non-custodial — you always maintain full control over your funds, ensuring complete ownership and security.",
    icon: "/icons/fingerprint.svg",
  },
];

const Features: FC<FeaturesProps> = ({ ...props }) => {
  return (
    <Box position="relative" {...props}>
      <Box
        position="absolute"
        boxSize="72"
        borderRadius="full"
        top="70%"
        left="40%"
        bg="brand.500"
        filter="blur(160px)"
        opacity={0.7}
        zIndex={0}
      />

      <Section title="What we offer" text="" position="relative" zIndex={1} />

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 6, md: 2 }}
        justifyItems="center"
        position="relative"
        zIndex={1}
        mb="-5"
      >
        {features.map(({ title, description, icon }, index) => (
          <FeatureCard
            key={index}
            title={title}
            description={description}
            maxW={{ base: "90%", md: "50%", lg: "95%" }}
            mx="auto"
            textAlign="center"
            icon={
              <Image
                src={icon}
                alt={title}
                boxSize="64px"
                mx="auto"
                mb={4}
                filter="invert(100%)"
                transition="all 0.3s ease-in-out"
                _hover={{
                  filter:
                    "invert(45%) sepia(95%) saturate(3000%) hue-rotate(235deg)",
                  transform: "translateY(-4px)",
                }}
              />
            }
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Features;
