// Реализовать приложение-счётчик,
// который каждую секунду увеличивается на 1.

// При наведении курсора мыши на h1 счётчик должен
//остановиться, но в фоне должен продолжаться отсчёт.

// При выходе курсора за пределы h1, счётчик должен
// показать актуальное значение и продолжать отсчёт.

import React from 'react'
import './styles.css'

function App() {
  const counter = 0

  return (
    <div className='App'>
      <h1>{counter}</h1>
    </div>
  )
}

export default App


//1. Жизненный цикл компонента
//2. virtual dom
//3. useEffect, useLayoutEffect
//4. prop key
//5. ssr