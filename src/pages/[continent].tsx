import { Flex, HStack, Stack, Text, Image, Box, VStack, Avatar, Icon } from "@chakra-ui/react";
import Head from "next/head";
import { City } from "../Components/City/index";
import { Header } from "../Components/Header/index";
import { FiInfo } from 'react-icons/fi'
import { ContinentIndicator } from "../Components/ContinentIndicator/index";

interface ContinentProps {
  continent: string
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent} | Worldtrip</title>
      </Head>
      <Header />
      <Flex bgImage="images/europe.jpg" bgRepeat="no-repeat" bgPos="center" bgSize="cover" minH="31.25rem">
        <HStack maxW="1160px" w="100%" mx="auto" alignItems="end" pb="3.68rem">
          <Text color="white.500" fontSize="3rem" fontWeight="semibold">Europa</Text>
        </HStack>
      </Flex>
      <Box maxW="72.5rem" mx="auto">
        <HStack my="5rem" spacing="4.375rem">
          <Text maxW="37.5rem" fontSize="1.5rem" fontWeight="normal" textAlign="justify">
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <HStack spacing="2.625rem">
            <ContinentIndicator value="50" title="países" />
            <ContinentIndicator value="60" title="línguas" />
            <ContinentIndicator value="27" title="cidades +100" icon={FiInfo} />
          </HStack>
        </HStack>
        <VStack spacing="2.5rem" align="self-start">
          <Text fontSize="2.25rem" fontWeight="medium">Cidades +100</Text>
          <Flex gap="2.8rem" wrap="wrap" justify="space-between">
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