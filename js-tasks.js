//1. Задача на контекст, this.name будет undefined
// Как сделать не undefined? Либо стрелочная, либо bind

const user = {
  name: 'Bob',
  roles: ['friend', 'brother', 'student'],
  getRoles: function() {
    return this.roles.map(function(role) {
      return this.name + ' is ' + role
    })
  }
}

//console.log(user.getRoles()) -?

//2. Задача на даты, ответ arr.sort((a, b) => new Date(a.date) - new Date(b.date))

let arr = [
  { date: "10.01.2017" },
  { date: "01.01.2007" },
  { date: "15.08.2019" },
  { date: "23.10.2022" },
]

//3. Что такое чистая функция
//4. Eventloop
//5. Задача на консоль логи и рекурсию промисов
setTimeout(() => {
  console.log('1')
}, 0)

console.log('2')

new Promise(resolve => {
  console.log('3')

  setTimeout(() => {
    console.log('4')
    resolve()
  }, 0)
}).then(() => {
  console.log('5')
}).then(() => {
  console.log('6')
})

console.log('7')

setTimeout(() => {
  console.log('8')
}, 0)
//6. Как можно пошарить данные между вкладками
//7. воркеры
//8. map и set
//9. target, currentTarget
//10. Promise, что это? Зачем? Какие состояния?
//11*. Алгоритмическая, собрать все value в массив
const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 3,
        }
      ]
    },
    {
      value: 4,
      children: [
        {
          value: 5,
        },
        {
          value: 6,
        }
      ]
    }
  ]
}

//12. boxing, unboxing