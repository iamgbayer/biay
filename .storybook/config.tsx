import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'

import { StorybookThemeProvider } from './components'

import { Theme, Reset } from '../src'

addDecorator((story) => (
  <StorybookThemeProvider theme={Theme}>
    {story()}

    <Reset />
  </StorybookThemeProvider>
))

const req = require.context('../src', true, /\.stories\.tsx$/)

withOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  name: 'Biay',
  url: ''
})

const loadStories = () => req.keys().forEach(req)

configure(loadStories, module)
