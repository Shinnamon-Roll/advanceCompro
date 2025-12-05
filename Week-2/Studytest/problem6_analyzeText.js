/*
โจทย์ 6 — โจทย์รวม (ยาก)

คำอธิบาย:
เขียนฟังก์ชัน `analyzeText(text, bannedWords)` ที่คืนอ็อบเจ็กต์รายงาน:
{
  id,            // ได้จาก generator ids เช่น "ID-1"
  original,      // ข้อความดั้งเดิม
  censored,      // ข้อความที่ถูกกรองคำต้องห้าม
  vowelCount,    // จำนวนสระในข้อความ
  topWords       // อาเรย์ 3 คำที่ปรากฏบ่อยที่สุด (ตัด punctuation, ไม่สนพิมพ์เล็ก/ใหญ่)
}

ใช้ความรู้จากโจทย์ก่อนหน้า: string methods, generator, map/filter, template literal ฯลฯ

Hint:
- สร้าง id generator ที่คืน "ID-1", "ID-2", ...
- ใช้ Map/Object เพื่อเก็บความถี่คำ
- ตัด punctuation ด้วย `replace(/[.,!?;:]/g, '')` ก่อนแยกคำ

ในไฟล์นี้ให้เขียนโครงของฟังก์ชันและตัวอย่างการเรียก
*/

// ID generator
function* idGen(prefix = 'ID') {
  let i = 1;
  while (true) {
    yield `${prefix}-${i++}`;
  }
}

// TODO: implement censor (หรือเรียกใช้จากไฟล์โจทย์ข้อ 4)
function censor(text, bannedWords) {
  // simple implementation suggestion: replace exact words (case-insensitive)
  return text;
}

function countVowels(str) {
  // TODO: reuse from problem1
  return 0;
}

function analyzeText(text, bannedWords, idGenerator) {
  // TODO: implement full analyzer
  return {
    id: idGenerator ? idGenerator.next().value : 'ID-0',
    original: text,
    censored: censor(text, bannedWords),
    vowelCount: countVowels(text),
    topWords: []
  };
}

// ตัวอย่างการใช้งาน (แก้ TODO ให้เรียบร้อยก่อนรัน)
const ids = idGen();
console.log(analyzeText('Hello world, hello!', ['badword'], ids));

module.exports = { idGen, analyzeText };
