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

export default function EmpeiriaValidatorManagementPage() {
  return (
    <>
      <Head>
        <title>Empeiria - Validator Management</title>
        <meta
          name="description"
          content="Empeiria Validator Management Guide"
        />
      </Head>

      <EmpeiriaLayout>
        <Heading fontSize="3xl" mb={6} textAlign="center">
          👨‍💼 Validator Management
        </Heading>

        <VStack align="stretch" spacing={8}>
          {/* Create Validator */}
          <Box>
            <Heading fontSize="2xl" mb={4} color="orange.400">
              Create Validator
            </Heading>
            
            <VStack align="stretch" spacing={6}>
              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Create validator
                </Text>
                <CodeBlock
                  code={`emped tx staking create-validator \\
--amount="1000000000uempe" \\
--pubkey=$(emped tendermint show-validator) \\
--moniker=NodeName \\
--identity="" \\
--website="your website" \\
--details="details node validator" \\
--chain-id=empe-testnet-2 \\
--commission-rate="0.1" \\
--commission-max-rate="0.15" \\
--commission-max-change-rate="0.05" \\
--min-self-delegation=1000000 \\
--gas-adjustment=1.2 \\
--gas-prices="0.5uempe" \\
--gas=auto \\
--from=wallet`}
                />
                <Text fontSize="sm" color="gray.500" mt={2}>
                  💡 Tip: Make sure to save your priv_validator_key.json file!
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Edit Validator */}
          <Box>
            <Heading fontSize="2xl" mb={4} color="orange.400">
              Edit Validator
            </Heading>
            
            <VStack align="stretch" spacing={6}>
              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Edit validator information
                </Text>
                <CodeBlock
                  code={`emped tx staking edit-validator \\
--new-moniker="NewNodeName" \\
--identity="keybase-id" \\
--website="https://yourwebsite.com" \\
--details="Updated validator description" \\
--chain-id=empe-testnet-2 \\
--gas-adjustment=1.2 \\
--gas-prices="0.5uempe" \\
--gas=auto \\
--from=wallet`}
                />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Change commission rate
                </Text>
                <CodeBlock
                  code={`emped tx staking edit-validator \\
--commission-rate="0.05" \\
--chain-id=empe-testnet-2 \\
--gas-adjustment=1.2 \\
--gas-prices="0.5uempe" \\
--gas=auto \\
--from=wallet`}
                />
                <Text fontSize="sm" color="gray.500" mt={2}>
                  ⚠️ Note: Commission rate can only be changed once per day and cannot exceed commission-max-change-rate
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Unjail Validator */}
          <Box>
            <Heading fontSize="2xl" mb={4} color="orange.400">
              Unjail Validator
            </Heading>
            
            <VStack align="stretch" spacing={6}>
              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Check jailed reason
                </Text>
                <CodeBlock
                  code={`emped query slashing signing-info $(emped tendermint show-validator)`}
                />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Unjail validator
                </Text>
                <CodeBlock
                  code={`emped tx slashing unjail --from wallet --chain-id empe-testnet-2 --gas-prices 0.5uempe --gas-adjustment 1.2 --gas auto -y`}
                />
                <Text fontSize="sm" color="gray.500" mt={2}>
                  ⚠️ Note: You can only unjail after the jail period has passed
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Validator Info */}
          <Box>
            <Heading fontSize="2xl" mb={4} color="orange.400">
              Validator Information
            </Heading>
            
            <VStack align="stretch" spacing={6}>
              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Check node ID
                </Text>
                <CodeBlock code={`emped status 2>&1 | jq .NodeInfo`} />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Check validator info
                </Text>
                <CodeBlock code={`emped status 2>&1 | jq .ValidatorInfo`} />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Get validator address
                </Text>
                <CodeBlock code={`emped keys show wallet --bech val -a`} />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Query validator details
                </Text>
                <CodeBlock code={`emped query staking validator $(emped keys show wallet --bech val -a)`} />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Check if validator is jailed
                </Text>
                <CodeBlock code={`emped query staking validator $(emped keys show wallet --bech val -a) | grep jailed`} />
              </Box>
            </VStack>
          </Box>

          {/* Governance */}
          <Box>
            <Heading fontSize="2xl" mb={4} color="orange.400">
              Governance
            </Heading>
            
            <VStack align="stretch" spacing={6}>
              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  List all proposals
                </Text>
                <CodeBlock code={`emped query gov proposals`} />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  View proposal by ID
                </Text>
                <CodeBlock code={`emped query gov proposal 1`} />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Vote yes on proposal
                </Text>
                <CodeBlock
                  code={`emped tx gov vote 1 yes --from wallet --chain-id empe-testnet-2 --gas-adjustment 1.2 --gas-prices 0.5uempe --gas auto -y`}
                />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Vote no on proposal
                </Text>
                <CodeBlock
                  code={`emped tx gov vote 1 no --from wallet --chain-id empe-testnet-2 --gas-adjustment 1.2 --gas-prices 0.5uempe --gas auto -y`}
                />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Vote abstain on proposal
                </Text>
                <CodeBlock
                  code={`emped tx gov vote 1 abstain --from wallet --chain-id empe-testnet-2 --gas-adjustment 1.2 --gas-prices 0.5uempe --gas auto -y`}
                />
              </Box>

              <Box>
                <Text fontSize="md" mb={2} fontWeight="semibold">
                  Vote no with veto on proposal
                </Text>
                <CodeBlock
                  code={`emped tx gov vote 1 no_with_veto --from wallet --chain-id empe-testnet-2 --gas-adjustment 1.2 --gas-prices 0.5uempe --gas auto -y`}
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