import { Flex, Image, Text } from "@chakra-ui/react";

interface BenefitsProps {
  title: string;
  icon: string;
}

export function Benefits({ title, icon }: BenefitsProps) {
  return (
    <Flex minW="158px" direction="column" align="center">
      <Image src={icon} alt="cocktail"/>
      <Text fontSize="1.5rem" fontWeight="semibold" mt="1.5rem">{title}</Text>
    </Flex>
  )
}