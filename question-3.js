// // เริ่มเขียนโค้ดตรงนี้
// - สมมุติว่ามี Function `getUsers` ที่ทำหน้าที่ ดึงข้อมูล User (ผู้ใช้งานในระบบ) จาก Server ชื่อ Jsonplaceholder
//     - Endpoint ที่ใช้ดึงข้อมูล User คือ `https://jsonplaceholder.typicode.com/users`
// - ให้เขียนโปรแกรมดังนี้
//     - ดึงข้อมูล User จาก Server ชื่อ Jsonplaceholder ด้วย Built-in `fetch` Function
//     - ให้แปลงข้อมูลที่ได้จาก Server ให้อยู่ในรูปแบบ Array ของชื่อที่มีความยาวตัวอักษรมากกว่า 17 ตัวอักษร ใช้ Built-in Array Function (Map, Filter หรือ Reduce)

const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(response)
        const data = await response.json();
        console.log(data)
        let result = data.map(user => user.name).filter(name => name.length > 17)
        console.log(result) 
        return result
    } catch (error) {
        console.log(error)
    }
}

getUsers()