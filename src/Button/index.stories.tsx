import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import { GROUPS, Container } from '../../.storybook'
import { Button } from '../index'

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`

storiesOf(`${GROUPS.COMPONENTS}|Button`, module)
  .addDecorator((story) => <Container>{story()}</Container>)
  .add('Appearance', () => (
    <Buttons>
      <Button appearance='primary'>Primary</Button>
      <Button appearance='stroke'>Stroke</Button>
    </Buttons>
  ))
  .add('Disabled', () => (
    <>
      <Button isDisabled>Disabled</Button>
    </>
  ))
  .add('Size', () => (
    <Buttons>
      <Button size='small'>Small</Button>
      <Button>Medium</Button>
    </Buttons>
  ))
  .add('Full', () => (
    <>
      <Button isFull>Full</Button>
    </>
  ))
