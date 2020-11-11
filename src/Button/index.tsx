import React from 'react'
import styled, { css } from 'styled-components'
import { theme, ifProp, switchProp } from 'styled-tools'
import { space } from 'styled-system'

import { Theme } from '../Theme'

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  children: React.ReactNode
  size: 'medium' | 'small'
  appearance: 'primary' | 'stroke' | 'secondary'
  isFull: boolean
  isDisabled: boolean
}

export const Container = styled.button<
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>`
  ${space};

  border-radius: ${theme('radii.5')};
  text-transform: uppercase;
  font-size: ${theme('fontSizes.12')};
  letter-spacing: 1px;
  font-family: ${theme('fonts.100')};
  font-weight: ${theme('fontWeights.500')};
  color: ${switchProp('appearance', {
    primary: ifProp(
      { theme: Theme.light },
      theme('colors.accent.700'),
      theme('colors.accent.300')
    ),
    secondary: theme('colors.accent.200'),
    stroke: theme('colors.primary.100')
  })};

  cursor: pointer;
  outline: 0;
  width: ${ifProp({ full: true }, '100%', 'max-content')};
  height: ${switchProp('size', {
    small: '30px',
    medium: '40px'
  })};

  background-color: ${switchProp('appearance', {
    primary: theme('colors.primary.100'),
    stroke: 'transparent',
    secondary: theme('colors.accent.700')
  })};

  ${ifProp(
    { disabled: true },
    css`
      cursor: not-allowed;
      background-color: ${theme('colors.primary.200')};
      color: ${ifProp(
        { theme: Theme.light },
        theme('colors.accent.700'),
        theme('colors.accent.300')
      )};
    `
  )};

  padding: ${switchProp('size', {
    small: '0 15px',
    medium: '0 20px'
  })};

  border: 1px solid
    ${switchProp('appearance', {
      stroke: theme('colors.primary.100'),
      primary: 'transparent',
      secondary: theme('colors.accent.500')
    })};

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    background-color: ${switchProp('appearance', {
      primary: theme('colors.primary.200'),
      stroke: theme('colors.primary.100')
    })};

    ${ifProp(
      { appearance: 'stroke' },
      css`
        color: ${ifProp(
          { theme: Theme.light },
          theme('colors.accent.700'),
          theme('colors.accent.300')
        )};
      `
    )}
  }
`

export const Button = ({ children, ...props }: Props) => (
  <Container {...props}>{children}</Container>
)

Button.defaultProps = {
  size: 'medium',
  appearance: 'primary',
  isFull: false,
  isDisabled: false
}
