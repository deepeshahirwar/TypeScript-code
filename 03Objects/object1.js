"use strict";
// Objects in ts 
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "deepesh",
    email: "deepesh@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "hitesh", isPaid: false });
function creatCourse() {
    return { name: "alpha2.0", price: 999 };
}
console.log(creatCourse());
