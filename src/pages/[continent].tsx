import { Flex, HStack, Stack, Text, Image, Box, VStack, Avatar } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../Components/Header/index";

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
            <Flex direction="column" align="center">
              <Text color="yellow.500" fontSize="3rem" fontWeight="semibold">50</Text>
              <Text fontSize="1.5rem" fontWeight="semibold">países</Text>
            </Flex>
            <Flex direction="column" align="center">
              <Text color="yellow.500" fontSize="3rem" fontWeight="semibold">60</Text>
              <Text fontSize="1.5rem" fontWeight="semibold">línguas</Text>
            </Flex>
            <Flex direction="column" align="center">
              <Text color="yellow.500" fontSize="3rem" fontWeight="semibold">27</Text>
              <Text fontSize="1.5rem" fontWeight="semibold">cidades + 100</Text>
            </Flex>
          </HStack>
        </HStack>
        <VStack spacing="2.5rem" align="self-start">
          <Text fontSize="2.25rem" fontWeight="medium">Cidades +100</Text>
          <VStack rounded="0.25rem" overflow="hidden" align="start" border="0.125rem" borderColor="yellow.400">
            <Image src="https://github.com/gabrielvbauer.png" alt="city" />
            <HStack px="1.5rem" pb="1.5rem" py="1.125rem">
              <VStack>
                <Text>Londres</Text>
                <Text>Reino Unido</Text>
              </VStack>
              <Avatar />
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </>
  )
}