import React, { useState } from 'react'
import ShowCount from './showCount/showCount'
import './App.css'

function App() {
  // Estado para almacenar el número de clicks
  const [count, setCount] = useState(0)

  // Función para aumentar el contador
  const handleIncrement = () => {
    setCount(count + 1)
  }

  // Función para disminuir el contador
  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <div className='app-container'>
      <h1>Contador React</h1>

      <div className='counter-wrapper'>
        {/* Componente hijo que muestra el contador */}
        <ShowCount count={count} />
      </div>

      <div className='buttons-container'>
        <button className='button decrement-button' onClick={handleDecrement}>
          Restar
        </button>

        <button className='button increment-button' onClick={handleIncrement}>
          Sumar
        </button>
      </div>
    </div>
  )
}

export default App
