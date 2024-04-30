//1. Чем отличается type от interface
// TODO Вспомнить самому

//2. Для чего нужны дженерики
// TODO Вспомнить самому

//3. Написать some для массивов и типизировать его

//4. Определить тип, в котором будут ключи объекта const X = {a: 1, b: 2, c: 3}
//5. Или
// const X = {a: 1, b: 2, c: 3}

// function getProperty(obj, key) {
//   return obj[key]
// }

// getProperty(X, 'a')
// getProperty(X, 'm')

//6. Типизировать
//Гражданин (isForeigner всегда false)
createPerson({
  name: 'Ivan',
  passportId: '123',
  address: 'Moscow',
  isForeigner: false
})

//Иностранец (isForeigner всегда true)
createPerson({
  name: 'Jhon',
  country: 'USA',
  isForeigner: true
})

//Ошибка
createPerson({
  name: 'Bob',
  country: 'UK',
  passportId: '321',
  isForeigner: false
})

function createPerson(person) {
  if (person.isForeigner) {
    console.log(person.name, 'from', person.country)
  } else {
    console.log(person.name, 'lives at', person.address)
  }
}

//7. Awaited
//8. any, unknown