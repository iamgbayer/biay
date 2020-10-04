import React, { Fragment } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import { rgba } from 'polished'
import { or } from 'ramda'

import { Icon } from '../Icon'
import { Closeable } from '../Closeable'

type Props = {
  children: React.ReactNode
  isOpen: boolean
  close: () => void
}

const Overlay = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => rgba(theme.colors.accent[700], 0.8)};
  position: fixed;
  left: 0;
  top: 0;
  z-index: ${theme('zIndices.50')};
  overflow: hidden;
`

const Content = styled.div`
  width: 100%;
  max-width: 550px;
  background-color: ${theme('colors.accent.800')};
  border-radius: ${theme('radii.15')};
  border: 1px solid ${theme('colors.accent.500')};
  padding: 45px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Close = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 10px;
`

export const Modal = ({ children, isOpen, close }: Props) => {
  return (
    <Fragment>
      {isOpen && (
        <Overlay>
          <Closeable whenClose={or(close, () => {})}>
            <Content>
              {close && (
                <Close name='close' width={35} height={35} onClick={close} />
              )}

              {children}
            </Content>
          </Closeable>
        </Overlay>
      )}
    </Fragment>
  )
}

Modal.defaultProps = {
  isOpen: false
}
