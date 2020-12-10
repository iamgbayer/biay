import React from 'react'
import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import { ifNotProp, ifProp, switchProp, theme } from 'styled-tools'
import { Icon } from '../Icon'

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  children: React.ReactNode
  size?: 'medium' | 'small'
  appearance?: 'primary' | 'stroke' | 'secondary'
  isFull?: boolean
  isDisabled?: boolean
  isLoading?: boolean
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
    primary: theme('colors.accent.200'),
    secondary: switchProp('theme.is', {
      dark: theme('colors.accent.200'),
      light: theme('colors.accent.400')
    }),
    stroke: theme('colors.primary.100')
  })};

  cursor: pointer;
  outline: 0;
  width: ${ifProp({ isFull: true }, '100%', 'max-content')};
  height: ${switchProp('size', {
    small: '30px',
    medium: '40px'
  })};

  background-color: ${switchProp('appearance', {
    primary: theme('colors.primary.100'),
    stroke: 'transparent',
    secondary: switchProp('theme.is', {
      dark: theme('colors.accent.600'),
      light: theme('colors.accent.150')
    })
  })};

  ${ifProp(
    { disabled: true },
    css`
      cursor: not-allowed;
      background-color: ${theme('colors.primary.200')};
      color: ${switchProp('theme.is', {
        dark: theme('colors.accent.600'),
        light: theme('colors.accent.150')
      })};
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
      secondary: switchProp('theme.is', {
        dark: theme('colors.accent.500'),
        light: theme('colors.accent.250')
      })
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

    ${ifNotProp(
      { appearance: 'secondary' },
      css`
        color: ${theme('colors.accent.200')};
      `
    )}
  }
`

export const Button = ({ children, isLoading, ...props }: Props) => (
  <Container {...props}>
    {isLoading ? (
      <Icon name='loading' color='accent.200' width={32} height={32} />
    ) : (
      children
    )}
  </Container>
)

Button.defaultProps = {
  size: 'medium',
  appearance: 'primary',
  isFull: false,
  isLoading: false,
  isDisabled: false
}
