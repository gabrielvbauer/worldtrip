import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      "500": "#FFBA08",
      "500-50": "#FFBA0850"
    },
    gray: {
      "600": "#47585B",
      "400": "#999999",
      "400-50": "#99999950"
    },
    white: {
      "500": "#F5F8FA",
      "400": "#DADADA"
    }
  },
  fonts: {
    heading: 'Poppins',
    heading_alt: 'Barlow',
    body: 'Poppins',
    body_alt: 'Barlow',
  },
  styles: {
    global: {
      body: {
        color: 'gray.600'
      }
    }
  }
})