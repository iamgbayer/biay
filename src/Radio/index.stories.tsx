import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { GROUPS, Container } from '../../.storybook'
import { Radio } from './index'

const Radios = () => {
  const [value, onChange] = useState('apple')

  return (
    <Radio
      name='fruit'
      alignItems='flex-start'
      flexDirection='column'
      onChange={({ target }) => onChange(target.value)}
      value={value}
    >
      <Radio.Option id='apple' marginBottom={30} value='apple' label='Apple' />

      <Radio.Option id='banana' value='banana' label='Banana' />
    </Radio>
  )
}

storiesOf(`${GROUPS.COMPONENTS}|Radio`, module)
  .addDecorator((story) => <Container>{story()}</Container>)
  .add('Default', () => <Radios />)
