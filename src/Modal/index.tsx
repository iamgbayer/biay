import or from 'ramda/src/or'
import React, { Fragment } from 'react'
import styled from 'styled-components'
import { switchProp, theme } from 'styled-tools'
import { Closeable } from '../Closeable'
import { getByTheme } from '../helpers'
import { Icon } from '../Icon'

type Props = {
  children: React.ReactNode
  isOpen: boolean
  close: () => void
}

const Overlay = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: ${theme('zIndices.50')};
  overflow: hidden;
`

const Content = styled.div`
  width: 100%;
  max-width: 550px;
  background-color: ${switchProp('theme.is', {
    dark: theme('colors.accent.600'),
    light: theme('colors.accent.150')
  })};
  border-radius: ${theme('radii.15')};
  border: 1px solid
    ${switchProp('theme.is', {
      dark: theme('colors.accent.500'),
      light: theme('colors.accent.250')
    })};
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
                <Close
                  name='close'
                  color={getByTheme({
                    dark: 'accent.200',
                    light: 'accent.400'
                  })}
                  width={35}
                  height={35}
                  onClick={close}
                />
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
