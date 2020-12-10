import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../../.storybook'
import { Button } from '../index'

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`

storiesOf(`Button`, module)
  .addDecorator((story) => <Container>{story()}</Container>)
  .add('Appearance', () => (
    <Buttons>
      <Button appearance='primary'>Primary</Button>
      <Button appearance='secondary'>Secondary</Button>
      <Button appearance='stroke'>Stroke</Button>
    </Buttons>
  ))
  .add('Loading', () => (
    <>
      <Button isLoading>Loading</Button>
    </>
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
