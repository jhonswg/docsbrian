import { FC } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Section } from "@/components/section";
import Tweet from "./Tweet";

interface TweetsProps {}

const tweets = [
  {
    value: "99.9%",
    title: "Uptime",
    description:
      "Our systems are monitored 24/7 to ensure that any deviation from the norm is instantly recognized.",
  },
  {
    value: "50+",
    title: "Networks Supported",
    description:
      "We have effectively served more than 50 networks, including Ethereum, Solana, Cosmos, and Polkadot.",
  },
  {
    value: "2021",
    title: "Founded",
    description:
      "Since 2021, we have consistently delivered secure, reliable, and efficient validator operations.",
  },
];

const Tweets: FC<TweetsProps> = () => {
  return (
    <Box
      position="relative"
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 16 }}
    >
      <Box
        position="absolute"
        bottom="1%"
        left="30%"
        w="80"
        h="80"
        bg="pink.600"
        filter="blur(160px)"
        opacity={0.25}
      />

      {/* Konten */}
      <Section
        title="Loved by Communities"
        text="Empowering blockchain networks with performance, uptime, and trust."
      />

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={8}
        position="relative"
        zIndex={1}
      >
        {tweets.map((item, i) => (
          <Tweet key={i} {...item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Tweets;
