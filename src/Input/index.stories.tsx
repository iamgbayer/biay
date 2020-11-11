import { storiesOf } from '@storybook/react'
import React from 'react'
import { Container, GROUPS } from '../../.storybook'
import { Input } from '../index'

storiesOf(`${GROUPS.COMPONENTS}|Input`, module)
  .addDecorator((story) => <Container>{story()}</Container>)
  .add('Appearance', () => <Input name='fruit' label='Fruit' />)
  .add('Disabled', () => (
    <>
      <Input name='fruit' label='Fruit' isDisabled />
      <Input name='fruit' label='Fruit' />
    </>
  ))

  .add('Full', () => (
    <>
      <Input name='fruit' label='Fruit' isFull />
    </>
  ))
