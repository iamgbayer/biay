import merge from 'ramda/src/merge'
import { Tokens } from './Tokens'

const withTokens = (theme: object) => merge(Tokens, theme)

const colors = {
  primary: {
    100: '#6A5BFF',
    200: '#786AFF'
  },
  accent: {
    100: '#fff',
    150: '#fafbfc',
    200: '#f6f8fa',
    250: '#e1e4e8',
    300: '#c9d1d9',
    350: '#8b949e',
    400: '#586069',
    500: '#30363d',
    550: '#24292e',
    600: '#161b22',
    700: '#0d1117',
    800: '#090d13'
  },
  support: {
    100: '#D14E4E',
    200: '#FFE4E4',
    300: '#FEEBC8',
    400: '#5CBF88',
    500: '#DBF8E8'
  }
}

export const Theme = {
  dark: withTokens({
    is: 'dark',
    colors
  }),
  light: withTokens({
    is: 'light',
    colors
  })
}
