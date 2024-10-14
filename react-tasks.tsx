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
// https://hsto.org/webt/6t/7s/ls/6t7slszbqm-tvq5f8twwanrmdgw.jpeg

//2. virtual dom
// Reconciliation. Current tree, Work in Progress tree -> Render Enviroment (приоретизация)
// Эврестический алгоритм O(n) для сравнения деревьев

//3. useEffect, useLayoutEffect

//4. prop key
// https://codesandbox.io/s/dazzling-roentgen-ivbztg?file=/src/App.tsx

//5. ssr (проблема не в загрузке js, а в том как понять в каком состоянии страница должна индексироваться)

//6. Что можно реализовать только на классовом компоненте

//7. Какие способы оптимизации
// Задача на оптимизацию
// https://codesandbox.io/s/dank-resonance-5j3e9o?file=/src/App.js
// Задача на рефакторинг
// https://codesandbox.io/s/dry-glade-qhv8m2

//8. Есть useEffect в deps какой-то обЪект (сравнение происходит по ссылке). Этот объект могут мутировать внутри (т.е. ссылка останется та же). Как сделать так, чтоб useEffect срабатывал при каждой мутации? Ответ: Json.Stringify
