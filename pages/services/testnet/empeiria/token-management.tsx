import Head from "next/head";
import {
  Box,
  Heading,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";
import EmpeiriaLayout from "@/components/sidebar/empeiria/EmpeiriaLayout";

export default function EmpeiriaTokenManagementPage() {
  return (
    <>
      <Head>
        <title>Empeiria - Token Management</title>
        <meta
          name="description"
          content="Empeiria Token Management Guide"
        />
      </Head>

      <EmpeiriaLayout>
        <Heading fontSize="3xl" mb={6} textAlign="center">
          💰 Token Management
        </Heading>

        <VStack align="stretch" spacing={8}>
          {/* Rewards Section */}
          <Box>
            <Heading fontSize="2xl" mb={4} color="orange.400">
              Withdraw Rewards
            </Heading>
            
            <VStack align="stretch" spacing={6}>
              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Withdraw all rewards
                </Text>
                <CodeBlock
                  code={`emped tx distribution withdraw-all-rewards --from wallet --chain-id empe-testnet-2  --gas-adjustment 1.2 --gas-prices 0.5uempe --gas auto -y`}
                />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Withdraw rewards with commission
                </Text>
                <CodeBlock
                  code={`emped tx distribution withdraw-rewards $(emped keys show wallet --bech val -a) --commission --from wallet --chain-id empe-testnet-2  --gas-adjustment 1.2 --gas-prices 0.5uempe --gas auto -y`}
                />
              </Box>
            </VStack>
          </Box>

          {/* Delegation Section */}
          <Box>
            <Heading fontSize="2xl" mb={4} color="orange.400">
              Delegation
            </Heading>
            
            <VStack align="stretch" spacing={6}>
              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Delegate token to your own validator
                </Text>
                <CodeBlock
                  code={`emped tx staking delegate $(emped keys show wallet --bech val -a) 1000000uempe --from wallet --chain-id empe-testnet-2  --gas-adjustment 1.2 --gas-prices 0.5uempe --gas auto -y`}
                />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Redelegate token to another validator
                </Text>
                <CodeBlock
                  code={`emped tx staking redelegate $(emped keys show wallet --bech val -a) <TO_VALOPER_ADDRESS> 1000000uempe --from wallet --chain-id empe-testnet-2 --gas-adjustment 1.2 --gas-prices 0.5uempe --gas auto -y`}
                />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Unbond token from your validator
                </Text>
                <CodeBlock
                  code={`emped tx staking unbond $(emped keys show wallet --bech val -a) 1000000uempe --from wallet --chain-id empe-testnet-2 --gas-adjustment 1.2 --gas-prices 0.5uempe --gas auto -y`}
                />
              </Box>
            </VStack>
          </Box>

          {/* Wallet Management */}
          <Box>
            <Heading fontSize="2xl" mb={4} color="orange.400">
              Wallet Management
            </Heading>
            
            <VStack align="stretch" spacing={6}>
              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Add wallet
                </Text>
                <CodeBlock code={`emped keys add wallet`} />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Recover wallet
                </Text>
                <CodeBlock code={`emped keys add wallet --recover`} />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  List all wallets
                </Text>
                <CodeBlock code={`emped keys list`} />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Delete wallet
                </Text>
                <CodeBlock code={`emped keys delete wallet`} />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Export wallet key
                </Text>
                <CodeBlock code={`emped keys export wallet`} />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Check wallet balance
                </Text>
                <CodeBlock code={`emped q bank balances $(emped keys show wallet -a)`} />
              </Box>
            </VStack>
          </Box>

          {/* Send Tokens */}
          <Box>
            <Heading fontSize="2xl" mb={4} color="orange.400">
              Send Tokens
            </Heading>
            
            <VStack align="stretch" spacing={6}>
              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Send token to another wallet
                </Text>
                <CodeBlock
                  code={`emped tx bank send wallet <TO_WALLET_ADDRESS> 1000000uempe --from wallet --chain-id empe-testnet-2 --gas-adjustment 1.2 --gas-prices 0.5uempe --gas auto -y`}
                />
              </Box>
            </VStack>
          </Box>
        </VStack>

        <Box as={Link} href="/services" textDecoration="none">
          <Button
            colorScheme="orange"
            variant="ghost"
            size="sm"
            mt={8}
          >
            ← Back to Network
          </Button>
        </Box>
      </EmpeiriaLayout>
    </>
  );
}