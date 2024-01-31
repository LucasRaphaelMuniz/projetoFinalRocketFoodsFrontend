import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { PratoPage } from './pages/PratoPage'
import { NovoPrato } from './pages/NovoPrato'
import { EditarPrato } from './pages/EditarPrato'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <EditarPrato />
    </ThemeProvider>
  </React.StrictMode>
)
