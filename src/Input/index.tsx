import React from 'react'
import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import { ifProp, switchProp, theme } from 'styled-tools'

type IconAlign = 'left' | 'right'

type Props = {
  value: string | number
  type: 'text'
  onChange: () => void
  placeholder: string
  icon?: ({
    width,
    height
  }: {
    width: number
    height: number
  }) => React.ReactNode
  iconAlign?: IconAlign
  error: { has: boolean; message: string }
  isRequired: boolean
  isDisabled: boolean
  id?: string
  label: string
  hasBackground: boolean
  marginTop?: number
  marginBottom?: number
  marginRight?: number
  marginLeft?: number
  isFull: boolean
  name: string
}

const iconAlign = {
  left: 'left',
  right: 'right'
}

const Container = styled.div<{
  isFull: boolean
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
}>`
  ${space};
  width: ${ifProp({ isFull: true }, '100%', 'max-content')};
  display: flex;
  flex-direction: column;
  position: relative;
`

const Inputable = styled.input<{
  hasError: boolean
  icon?: unknown
  iconAlign?: IconAlign
  isRequired: boolean
  isDisabled: boolean
  hasBackground: boolean
  placeholder: string
}>`
  -webkit-appearance: none;
  border-radius: ${theme('radii.5')};
  -moz-appearance: none;
  appearance: none;
  font-family: ${theme('fonts.100')};
  cursor: ${ifProp('isDisabled', 'not-allowed', 'initial')};
  height: 38px;
  outline: none;
  background-color: ${ifProp(
    { hasBackground: true },
    theme('colors.accent.700'),
    theme('colors.accent.800')
  )};
  color: ${ifProp(
    'hasError',
    theme('colors.support.100'),
    theme('colors.accent.200')
  )};
  padding: 0 10px;
  border: 1px solid
    ${ifProp(
      'hasError',
      theme('colors.support.100'),
      theme('colors.accent.500')
    )};
  ${ifProp(
    'icon',
    switchProp('iconAlign', {
      [iconAlign.left]: css`
        padding-left: 36px;
      `,
      [iconAlign.right]: css`
        padding-right: 36px;
      `
    }),
    null
  )}

  &::placeholder {
    color: ${ifProp(
      'hasError',
      theme('colors.support.100'),
      theme('colors.accent.200')
    )};
  }
`

const Message = styled.span`
  margin-top: 5px;
  font-family: ${theme('fonts.100')};
  color: ${theme('colors.support.100')};
`

const Label = styled.label<{ isDisabled: boolean; hasError: boolean }>`
  font-family: ${theme('fonts.100')};
  color: ${ifProp(
    'hasError',
    theme('colors.support.100'),
    theme('colors.accent.200')
  )};
  cursor: ${ifProp({ isDisabled: true }, 'not-allowed', 'normal')};
  margin-bottom: 5px;
`

const Content = styled.div<{ iconAlign?: IconAlign }>`
  display: flex;
  align-items: center;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 6px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  ${switchProp('iconAlign', {
    left: css`
      left: 10px;
    `,
    right: css`
      right: 10px;
    `
  })};
`

export const Input = ({
  value,
  type,
  onChange,
  placeholder,
  icon,
  iconAlign,
  error,
  isRequired,
  isDisabled,
  id,
  label,
  hasBackground,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  isFull,
  name
}: Props) => {
  return (
    <Container
      isFull={isFull}
      marginBottom={marginBottom}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {label && (
        <Label htmlFor={id} hasError={error.has} isDisabled={isDisabled}>
          {label}
        </Label>
      )}

      {icon && (
        <Content iconAlign={iconAlign}>
          {icon({
            width: 11,
            height: 11
          })}
        </Content>
      )}

      <Inputable
        name={name}
        id={id}
        type={type}
        value={value}
        hasError={error.has}
        icon={icon}
        iconAlign={iconAlign}
        onChange={onChange}
        placeholder={placeholder}
        isRequired={isRequired}
        disabled={isDisabled}
        isDisabled={isDisabled}
        hasBackground={hasBackground}
      />

      {error.has && <Message>{error.message}</Message>}
    </Container>
  )
}

Input.defaultProps = {
  value: '',
  placeholder: '',
  iconAlign: iconAlign.left,
  type: 'text',
  onChange: () => {},
  hasBackground: true,
  error: {
    has: false,
    message: ''
  },
  isDisabled: false,
  isRequired: false,
  isFull: false
}
