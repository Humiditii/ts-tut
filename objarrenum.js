"use strict";
// objects
// const person: {
//     name: string;
//     age: number;
// } = {
//     name : 'Hameed',
//     age : 22
// }
// with Ts type inference it will detect the types of the object and properties
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
const person = {
    name: 'Hameed',
    age: 22,
    hobbies: ['reading', 'playing'],
    role: Role.ADMIN
};
//onsole.log(person.name)
const levels = ['100', '200', '300', '400', '500'];
const ages = [30, 40, '50'];
let stuffs;
stuffs = [30, 'apple', false];
let bools;
bools = [true, false, false, true];
//console.log(ages, '\n', stuffs , '\n', bools)
// using tuples
const school = {
    name: 'Futa',
    faculties_no: 12,
    mx: [200, 'mme']
};
school.mx.push('age');
school.mx.push(10);
console.log(school.mx);
// school.mx[1] = 300 not allowed
//console.log(school.mx)
// person.role = 'user' not allowed 
person.role == Role.ADMIN ? console.log('Admin') : console.log('not admin');
console.log(Role);
