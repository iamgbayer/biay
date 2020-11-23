import styled, { css } from 'styled-components'
import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  layout,
  lineHeight,
  space,
  textAlign
} from 'styled-system'
import { ifNotProp, ifProp, switchProp, theme } from 'styled-tools'

type Props = {
  marginLeft: number
  marginRight: number
  marginBottom: number
  marginTop: number
  fontFamily: string | number
  fontSize: string | number
  fontWeight: string | number
}

export const Text = styled.span<Partial<Props>>`
  display: inline-block;
  ${fontSize}
  ${fontWeight}
  ${color}
  ${lineHeight}
  ${textAlign}
  ${space}
  ${fontFamily}
  ${layout}

  ${ifProp(
    'onClick',
    css`
      cursor: pointer;
    `
  )}

  ${ifNotProp(
    'fontFamily',
    css`
      font-family: ${theme('fonts.100')};
    `
  )};

  ${ifNotProp(
    'color',
    switchProp('theme.is', {
      light: css`
        color: ${theme('colors.accent.100')};
      `,
      dark: css`
        color: ${theme('colors.accent.100')};
      `
    })
  )};
`
