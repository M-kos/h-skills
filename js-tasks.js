//1. Задача на контекст, this.name будет undefined
// Как сделать не undefined? Либо стрелочная, либо bind

const user = {
  name: 'Bob',
  roles: ['friend', 'brother', 'student'],
  getRoles: function () {
    return this.roles.map(function (role) {
      return this.name + ' is ' + role
    })
  }
}

//console.log(user.getRoles()) -?

//2. Задача на даты, ответ arr.sort((a, b) => new Date(a.date) - new Date(b.date))

let arr = [
  { date: '10.01.2017' },
  { date: '01.01.2007' },
  { date: '15.08.2019' },
  { date: '23.10.2022' }
]

//3. Что такое чистая функция
// — Каждый раз функция возвращает одинаковый результат, когда она вызывается с тем же набором аргументов
// — Нет побочных эффектов
//console.log - побочный эффект

//4. Eventloop
//Макротаски - события
//Микротаски - промисы, mutationObserver, queueMicrotask
// Callstack -> Microtasks -> Macrotask
//https://www.youtube.com/watch?v=zDlg64fsQow

//5. Задача на консоль логи и рекурсию промисов 2-3-7-1-4-5-6-8
setTimeout(() => {
  console.log('1')
}, 0)

console.log('2')

new Promise((resolve) => {
  console.log('3')

  setTimeout(() => {
    console.log('4')
    resolve()
  }, 0)
})
  .then(() => {
    console.log('5')
  })
  .then(() => {
    console.log('6')
  })

console.log('7')

setTimeout(() => {
  console.log('8')
}, 0)

//Junior
//6. Типы данных
//7. boxing, unboxing
//8. null и undefined
//9. ==, ===
//10. Чему равен NaN
//11. Promise, что это? Зачем? Какие состояния?
//12. map и set

//13. target, currentTarget
// event.target указывает на элемент, от которого произошло событие,
// тогда как event.currentTarget обозначает элемент, к которому привязан обработчик этого события.

//Middle
//14. воркеры
// Web Workers это механизм, который позволяет скрипту выполняться в фоновом потоке, который отделен от основного потока веб-приложения.
// Интерфейс SharedWorker (разделяемый воркер) является особым видом воркеров к которому можно получить доступ из нескольких контекстов браузера, например, из нескольких окон, iframe, или других воркеров.
// Service worker фактически выполняет роль прокси-сервера, находящегося между веб-приложением и браузером, а также сетью (если доступна). Из соображений безопасности service worker'ы работают только по HTTPS
// Интерфейс Worker из Web Workers API является представителем фоновой задачи, которая легко может быть создана и может передавать сообщения обратно создателю.

//15*. Алгоритмическая, собрать все value в массив
const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 3
        }
      ]
    },
    {
      value: 4,
      children: [
        {
          value: 5
        },
        {
          value: 6
        }
      ]
    }
  ]
}

//Senior
//16. Как можно пошарить данные между вкладками
// LocalStorage, BroadcastChannel, Сервис-воркеры, Window.postMessage (необходима ссылка на другую вкладку браузера, только для window.open() или document.open())

// 17.
class Foo {
  bar = function () {}
  baz() {}
}

const foo1 = new Foo()
const foo2 = new Foo()

foo1.bar === foo2.bar // ?
foo1.baz === foo2.baz // ?

// foo1.bar === foo2.bar будет false, потому что метод bar будет свой в каждом экземпляре класса.
// foo1.baz === foo2.baz будет true, потому что метод baz будет общий из прототипа.

// 18. Вопрос для перехода на Реакт?

// Как повесить обработчик события клика по элементам списка? Если кандидат повесил на .item, то добавляем вопрос о необходимости оптимизации.
// Почему данный обработчик сработает?

;<div class='list'>
  <div class='item'>1</div>
  <div class='item'>2</div>…<div class='item'>N-1</div>
  <div class='item'>N</div>
</div>

//19 Написать compare, которая сравнивает значения в объекте, по путям из строк

const obj = {
  s: {
    t: 5
  },

  f: {
    k: {
      m: 5
    }
  },

  r: 8
}

compare(obj, 's.t', 'f.k.m') //true
