import React from 'react'
import Selectable from 'react-select'
import styled from 'styled-components'
import { ifProp, theme } from 'styled-tools'
import { Box } from '../Box'

type Value = {
  label: string | number
  value: string | number
}

type Props = {
  placeholder: string
  isSearchable: boolean
  isMulti: boolean
  options: []
  hasBackground: boolean
  defaultOptions: Array<Value>
  defaultValue: Value
  isFull: boolean
  onChange: () => void
  id: string | undefined
  isLoading: boolean
  isDisabled: boolean
  value: Value
}

const Container = styled(Box)<{ isFull: boolean; hasBackground: boolean }>`
  width: ${ifProp({ isFull: true }, '100%', '270px')};

  .select {
    width: 100%;
  }

  .select__control {
    height: 38px;
    border-color: ${theme('colors.accent.500')};
    box-shadow: none;
    background-color: ${ifProp(
      { hasBackground: true },
      theme('colors.accent.700'),
      theme('colors.accent.800')
    )};
  }

  .select__placeholder,
  .select__option,
  .select__multi-value,
  .select__single-value,
  .select__menu-notice {
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
    color: ${theme('colors.accent.200')};
  }

  .select__indicator-separator {
    display: none;
  }

  .select__menu {
    background-color: ${theme('colors.accent.700')};
  }

  .select__option:hover,
  .select__multi-value {
    background-color: ${theme('colors.primary.100')};
  }

  .select__option {
    background: ${theme('colors.accent.700')};
  }

  .select__control:hover {
    border-color: ${theme('colors.accent.500')};
  }
`

export const Select = ({
  placeholder,
  isSearchable,
  isMulti,
  options,
  hasBackground,
  defaultOptions,
  defaultValue,
  isFull,
  onChange,
  id,
  isLoading,
  isDisabled,
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
