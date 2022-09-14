import { VStack, HStack, Avatar, Image, Text } from "@chakra-ui/react";

interface CityProps {
  title: string;
  subtitle: string;
  image: string;
  flag: string
}

export function City({ title, subtitle, image, flag }: CityProps) {
  return (
    <VStack
      rounded="0.25rem"
      overflow="hidden"
      align="start"
      spacing="0"
      w="16rem"
    >
      <Image
        src="https://github.com/gabrielvbauer.png"
        alt="city"
        w="100%"
        fit="cover"
        maxW="16rem"
        maxH="10.81rem" 
      />
      <HStack
        w="100%"
        px="1.5rem"
        pb="1.5rem"
        py="1.125rem"
        borderWidth="0.125rem"
        borderTopWidth="0"
        borderColor="yellow.500"
      >
        <VStack
          w="100%"
          align="start"
          justify="space-between"
        >
          <Text
            fontSize="1.25rem"
            fontWeight="semibold"
          >
            {title}
          </Text>
          <Text
            fontSize="1rem"
            fontWeight="medium"
            fontFamily="body_alt"
          >
            {subtitle}
          </Text>
        </VStack>
        <Avatar size="sm" />
      </HStack>
    </VStack>
  )
}