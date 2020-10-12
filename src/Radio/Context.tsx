import { createContext, useContext } from 'react'

type Props = {
  checkedValue?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  isDisabled: boolean
  name?: string
  size: 'medium' | 'large'
}

export const Context = createContext<Props>({
  size: 'medium',
  isDisabled: false
})

const useRadioContext = () => {
  const context = useContext(Context)

  return context
}

const Provider = Context.Provider

export { useRadioContext, Provider }
