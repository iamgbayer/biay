import React, { useRef, useEffect } from 'react'

type Props = {
  children: React.ReactNode
  whenClose: () => void
  key: string | number
}

export const Closeable = ({ children, whenClose, key }: Props) => {
  const closeable = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('mousedown', whenClicked)

    return () => document.removeEventListener('mousedown', whenClicked)
  }, [])

  const whenClicked = ({ target }: MouseEvent) => {
    const current = closeable.current

    if (!current) {
      return
    }

    if (!current.contains(target as Node)) {
      whenClose()
    }
  }

  return (
    <div key={key} ref={closeable}>
      {children}
    </div>
  )
}
