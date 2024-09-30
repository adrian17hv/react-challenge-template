import ThemeProvider from '@/theme'
import { Main } from '@/styles'
import Welcome from '@/components/Welcome'

const App = () => {
  return (
    <ThemeProvider>
      <Main>
        <Welcome /> {/* Replace this with your components */}
      </Main>
    </ThemeProvider>
  )
}

export default App
