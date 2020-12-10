import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { switchProp, theme } from 'styled-tools'
import { getByTheme } from '../helpers'
import { Icon } from '../Icon'

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

  .button {
    font-family: ${theme('fonts.100')};
    font-size: ${theme('fontSizes.12')};
    border-radius: ${theme('radii.5')};
    border: 1px solid
      ${switchProp('theme.is', {
        dark: theme('colors.accent.500'),
        light: theme('colors.accent.250')
      })};
    background-color: ${switchProp('theme.is', {
      dark: theme('colors.accent.600'),
      light: theme('colors.accent.150')
    })};
    color: ${switchProp('theme.is', {
      dark: theme('colors.accent.350'),
      light: theme('colors.accent.400')
    })};
    transition: all 0.2s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    width: 36px;
    margin-right: 10px;
    outline: none;
    cursor: pointer;
  }

  .active {
    border: 1px solid
      ${switchProp('theme.is', {
        dark: theme('colors.accent.500'),
        light: theme('colors.accent.250')
      })};
    background-color: ${switchProp('theme.is', {
      dark: theme('colors.accent.700'),
      light: theme('colors.accent.100')
    })};
  }
`

type Props = {
  page: number
  pages: number
  onPageChange: (page: number) => void
  PageButtonComponent: React.FC<Button>
}

type Button = {
  disabled?: boolean
  className: string
  onClick: () => void
}

const Button: React.FC<Button> = (props) => (
  <button {...props}>{props.children}</button>
)

export default function Pagination({
  page,
  pages,
  onPageChange,
  ...props
}: Props) {
  const { PageButtonComponent = Button } = props

  const filterPages = (visiblePages: Array<number>, totalPages: number) =>
    visiblePages.filter((page: number) => page <= totalPages)

  const getVisiblePages = (page: number, total: number) => {
    if (total < 3) {
      return filterPages([1, 2], total)
    }

    if (total < 4) {
      return filterPages([1, 2, 3], total)
    } else {
      if (page % 3 >= 0 && page > 2 && page + 2 < total) {
        return [page - 1, page, page + 1]
      } else if (page % 3 >= 0 && page > 2 && page + 2 >= total) {
        return [total - 2, total - 1, total]
      } else {
        return [1, 2, 3]
      }
    }
  }

  const changePage = (newPage: number) => {
    const activePage = page + 1

    if (page === activePage) return

    const visiblePages = getVisiblePages(newPage, pages)
    setVisiblePages(filterPages(visiblePages, pages))
    onPageChange(newPage - 1)
  }

  const [visiblePages, setVisiblePages] = useState(getVisiblePages(0, pages))

  const isDisabled = (pageNumber: number) => page + 1 === pageNumber

  const getIconColor = () =>
    getByTheme({
      dark: 'accent.350',
      light: 'accent.400'
    })

  useEffect(() => {
    setVisiblePages(getVisiblePages(0, pages))
  }, [pages])

  useEffect(() => {
    changePage(page + 1)
  }, [])

  return (
    <Content>
      <PageButtonComponent
        className='button icon'
        onClick={() => changePage(1)}
        disabled={isDisabled(1)}
      >
        <Icon name='left' color={getIconColor()} width={10} height={10} />
        <Icon
          name='left'
          color={getIconColor()}
          marginLeft='-6px'
          width={10}
          height={10}
        />
      </PageButtonComponent>

      <PageButtonComponent
        className='button icon'
        onClick={() => changePage(page)}
        disabled={isDisabled(1)}
      >
        <Icon name='left' color={getIconColor()} width={10} height={10} />
      </PageButtonComponent>

      {visiblePages.map((page: number) => (
        <PageButtonComponent
          key={page}
          className={isDisabled(page) ? 'button active' : 'button'}
          onClick={() => changePage(page)}
        >
          {page}
        </PageButtonComponent>
      ))}

      <PageButtonComponent
        className='button icon'
        onClick={() => changePage(page + 2)}
        disabled={isDisabled(page)}
      >
        <Icon name='right' color={getIconColor()} width={10} height={10} />
      </PageButtonComponent>

      <PageButtonComponent
        className='button icon'
        onClick={() => changePage(pages)}
        disabled={isDisabled(pages)}
      >
        <Icon name='right' color={getIconColor()} width={10} height={10} />
        <Icon
          name='right'
          color={getIconColor()}
          width={10}
          height={10}
          marginLeft='-6px'
        />
      </PageButtonComponent>
    </Content>
  )
}
