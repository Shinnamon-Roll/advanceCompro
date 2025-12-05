/*
โจทย์ 1 — นับสระ (ง่าย)

คำอธิบาย:
เขียนฟังก์ชัน `countVowels(str)` ที่รับสตริงแล้วคืนจำนวนสระภาษาอังกฤษ
(a, e, i, o, u) ทั้งตัวพิมพ์เล็กและใหญ่

Hint:
- ใช้ `toLowerCase()` และ `split('')` หรือ loop
- `includes` ช่วยเช็คว่าตัวอักษรเป็นสระหรือไม่

ตัวอย่างการใช้งาน:
console.log(countVowels("Hello World")); // คาดว่าได้ 3

ทำตามไปในฟังก์ชันด้านล่าง (เติมโค้ดในส่วน TODO)
*/

function countVowels(str) {
    vovels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vovels.includes(str[i])) {
            count += 1;
        }
    }
  return count;
}

// ตัวอย่างทดสอบ (แก้ฟังก์ชันก่อนรัน)
console.log('countVowels("Hello World") =>', countVowels("Hello World"));
module.exports = { countVowels };
