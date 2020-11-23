import React from 'react'
import ReactTable from 'react-table'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import { Box } from '../Box'
import Pagination from './Pagination'

const Container = styled(Box)`
  width: 100%;
  height: max-content;
  flex-direction: column;

  .ReactTable {
    .rt-table {
      border: 1px solid ${theme('colors.accent.500')};
      background-color: ${theme('colors.accent.700')};
      border-radius: ${theme('radii.11')};
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
        font-family: ${theme('fonts.200')};
        color: ${theme('colors.accent.200')};
        font-weight: ${theme('fontWeights.700')};
        font-size: ${theme('fontSizes.20')};
        text-align: center;
        height: 60px;
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
      .rt-tr-group:nth-of-type(odd) {
        border-top: 1px solid ${theme('colors.accent.500')};
        border-bottom: 1px solid ${theme('colors.accent.500')};
        background-color: ${theme('colors.accent.600')};
      }

      .rt-td {
        font-size: ${theme('fontSizes.15')};
        color: ${theme('colors.accent.200')};
        font-family: ${theme('fonts.100')};
        height: 45px;
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
