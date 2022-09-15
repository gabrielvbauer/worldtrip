import { Box, Center, Divider, Flex, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Benefits } from '../Components/Benefits/index'
import { Header } from '../Components/Header/index'

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { SwipeItem } from '../Components/SwipeItem/index'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>
      <Header />
      <Flex bgImage="images/Background.png" bgRepeat="no-repeat" bgSize="cover" minH="335px">
        <HStack maxW="1160px" w="100%" mx="auto" justify="space-between" px="6">
          <Stack spacing="20px" maxW="524px">
            <Text
              color="white.500"
              fontSize={["1.25rem", "2.25rem" ]}
              fontWeight="medium"
            >
              5 Continentes,<br />infinitas possibilidades.
            </Text>
            <Text
              color="white.400"
              fontSize={["sm", "20"]}
              fontWeight="regular"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>
          <Image style={{rotate: '1deg', marginBottom: '-110px'}} src="images/Airplane.svg" alt="Airplane" display={["none", "none", "block"]}/>
        </HStack>
      </Flex>
      <Box maxW="1160px" mx="auto" mb="80px" mt="115px" px="6">
        <HStack justify={["center", "space-between"]} wrap="wrap" rowGap="24px">
          <Benefits title='vida noturna' icon='images/cocktail.svg' />
          <Benefits title='praia' icon='images/surf.svg' />
          <Benefits title='moderno' icon='images/building.svg' />
          <Benefits title='clássico' icon='images/museum.svg' />
          <Benefits title='e mais...' icon='images/earth.svg' />
        </HStack>
        <Center mt="5rem">
          <Divider w="90px" border="2px" borderColor="gray.600" orientation='horizontal' />
        </Center>
        <Text my="3.25rem" fontSize={["1.25rem", "2.25rem"]} fontWeight="medium" textAlign='center'>Vamos nessa?<br />Então escolha seu continente</Text>
        <Flex minH="28.125rem">
          <Swiper
            navigation={true}
            pagination={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          >
            <SwiperSlide>
              <SwipeItem
                href='/continent/europa'
                image='https://github.com/gabrielvbauer.png'
                title="Europa"
                subtitle='O continente mais antigo.'
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwipeItem
                href='/continent/africa'
                image='https://github.com/gabrielvbauer.png'
                title="Europa"
                subtitle='O continente mais antigo.'
              />
            </SwiperSlide>
          </Swiper>
          
        </Flex>
      </Box>
    </>
  )
}