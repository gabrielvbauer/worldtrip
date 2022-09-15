import { Flex, Box, Image, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { FiChevronLeft } from 'react-icons/fi';

interface HeaderProps {
  showGoBackButton?: boolean
}

export function Header({ showGoBackButton = false }: HeaderProps) {
  return (
    <Box as="header" w="100%" maxW="1160px" mx="auto">
      <Flex align="center" py="27px" px="2">
        {showGoBackButton &&
          <Link href="/">
            <IconButton icon={<FiChevronLeft size="24px" />} aria-label="Voltar" bg="transparent" />
          </Link>
        }
        <Image src="images/Logo.svg" alt='Logo' mx="auto" />
      </Flex>
    </Box>
  )
}