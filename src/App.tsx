import { Header } from './components/Header/Header'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home/Home'

export function App() {

  return (
    <BrowserRouter>
      <Header />
      <Home />
    </BrowserRouter>
  )
}
