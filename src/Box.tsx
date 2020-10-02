import styled, { css } from 'styled-components'
import {
  space,
  flexbox,
  layout,
  textAlign,
  display,
  maxWidth,
  position,
  shadow
} from 'styled-system'
import { ifNotProp, ifProp } from 'styled-tools'

export const Box = styled.div`
  ${layout};
  ${display};
  ${space};
  ${flexbox};
  ${textAlign};
  ${maxWidth};
  ${position};
  ${shadow};

  ${ifProp(
    'onClick',
    css`
      cursor: pointer;
    `
  )}

  ${ifNotProp(
    'display',
    css`
      display: flex;
    `
  )}
`
