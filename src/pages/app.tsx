import ThemeProvider from '@/theme'
import { Main } from '@/styles'
import HousesList from '../components/Houses/index'
import Header from '@/components/header'
import Footer from '@/components/footer'

const App = () => {
  return (
    <ThemeProvider>
        <Header />
      <Main>
        <HousesList />
      </Main>
        <Footer />
    </ThemeProvider>
  )
}

export default App