/*
โจทย์ 4 — ฟังก์ชันและเงื่อนไข: แก้คำหยาบ (กลาง)

คำอธิบาย:
เขียน `censor(text, bannedWords)` ที่รับสตริง `text` และอาเรย์คำต้องห้าม
แล้วคืนข้อความที่คำต้องห้ามถูกแทนด้วยเครื่องหมาย `*` เท่าจำนวนตัวอักษรของคำนั้น

ตัวอย่าง:
censor("you are bad", ["bad"]) => "you are ***"

Hint:
- เริ่มจากแยกคำ `split(' ')` แล้ว map
- (Bonus) จัดการ punctuation โดยใช้ `replace` กับ RegExp

เติมโค้ดในฟังก์ชันด้านล่าง
*/

function censor(text, bannedWords) {
  // TODO: implement
  return text;
}

// ตัวอย่างทดสอบ
console.log('censor("you are bad", ["bad"]) =>', censor('you are bad', ['bad']));
module.exports = { censor };
