import React from 'react'
import Props from './Props'

export const Right = ({ width, height, color }: Props) => (
  <svg width={width} height={height} viewBox='0 0 9 15' fill='none'>
    <path
      d='M1.55469 14L7.33247 7.5L1.55469 1'
      stroke={color}
      strokeWidth='2'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
