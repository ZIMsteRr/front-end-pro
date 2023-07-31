// const person = {
//     name: 'John',
//     phone: '123-456'
// }

// // 1. modificator - prevents adding new props
//
// Object.preventExtensions(person) // !!!
//
// person.age = 42
//
// console.log(person)
//
// // 2. modificator 1. + prevents deleting props
//
// Object.seal(person) // !!!
//
// delete person.phone
// person.age = 42
//
// console.log(person)
//
// // 3. modificator 1. + 2. + prevents modifying props
//
// Object.freeze(person) // !!!
//
// delete person.phone
// person.age = 42
// person.name = 'Jack'
//
// console.log(person)

const person = {}

Object.defineProperty(person, 'name' {
    // common props
    enumerable: true, // for in
    configurable: true, // prevent delete
    // data
    writable: true,
    value: 'John',
    // accessor
    set: function () {
        this._name = value
    },
    get: function () {
        return this._name
    }
})

