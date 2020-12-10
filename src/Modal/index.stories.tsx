import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { Container } from '../../.storybook'
import { Text } from '../Text'
import { Modal } from './index'

const Modable = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
      <Text>It's a test</Text>
    </Modal>
  )
}

storiesOf(`Modal`, module)
  .addDecorator((story) => <Container>{story()}</Container>)
  .add('Default', () => <Modable />)
