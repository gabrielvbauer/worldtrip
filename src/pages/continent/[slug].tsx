import { Flex, HStack, Stack, Text, Box, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { City } from "../../Components/City/index";
import { Header } from "../../Components/Header/index";
import { FiInfo } from 'react-icons/fi'
import { ContinentIndicator } from "../../Components/ContinentIndicator/index";
import { GetStaticPaths, GetStaticProps } from "next";
import { api } from "../../services/api";

interface ContinentProps {
  continent: {
    slug: string;
    name: string;
    description: string;
    bannerImage: string;
    numberOfCountries: number;
    numberOfLanguages: number;
    amountMostPopularCities: number;
    mostPopularCities: {
      cityName: string;
      countryName: string;
      countryCode: string;
      cityImage: string;
    }[]
  }
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent.name} | Worldtrip</title>
      </Head>
      <Header showGoBackButton />
      <Flex bgImage={continent.bannerImage} bgRepeat="no-repeat" bgPos="center" bgSize="cover" minH={["9.375rem", "31.25rem"]}>
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
            {continent.name}
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
            {continent.description}
          </Text>
          <HStack spacing="2.625rem">
            <ContinentIndicator value={continent.numberOfCountries} title="países" />
            <ContinentIndicator value={continent.numberOfLanguages} title="línguas" />
            <ContinentIndicator value={continent.amountMostPopularCities} title="cidades +100" icon={FiInfo} />
          </HStack>
        </Stack>
        <VStack spacing={["1.25rem", "2.5rem"]} align="self-start" mb={["1.25rem", "2.1875rem"]}>
          <Text fontSize={["1.5rem", "2.25rem"]} fontWeight="medium" px="2">Cidades +100</Text>
          <Flex gap="2.8rem" wrap="wrap" justify={["center", "space-between"]}>
            {continent.mostPopularCities.map(city => (
              <City
                key={city.cityName}
                title={city.cityName}
                subtitle={city.countryName}
                image={city.cityImage}
                flag={city.countryCode}
              />
            ))}
          </Flex>
        </VStack>
      </Box>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params

  const response = await api.get(`/continents?slug=${slug}`)

  const continentInfos: ContinentProps = response.data[0]

  console.log(continentInfos)

  return {
    props: {
      continent: continentInfos
    }
  }
}