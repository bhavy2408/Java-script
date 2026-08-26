// Save Data
let saveData = () => {
  let rollno = document.getElementById("rollno").value;
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  if (rollno === "" || name === "" || age === "") {
    alert("Please Enter all details ");
    return;
  }

  let student = {
    rollno: Number(rollno),
    name: name,
    age: Number(age),
  };

  let students = JSON.parse(localStorage.getItem("students")) || [];

  students.push(student);

  localStorage.setItem("students", JSON.stringify(students));

  alert("Student data saved successfully.");
};

// View

let ViewData = () => {
  let data = localStorage.getItem("students");

  if (data == null) {
    document.getElementById("output").innerHTML = "No data available";
    return;
  }

  let students = JSON.parse(data)

  let html = `
  
  <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
    </tr>
  `

  students.forEach((std) => {
    html += `
      <tr>
        <td>${std.id}</td>
        <td>${std.name}</td>
        <td>${std.age}</td>
      </tr> 
    `
  })
   html += "</table>"

  document.getElementById("output").innerHTML = html;
};
