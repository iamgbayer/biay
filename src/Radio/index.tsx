import React, { memo, Children, isValidElement, cloneElement } from 'react'
import styled from 'styled-components'
import { FlexboxProps } from 'styled-system'

import { Box } from '../Box'

import { Provider } from './Context'
import { Option } from './Option'

const Container = styled(Box)`
  width: 100%;
`

interface Props extends FlexboxProps {
  value?: string
  name?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  children: React.ReactNode
  size?: 'medium' | 'large'
  isDisabled?: boolean
}

// @ts-ignore
const isValidOption = (child) =>
  // @ts-ignore
  isValidElement(child) && child.type.displayName === 'Option'

const Component = memo(
  ({
    value,
    name,
    onChange,
    children,
    size = 'medium',
    isDisabled = false,
    ...props
  }: Props) => {
    const getValidChildren = Children.map(children, (child) => {
      if (!isValidOption(child)) {
        throw new TypeError(
          'TypeError: Some child is invalid, should be Radio.Option'
        )
      }

      return cloneElement(child as React.ReactElement)
    })

    return (
      <Provider
        value={{
          name,
          isDisabled,
          size,
          checkedValue: value,
          onChange
        }}
      >
        <Container {...props}>{getValidChildren}</Container>
      </Provider>
    )
  }
)

export const Radio = Object.assign(Component, {
  Option,
  defaultProps: {
    isDisabled: false,
    size: 'medium'
  }
})
