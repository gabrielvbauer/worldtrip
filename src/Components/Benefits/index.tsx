import { Flex, Image, Text, useBreakpointValue, Box } from "@chakra-ui/react";

interface BenefitsProps {
  title: string;
  icon: string;
}

export function Benefits({ title, icon }: BenefitsProps) {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  })

  return (
    <Flex minW="158px" direction={{base: 'row', md: 'column'}} align="center" justify="center">
      {!isMobile &&
        <Image src={icon} alt="cocktail" mb="1.5rem"/>
      }
      {isMobile &&
        <Box
          w="8px"
          h="8px"
          bg="yellow.500"
          borderRadius={"full"}
          mr="8px"
        />
      }
      <Text fontSize="1.5rem" fontWeight="semibold">{title}</Text>
    </Flex>
  )
}