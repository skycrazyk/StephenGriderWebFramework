import  { User } from './User'

const user = new User({ name:'Ivan', age: 16 })

user.set({ age: 18 })

console.log(user.get('name'))
console.log(user.get('age'))