//1. Чем отличается type от interface
// TODO Вспомнить самому

//2. Для чего нужны дженерики
// TODO Вспомнить самому

//3. Написать some для массивов и типизировать его

//4. Определить тип, в котором будут ключи объекта const X = {a: 1, b: 2, c: 3}

//5. Или
const X = { a: 1, b: 2, c: 3 }

function getProperty(obj, key) {
  return obj[key]
}

getProperty(X, 'a')
getProperty(X, 'm')

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

// 9. Как сделать так, чтобы тип результата выполнения функции соответствовал реализации:
function foo(args: any) {
    return args;
}

const a1 = foo(''); // any
const a2 = foo(1); // any
const a3 = foo(null); // any

// Должно быть
const a1 = foo(''); // string
const a2 = foo(1); // number
const a3 = foo(null); // null

// Ответ
function foo<T>(args: T): T {
    return args;
}


// (Использовать ответ первого вопроса). Как сделать так, чтобы при передаче значения отличного от строки и числа была бы ошибка:
const a1 = foo(''); // string
const a2 = foo(1); // number
const a3 = foo(null); // error

// Ответ
function foo<T extends string | number>(args: T): T {
    return args;
}

// 10 Как реализовать функцию isFoo, чтобы внутри условия не было ошибок?
type Foo = { a: string; }
type Bar = { b: number; }

function isFoo(p: Foo | Bar) {

}

function example(p: Foo | Bar) {
    if (isFoo(p)) {
        return p.a; // error
    } else {
        return p.b; // error
    }
}

const e1 = example({ a: '' });
const e2 = example({ b: 1 });

// Ответ
function isFoo(p: Foo | Bar): p is Foo {
    return 'a' in p;
}

// или

function isFoo(p: Foo | Bar): p is Foo {
    return p.hasOwnProperty('a');
}


