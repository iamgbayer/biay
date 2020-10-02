import { Tokens } from './Tokens'
import { merge } from 'ramda'

const withTokens = (theme: object) => merge(Tokens, theme)

export const Theme = {
  dark: withTokens({
    is: 'dark',
    colors: {
      primary: {
        100: '#6A5BFF',
        200: '#786AFF'
      },
      accent: {
        100: '#5E6982',
        200: '#dfdfeb',
        300: '#fff',
        500: '#2E375B',
        600: '#222948',
        700: '#1B223F',
        800: '#131733'
      },
      support: {
        100: '#FF3E8D',
        200: '#268AFF',
        300: '#FEEBC8',
        400: '#08ce95',
        500: '#c6f6d5'
      }
    }
  }),
  light: withTokens({
    is: 'light',
    colors: {
      primary: {
        100: '#6A5BFF',
        200: '#786AFF'
      },
      accent: {
        100: '#344356',
        200: '#607B9E',
        300: '#E1EBFC',
        500: '#f1f1f3',
        600: '#222948',
        700: '#fff',
        800: '#fbfbfb'
      },
      support: {
        100: '#FF3E8D',
        200: '#268AFF',
        300: '#FEEBC8',
        400: '#08ce95',
        500: '#c6f6d5'
      }
    }
  })
}
