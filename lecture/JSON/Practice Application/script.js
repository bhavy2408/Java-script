// DOM

// Get input elements
let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let courseInput = document.getElementById("course");
let cityInput = document.getElementById("city");

// Get buttons
let saveBtn = document.getElementById("save");
let studentTable = document.getElementById("studentTable"); 
let showBtn = document.getElementById("show");

// Get output element
let output = document.getElementById("output");         

let savedata = () => {
  let name = nameInput.value;
  let age = ageInput.value;
  let course = courseInput.value;
  let city = cityInput.value;

  let student = {
    name: name,
    age: age,
    course: course,
    city: city,
  };

  // json
  let studentjson = JSON.stringify(student);

  // setdata
  localStorage.setItem("student", studentjson);

  alert("Data successfully Saved!");
};

let showData = () => {
  let studentjson = localStorage.getItem("studen t");
  let student = JSON.parse(studentjson);

  // display data
  output.innerHTML = `
                Name: ${student.name} <br>
                Age: ${student.age} <br>
                Course: ${student.course} <br>
                City: ${student.city}
            `;

};

saveBtn.addEventListener("click", savedata);
showBtn.addEventListener("click", showData);

