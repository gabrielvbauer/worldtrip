import { VStack, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SwipeItemProps {
  href: string;
  image: string;
  title: string;
  subtitle: string;
}

export function SwipeItem({ href, image, title, subtitle }: SwipeItemProps) {
  return (
    <Link href={href}>
      <VStack spacing="1rem" bgImage={image} bgSize="cover" h="100%" align="center" justify="center" direction="column">
        <Text fontSize="3rem" fontWeight="bold" color="white">{title}</Text>
        <Text fontSize="1.5rem" fontWeight="bold" color="white">{subtitle}</Text>
      </VStack>
    </Link>
  )
}