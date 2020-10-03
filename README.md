# biay

> ⚡ Simple UI Components for your React applications

[![NPM](https://img.shields.io/npm/v/biay.svg)](https://www.npmjs.com/package/biay) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Getting started

### Install biay and dependencies

```bash
yarn add styled-components styled-system biay
```

### Usage

```tsx
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Reset, Theme } from 'biay'

export default function App() {
  return (
    <ThemeProvider theme={Theme.dark}>
      <Reset />

      <Text>Usage</Text>
    </ThemeProvider>
  )
}
```

## License

MIT © [iamgbayer](https://github.com/iamgbayer)
