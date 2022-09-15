import { Flex, HStack, Stack, Text, Box, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { City } from "../../Components/City/index";
import { Header } from "../../Components/Header/index";
import { FiInfo } from 'react-icons/fi'
import { ContinentIndicator } from "../../Components/ContinentIndicator/index";

interface ContinentProps {
  continent: string
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent} | Worldtrip</title>
      </Head>
      <Header showGoBackButton />
      <Flex bgImage="images/europe.jpg" bgRepeat="no-repeat" bgPos="center" bgSize="cover" minH={["9.375rem", "31.25rem"]}>
        <Flex
          maxW="1160px"
          w="100%"
          mx="auto"
          alignItems={["center", "end"]}
          justify={["center", "inherit"]}
          pb={["0", "3.68rem"]}
          px="2"
        >
          <Text
            color="white.500"
            fontSize={["1.75rem", "3rem"]}
            fontWeight="semibold"
          >
            Europa
          </Text>
        </Flex>
      </Flex>
      <Box maxW="72.5rem" mx="auto">
        <Stack
          my={["1.5rem", "5rem"]}
          spacing={["1rem", "1rem", "4.375rem"]}
          direction={["column", "column", "row"]}
          px="2"
        >
          <Text maxW="37.5rem" fontSize={["0.875rem", "1.5rem"]} fontWeight="normal" textAlign="justify">
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <HStack spacing="2.625rem">
            <ContinentIndicator value="50" title="países" />
            <ContinentIndicator value="60" title="línguas" />
            <ContinentIndicator value="27" title="cidades +100" icon={FiInfo} />
          </HStack>
        </Stack>
        <VStack spacing={["1.25rem", "2.5rem"]} align="self-start" mb={["1.25rem", "2.1875rem"]}>
          <Text fontSize={["1.5rem", "2.25rem"]} fontWeight="medium" px="2">Cidades +100</Text>
          <Flex gap="2.8rem" wrap="wrap" justify={["center", "space-between"]}>
            <City title="Londres" subtitle="Reino unido" image="" flag=""/>
            <City title="Paris" subtitle="França" image="" flag=""/>
            <City title="Roma" subtitle="Itália" image="" flag=""/>
            <City title="Praga" subtitle="República Tcheca" image="" flag=""/>
            <City title="Amsterdã" subtitle="Holanda" image="" flag=""/>
          </Flex>
        </VStack>
      </Box>
    </>
  )
}