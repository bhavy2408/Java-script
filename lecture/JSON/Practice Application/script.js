// Save data

let SaveData = () => {
  let rollno = document.getElementById("rollno").value;
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  if (rollno === "" || name === "" || age === "") {
    alert("Please Enter All details !.");
    return;
  }

  let student = {
    rollno: Number(rollno),
    name: name,
    age: Number(age),
  };

  let students = JSON.parse(localStorage.getItem("student")) || [];

  students.push(student);

  localStorage.setItem("student", JSON.stringify(students));

  alert("Details Save Successfully!.");
};


// View data

let ViewData = () => {

  let Data = localStorage.getItem("student");

  if (Data === null) {
    document.getElementById("output").innerHTML = "No data available!..";
    return;
  }

  let students = JSON.parse(Data);

  let html = `
    <table class="table">
      <tr>
        <th>Roll No</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
  `;

  students.forEach((std) => {
    html += `
      <tr>
        <td>${std.rollno}</td>
        <td>${std.name}</td>
        <td>${std.age}</td>
      </tr>
    `;
  });

  html += "</table>";

  document.getElementById("output").innerHTML = html;
};  

const clearAll = () => {
  let confirmDelete = confirm("Are you sure you want to delete all data?.")

  if(confirmDelete){
    localStorage.removeItem("students")
    alert("All student data deleted!.")
    document.getElementById("output").innerHTML = "No Data available."
  }
}


