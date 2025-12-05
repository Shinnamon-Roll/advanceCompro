/*
โจทย์ 2 — Template Literal (ง่าย-กลาง)

คำอธิบาย:
เขียนฟังก์ชัน `greet(user)` ที่รับอ็อบเจ็กต์ `{ name, age }` แล้วคืนข้อความ
โดยใช้ template literal เช่น "Hello Nok — you are 21 years old."
ถ้า `age` ไม่มี ให้ใช้ค่าเริ่มต้นเป็น 'unknown'

Hint:
- ใช้ default param และ backticks (`` ` ``)

ตัวอย่างการใช้งาน:
console.log(greet({name: 'Nok', age: 21})); // Hello Nok — you are 21 years old.
console.log(greet({name: 'Mai'})); // Hello Mai — you are unknown years old.

เติมโค้ดในฟังก์ชันด้านล่าง
*/

function greet(user) {
  // TODO: implement
  return '';
}

// ตัวอย่างทดสอบ
console.log('greet({name:"Nok", age:21}) =>', greet({name:'Nok', age:21}));
module.exports = { greet };
