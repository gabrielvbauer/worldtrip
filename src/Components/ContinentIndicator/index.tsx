import { Flex, Text, Icon, Tooltip, Box } from "@chakra-ui/react";
import { ElementType } from "react";

interface ContinentIndicatorProps {
  value: string;
  title: string;
  icon?: ElementType;
}

export function ContinentIndicator({ value, title, icon }: ContinentIndicatorProps) {
  return (
    <Flex direction="column" align={["start", "center"]}>
      <Text color="yellow.500" fontSize={["1.5rem", "3rem"]} fontWeight="semibold">{value}</Text>
      <Text fontSize={["1.125rem", "1.5rem"]} fontWeight={["regular", "semibold"]} display="flex" alignItems="center">
        {title}
        {icon && 
          <Tooltip label="info">
            <Flex ml="0.3125rem">
              <Icon as={icon} />
            </Flex>
          </Tooltip>
        }
      </Text>
    </Flex>
  )
}