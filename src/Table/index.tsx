import React from 'react'
import ReactTable from 'react-table'
import styled from 'styled-components'
import { switchProp, theme } from 'styled-tools'
import { Box } from '../Box'
import Pagination from './Pagination'

const Container = styled(Box)`
  width: 100%;
  height: max-content;
  flex-direction: column;

  .ReactTable {
    .rt-table {
      border: 1px solid
        ${switchProp('theme.is', {
          dark: theme('colors.accent.500'),
          light: theme('colors.accent.250')
        })};
      background-color: ${switchProp('theme.is', {
        dark: theme('colors.accent.600'),
        light: theme('colors.accent.200')
      })};
      border-radius: ${theme('radii.8')};
    }

    .rt-tr {
      display: flex;
    }

    .-loading {
      display: none;
    }

    .rt-thead {
      &.-header {
        box-shadow: none;
      }

      .rt-th {
        outline: none;
        font-family: ${theme('fonts.100')};
        color: ${switchProp('theme.is', {
          dark: theme('colors.accent.350'),
          light: theme('colors.accent.400')
        })};
        font-weight: ${theme('fontWeights.500')};
        font-size: ${theme('fontSizes.12')};
        text-align: center;
        text-transform: uppercase;
        letter-spacing: ${theme('letterSpacings.1')};
        padding: 12px 24px;
        display: flex;
        align-items: center;
        justify-content: center;

        &.-sort-asc,
        &.-sort-desc {
          box-shadow: none;
        }
      }
    }

    .rt-tbody {
      background-color: ${switchProp('theme.is', {
        dark: theme('colors.accent.700'),
        light: theme('colors.accent.100')
      })};
      border-radius: ${theme('radii.8')};

      .rt-tr-group:nth-of-type(odd) {
        border-top: 1px solid
          ${switchProp('theme.is', {
            dark: theme('colors.accent.500'),
            light: theme('colors.accent.250')
          })};
        border-bottom: 1px solid
          ${switchProp('theme.is', {
            dark: theme('colors.accent.500'),
            light: theme('colors.accent.250')
          })};
      }

      .rt-td {
        font-size: ${theme('fontSizes.14')};
        color: ${switchProp('theme.is', {
          dark: theme('colors.accent.350'),
          light: theme('colors.accent.400')
        })};
        font-family: ${theme('fonts.100')};
        padding: 16px 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: none;
      }
    }
  }
`

type Props = {
  columns: []
  data: []
  loading: boolean
  size?: number
  onFetchData?: () => void
}

export const Table = ({
  columns,
  data,
  onFetchData,
  size,
  loading = false
}: Props) => {
  const showPagination = size ? size < data.length : false

  return (
    <Container>
      <ReactTable
        data={data}
        columns={columns}
        resizable={false}
        onFetchData={onFetchData}
        loading={loading}
        PaginationComponent={Pagination}
        showPagination={showPagination}
        defaultPageSize={size || data.length}
      />
    </Container>
  )
}
