import { Flex, Box, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Box as="header" w="100%" maxW="1160px" mx="auto">
      <Flex align="center" justify="center" py="27px" px="2">
        <Image src="images/Logo.svg" alt='Logo' />
      </Flex>
    </Box>
  )
}