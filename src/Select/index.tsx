import React from 'react'
import Selectable from 'react-select'
import styled from 'styled-components'
import { ifProp, switchProp, theme } from 'styled-tools'
import { Box } from '../Box'

type Value = {
  label: string | number
  value: string | number
}

type Props = {
  placeholder: string
  isSearchable?: boolean
  isMulti?: boolean
  options: Array<Value>
  hasBackground?: boolean
  defaultOptions?: Array<Value>
  defaultValue?: Value
  isFull?: boolean
  onChange: () => void
  id: string | undefined
  isLoading?: boolean
  isDisabled?: boolean
  value: Value
}

const Container = styled(Box)<{ isFull: boolean; hasBackground: boolean }>`
  width: ${ifProp({ isFull: true }, '100%', '270px')};

  .select {
    width: 100%;
  }

  .select__control {
    height: 38px;
    border-color: ${switchProp('theme.is', {
      dark: theme('colors.accent.500'),
      light: theme('colors.accent.250')
    })};
    box-shadow: none;
    background-color: ${ifProp(
      { hasBackground: true },
      switchProp('theme.is', {
        dark: theme('colors.accent.600'),
        light: theme('colors.accent.150')
      }),
      'transparent'
    )};
  }

  .select__placeholder,
  .select__option,
  .select__multi-value,
  .select__single-value,
  .select__menu-notice {
    font-size: ${theme('fontSizes.14')};
    font-family: ${theme('fonts.100')};
  }

  .select__indicator,
  .select__placeholder,
  .select__option,
  .select__multi-value,
  .select__multi-value__label,
  .select__single-value,
  .select__menu-notice,
  .select * {
    color: ${switchProp('theme.is', {
      dark: theme('colors.accent.350'),
      light: theme('colors.accent.400')
    })};
  }

  .select__indicator-separator {
    display: none;
  }

  .select__menu {
    box-shadow: none;
    border: 1px solid
      ${switchProp('theme.is', {
        dark: theme('colors.accent.500'),
        light: theme('colors.accent.250')
      })};
    background-color: ${switchProp('theme.is', {
      dark: theme('colors.accent.600'),
      light: theme('colors.accent.150')
    })};
  }

  .select__option:hover,
  .select__multi-value {
    color: ${theme('colors.accent.200')};
    background-color: ${theme('colors.primary.100')};
  }

  .select__option {
    background-color: ${switchProp('theme.is', {
      dark: theme('colors.accent.600'),
      light: theme('colors.accent.150')
    })};
  }

  .select__control:hover {
    border-color: ${switchProp('theme.is', {
      dark: theme('colors.accent.500'),
      light: theme('colors.accent.250')
    })};
  }
`

export const Select = ({
  placeholder,
  isSearchable = false,
  isMulti = false,
  options,
  hasBackground = true,
  defaultOptions,
  defaultValue,
  isFull = false,
  onChange,
  id,
  isLoading = false,
  isDisabled = false,
  value,
  ...props
}: Props) => {
  return (
    <Container isFull={isFull} hasBackground={hasBackground} {...props}>
      <Selectable
        id={id}
        isLoading={isLoading}
        isDisabled={isDisabled}
        value={value}
        className='select'
        defaultValue={defaultValue}
        classNamePrefix='select'
        isSearchable={isSearchable}
        isMulti={isMulti}
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        defaultOptions={defaultOptions}
      />
    </Container>
  )
}
