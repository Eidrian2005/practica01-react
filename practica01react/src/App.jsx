import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>
        <div className='contendor-botones'>
          <button>iniciar sesion</button> 
          <button>inicio</button>
          <button>contactos</button>
          <button>sobre nosotros</button>
          <button>descargas</button>
        </div>
        </header>
        
      </div>
    </>
  )
}

export default App
