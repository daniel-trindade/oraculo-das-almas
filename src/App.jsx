import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Container from './components/Container.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App

