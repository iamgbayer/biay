import React, { memo, useContext } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import { ifProp } from 'styled-tools'
import { space } from 'styled-system'
import get from 'lodash/get'

import * as Icons from './Icons'

type Props = {
  name: string
  color?: string
  width?: number
  height?: number
  onClick?: () => void
}

const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

const Container = styled.div`
  ${space}

  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;

  ${ifProp(
    'onClick',
    css`
      cursor: pointer;
    `
  )};

  ${ifProp(
    'onMouseEnter',
    css`
      cursor: pointer;
    `
  )};
`

export const Icon = memo(
  ({
    name,
    color = 'accent.100',
    width = 20,
    height = 20,
    ...props
  }: Props) => {
    const { colors } = useContext(ThemeContext)
    const Iconable = Icons[capitalize(name)]

    return (
      <Container {...props}>
        <Iconable
          {...props}
          width={width}
          height={height}
          color={get(colors, color)}
        />
      </Container>
    )
  }
)
