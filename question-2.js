const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
// - ให้เขียนโปรแกรมโดยใช้ Built-in Array Function ดังนี้
//     1. ให้กรองข้อมูลนักเรียนที่มีคะแนนมากกว่า 50
//     2. ให้เพิ่มคะแนนนักเรียนแต่ละคน 10%
//     3. ให้รวมคะแนนทั้งหมดของนักเรียนที่เหลืออยู่ และที่ถูกเพิ่มคะแนนคนละ 10% ไปก่อนหน้านี้ (โดยใช้ Built-in Array Function)
//     4. ให้นำคะแนนที่รวมแล้ว มาแสดงบนหน้าจอ Console ในรูปแบบ
//     `"Total score is <ค่าของคะแนนที่รวมแล้ว>"` (ห้าม Hard-Code ค่าเข้าไปใน String โดยตรง)

const newStudent = students
                  .filter(student => student.score > 50)
                  .map(student=> student.score = student.score + (student.score*10)/100 )
                  .reduce((acc, cur) => acc + cur, 0)



console.log(`"Total score is ${newStudent}"`)