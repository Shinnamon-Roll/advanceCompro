/*
โจทย์ 3 — Arrow + Array (กลาง)

คำอธิบาย:
ให้มีอาเรย์ตัวเลข `nums` เขียนฟังก์ชัน `process(nums)` โดยใช้ Arrow function
และ `map`/`filter` ทำสองอย่าง: ยกกำลังสองทุกค่า แล้วกรองเฉพาะค่าที่มากกว่า 10

ตัวอย่าง:
process([1,2,3,4]) => [16]

Hint:
- ใช้ `const process = nums => ...`
- ใช้ `map(n => n * n)` แล้ว `filter(n => n > 10)`

เติมโค้ดตรง TODO
*/

const process = (nums) => {
    return map(nums)
    // return nums.map(n => n * n).filter(n => n > 10);
}

// ตัวอย่างทดสอบ
console.log('process([1,2,3,4]) =>', process([1,2,3,4]));
module.exports = { process };
