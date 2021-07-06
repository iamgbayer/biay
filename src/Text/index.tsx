import styled, { css } from 'styled-components'
import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  layout,
  LayoutProps,
  letterSpacing,
  lineHeight,
  space,
  SpaceProps,
  textAlign,
  FontFamilyProps,
  FontSizeProps,
  FontWeightProps,
  TextAlignProps
} from 'styled-system'
import { ifNotProp, ifProp, switchProp, theme } from 'styled-tools'

interface Props
  extends LayoutProps,
    SpaceProps,
    FontWeightProps,
    FontFamilyProps,
    FontSizeProps,
    SpaceProps,
    LayoutProps,
    TextAlignProps {
  children: React.ReactNode | string | number | (string | number)[]
}

export const Text = styled.span<Partial<Props>>`
  display: inline-block;
  ${fontSize}
  ${fontWeight}
  ${color}
  ${lineHeight}
  ${letterSpacing}
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
        color: ${theme('colors.accent.350')};
      `,
      dark: css`
        color: ${theme('colors.accent.400')};
      `
    })
  )};
`
