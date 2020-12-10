import React from 'react'
import Props from './Props'

export function Loading({ width, height, color }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
    >
      <circle
        cx='50'
        cy='50'
        fill='none'
        stroke={color}
        strokeWidth='3'
        r='20'
        strokeDasharray='94.24777960769379 33.41592653589793'
        transform='rotate(179.152 50 50)'
      >
        <animateTransform
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='1.4492753623188404s'
          values='0 50 50;360 50 50'
          keyTimes='0;1'
        />
      </circle>
    </svg>
  )
}
