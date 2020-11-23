import { storiesOf } from '@storybook/react'
import React from 'react'
import { Container } from '../../.storybook'
import { Table } from './index'

const columns = [
  {
    Header: 'Name',
    accessor: 'name'
  },

  {
    Header: 'Status',
    accessor: 'status'
  }
]

const data = [
  {
    name: 'Foo',
    status: 'DONE'
  },
  {
    name: 'Bar',
    status: 'PENDING'
  },
  {
    name: 'Guilherme',
    status: 'DONE'
  },
  {
    name: 'Beatriz',
    status: 'PENDING'
  },
  {
    name: 'Bayer',
    status: 'DONE'
  }
]

storiesOf('Table', module)
  .addDecorator((story) => <Container>{story()}</Container>)
  .add('Default', () => <Table size={2} data={data} columns={columns} />)
