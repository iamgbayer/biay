import get from 'lodash/get'
import React, { memo, useContext } from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import { space } from 'styled-system'
import { ifProp } from 'styled-tools'
import { getByTheme } from '../helpers'
import * as Icons from './Icons'

type Props = {
  name: string
  color?: string
  width?: number
  height?: number
  onClick?: () => void
  marginLeft?: number | string
  marginRight?: number | string
  marginTop?: number | string
  marginBottom?: number | string
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
    color = getByTheme({
      dark: 'accent.400',
      light: 'accent.350'
    }),
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
