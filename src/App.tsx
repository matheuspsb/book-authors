import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import routes from './routes/index.routes'
import { theme } from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  )
}

export default App
