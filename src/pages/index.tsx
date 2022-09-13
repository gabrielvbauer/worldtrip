import { Box, Center, Divider, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { Benefits } from '../Components/Benefits/index'
import { Header } from '../Components/Header/index'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>
      <Header />
      <Flex bgImage="images/Background.png" bgRepeat="no-repeat" bgSize="cover" minH="335px">
        <HStack maxW="1160px" w="100%" mx="auto" justify="space-between">
          <Stack spacing="20px" maxW="524px">
            <Text
              color="white.500"
              fontSize="2.25rem"
              fontWeight="medium"
            >
              5 Continentes,<br />infinitas possibilidades.
            </Text>
            <Text
              color="white.400"
              fontSize="1.25rem"
              fontWeight="regular"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>
          <Image style={{rotate: '1deg', marginBottom: '-110px'}} src="images/Airplane.svg" alt="Airplane"/>
        </HStack>
      </Flex>
      <Box maxW="1160px" mx="auto" mb="80px" mt="115px">
        <HStack justify="space-between">
          <Benefits title='vida noturna' icon='images/cocktail.svg' />
          <Benefits title='praia' icon='images/surf.svg' />
          <Benefits title='moderno' icon='images/building.svg' />
          <Benefits title='clássico' icon='images/museum.svg' />
          <Benefits title='e mai...' icon='images/earth.svg' />
        </HStack>
        <Center mt="5rem">
          <Divider w="90px" border="2px" borderColor="gray.600" orientation='horizontal' />
        </Center>
        <Text my="3.25rem" fontSize="2.25rem" fontWeight="medium" textAlign='center'>Vamos nessa?<br />Então escolha seu continente</Text>
        <Flex minH="28.125rem">
          <Link href="/continent">
            <Center>
              <Text>Europa</Text>
              <Text>O continente mais antigo</Text>
            </Center>
          </Link>
        </Flex>
      </Box>
    </>
  )
}