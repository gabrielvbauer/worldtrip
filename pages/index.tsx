import { Box, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>
      <Box w="100%" maxW="1160px" mx="auto">
        <Flex align="center" justify="center" py="27px" px="2">
          <Image src="images/Logo.svg" alt='Logo' />
        </Flex>
      </Box>
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
      <Box maxW="1160px" mx="auto">
        <HStack>
          <Flex direction="column" align="center">
            <Image src="images/cocktail.svg" alt="cocktail"/>
            <Text>Vida noturna</Text>
          </Flex>
        </HStack>
      </Box>
    </>
  )
}
