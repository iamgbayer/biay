import equals from 'ramda/src/equals'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

type Themes = {
  light: string
  dark: string
}

export const getByTheme = ({ light, dark }: Themes) => {
  const { is } = useContext<{ is: string }>(ThemeContext)

  return equals<string>(is, 'light') ? light : dark
}
