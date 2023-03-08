import { Header } from './components/Header/Header'
import './global.css'
import { BrowserRouter } from 'react-router-dom'

export function App() {

  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}
