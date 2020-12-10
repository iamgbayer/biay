import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { Container } from '../../.storybook'
import { Input } from '../index'

type Props = {
  isDisabled?: boolean
  isFull?: boolean
}

const Inputable = ({ isDisabled, isFull }: Props) => {
  const [value, setValue] = useState('')

  return (
    <Input
      name='fruit'
      label='Fruit'
      value={value}
      onChange={({ target}) => setValue(target.value)}
      isDisabled={isDisabled}
      isFull={isFull}
    />
  )
}

storiesOf(`Input`, module)
  .addDecorator((story) => <Container>{story()}</Container>)
  .add('Appearance', () => <Inputable />)
  .add('Disabled', () => <Inputable isDisabled />)

  .add('Full', () => <Inputable isFull />)
