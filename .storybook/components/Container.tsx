import styled from 'styled-components'
import { switchProp, theme } from 'styled-tools'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${switchProp('theme.is', {
    dark: theme('colors.accent.700'),
    light: theme('colors.accent.100')
  })};
`
