import { storiesOf } from '@storybook/react'
import { head } from 'lodash'
import React, { useState } from 'react'
import { Container } from '../../.storybook'
import { Select } from './index'

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grapes', value: 'grapes' }
]

const Selectable = () => {
  const [value, setValue] = useState(head(options))

  return (
    <Select
      id='Options'
      placeholder=''
      value={value}
      onChange={setValue}
      options={options}
    />
  )
}

storiesOf(`Select`, module)
  .addDecorator((story) => <Container>{story()}</Container>)
  .add('Appearance', () => <Selectable />)
