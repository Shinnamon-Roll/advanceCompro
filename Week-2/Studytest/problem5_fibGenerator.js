/*
โจทย์ 5 — Generator: ลำดับฟิโบนาเชีย (ยาก)

คำอธิบาย:
เขียน generator function `function* fib()` ที่ให้ค่าเลขฟิโบนาเชียทีละตัวเมื่อเรียก next()
จากนั้นเขียนตัวอย่างการเอา 10 ค่าแรกมาในอาเรย์

ตัวอย่างผลลัพธ์ (10 ค่าแรก): [0,1,1,2,3,5,8,13,21,34]

Hint:
- ใช้ `function* fib() { let a = 0, b = 1; while(true) { yield a; [a,b] = [b,a+b]; }}`

เติมโค้ดหรือทดลองรันตามตัวอย่าง
*/

function* fib() {
  // TODO: implement generator
}

// ตัวอย่างการนำไปใช้: (เอา 10 ค่าแรก)
function take(gen, n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const { value } = gen.next();
    out.push(value);
  }
  return out;
}

// console.log(take(fib(), 10)); // คาดว่าได้ [0,1,1,2,3,5,8,13,21,34]
module.exports = { fib, take };
