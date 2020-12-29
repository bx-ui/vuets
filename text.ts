let isBool: boolean = true;

let bool: boolean = Boolean(null)

console.log(bool)

// 啥也不写默认any类型

// 类型推论
// let bool2 = true;  --> let bool: boolean = true
// bool2 = "1212"

// 联合类型
// function asdf(something: string | number): void {
//   (something as string).length
// }

// 接口
// interface Person {
//   readonly name: string,
//   age?: number,
//   [propName: string]: any
// }

// let obj: Person = {
//   name: "1212",
//   asgf: "1212"
// }

// 数组
// let arr: number[] = [];
// let arr1: Array<String> = []


// interface asdf {
//   [index: number]: number
// }

// let arr2: asdf;

// 类型断言