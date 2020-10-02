import styled from 'styled-components'
import { theme } from 'styled-tools'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${theme('colors.accent.800')};
`
