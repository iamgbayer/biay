import React from 'react'
import styled, { css } from 'styled-components'
import { ifProp, switchProp, theme } from 'styled-tools'
import { space, SpaceProps } from 'styled-system'

import { useRadioContext } from './Context'

import { Text } from '../Text'

type Size = 'medium' | 'large'

export interface Props extends Partial<SpaceProps> {
  id: string | undefined
  value: string | number
  label: string
}

const Content = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.span<{ size: Size; isDisabled: boolean }>`
  background-color: ${theme('colors.primary.200')};
  border-radius: ${theme('radii.50')};
  ${switchProp('size', {
    medium: css`
      width: 10px;
      height: 10px;
    `,
    large: css`
      width: 10px;
      height: 10px;
    `
  })};
`

const Hidden = styled.input.attrs({ type: 'radio' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Styled = styled.div<{
  size: Size
  isChecked: boolean
  isDisabled: boolean
}>`
  border-radius: ${theme('radii.50')};
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid
    ${ifProp(
      { isChecked: true },
      theme('colors.primary.100'),
      theme('colors.accent.100')
    )};

  ${switchProp('size', {
    medium: css`
      width: 20px;
      height: 20px;
    `,
    large: css`
      width: 22px;
      height: 22px;
    `
  })};
`

const Container = styled.label<{ size: Size }>`
  ${space};

  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  cursor: pointer;
`

export const Option = React.forwardRef<HTMLInputElement, Props>(
  ({ id, value, label, ...props }: Props, ref) => {
    const { checkedValue, onChange, isDisabled, name, size } = useRadioContext()

    const isChecked = value === checkedValue

    return (
      <Container size={size} htmlFor={id} {...props}>
        <Content>
          <Hidden
            ref={ref}
            id={id}
            value={value}
            onChange={onChange}
            name={name}
          />

          <Styled isChecked={isChecked} size={size} isDisabled={isDisabled}>
            {isChecked && <Icon isDisabled={isDisabled} size={size} />}
          </Styled>
        </Content>

        <Text marginLeft={10} color='accent.100'>
          {label}
        </Text>
      </Container>
    )
  }
)

Option.displayName = 'Option'
