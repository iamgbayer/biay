import { createGlobalStyle } from 'styled-components'
import { switchProp, theme } from 'styled-tools'

export const Reset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  body {
    width: 100%;
    height: 100%;
    background-color: ${switchProp('theme.is', {
      dark: theme('colors.accent.700'),
      light: theme('colors.accent.100')
    })};
    padding: 0 !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button,
  span,
  a,
  p,
  li {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
