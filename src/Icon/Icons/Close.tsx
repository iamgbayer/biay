import React from 'react'

import Props from './Props'

export const Close = ({ width, height, color }: Props) => (
  <svg
    width={width}
    height={height}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 64 64'
    role='img'
  >
    <path
      fill='none'
      stroke={color}
      strokeMiterlimit='10'
      strokeWidth='2'
      d='M41.999 20.002l-22 22m22 0L20 20'
      strokeLinejoin='round'
      strokeLinecap='round'
    />
  </svg>
)
