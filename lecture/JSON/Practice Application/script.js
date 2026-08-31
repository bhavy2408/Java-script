// // Save data

// let SaveData = () => {
//   let rollno = document.getElementById("rollno").value;
//   let name = document.getElementById("name").value;
//   let age = document.getElementById("age").value;

//   if (rollno === "" || name === "" || age === "") {
//     alert("Please Enter All details !.");
//     return;
//   }

//   let student = {
//     rollno: Number(rollno),
//     name: name,
//     age: Number(age),
//   };

//   let students = JSON.parse(localStorage.getItem("student")) || [];

//   students.push(student);

//   localStorage.setItem("student", JSON.stringify(students));

//   alert("Details Save Successfully!.");
// };

// let ViewData = () => {

//   let Data = localStorage.getItem("student");

//   if (Data === null) {
//     document.getElementById("output").innerHTML = "No data available!..";
//     return;
//   }

//   let students = JSON.parse(Data);

//   let html = `
//     <table class="table">
//       <tr>
//         <th>Roll No</th>
//         <th>Name</th>
//         <th>Age</th>
//       </tr>
//   `;

//   students.forEach((std) => {
//     html += `
//       <tr>
//         <td>${std.rollno}</td>
//         <td>${std.name}</td>
//         <td>${std.age}</td>
//       </tr>
//     `;
//   });

//   html += "</table>";

//   document.getElementById("output").innerHTML = html;
// };  

// const clearAll = () => {
//   let confirmDelete = confirm("Are you sure you want to delete all data?.")

//   if(confirmDelete){
//     localStorage.removeItem("students")
//     alert("All student data deleted!.")
//     document.getElementById("output").innerHTML = "No Data available."
//   }
// }


// =============================
// Save Data
// =============================

let SaveData = () => {

    let rollno = document.getElementById("rollno").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;


    // Validation
    if (rollno === "" || name === "" || age === "") {

        alert("Please Enter All Details!");

        return;
    }


    // Student Object
    let student = {

        rollno: Number(rollno),

        name: name,

        age: Number(age)
    };


    // Get old data
    let students =
        JSON.parse(localStorage.getItem("student")) || [];


    // Add new student
    students.push(student);


    // Save data
    localStorage.setItem(
        "student",
        JSON.stringify(students)
    );


    alert("Details Saved Successfully!");


    ClearInput();

    ViewData();
};



// =============================
// View Data
// =============================

let ViewData = () => {

    let Data = localStorage.getItem("student");


    // No data
    if (Data === null) {

        document.getElementById("output").innerHTML =
            "No data available!";

        return;
    }


    let students = JSON.parse(Data);


    if (students.length === 0) {

        document.getElementById("output").innerHTML =
            "No data available!";

        return;
    }


    let html = `

        <table class="table">

            <tr>

                <th>Roll No</th>

                <th>Name</th>

                <th>Age</th>

                <th>Action</th>

            </tr>
    `;


    students.forEach((std, index) => {

        html += `

            <tr>

                <td>${std.rollno}</td>

                <td>${std.name}</td>

                <td>${std.age}</td>

                <td>

                    <button
                        class="edit-btn"
                        onclick="EditData(${index})">
                        Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="DeleteOne(${index})">
                        Delete
                    </button>

                </td>

            </tr>
        `;
    });


    html += `

        </table>
    `;


    document.getElementById("output").innerHTML = html;
};



// =============================
// Delete One Student
// =============================

let DeleteOne = (index) => {

    let students =
        JSON.parse(localStorage.getItem("student")) || [];


    students.splice(index, 1);


    localStorage.setItem(
        "student",
        JSON.stringify(students)
    );


    ViewData();
};



// =============================
// Delete Data
// =============================

let DeleteData = () => {

    let rollno =
        document.getElementById("rollno").value;


    if (rollno === "") {

        alert("Enter Roll No to delete!");

        return;
    }


    let students =
        JSON.parse(localStorage.getItem("student")) || [];


    let newStudents = students.filter(
        (student) => student.rollno !== Number(rollno)
    );


    if (students.length === newStudents.length) {

        alert("Student Not Found!");

        return;
    }


    localStorage.setItem(
        "student",
        JSON.stringify(newStudents)
    );


    alert("Student Deleted Successfully!");


    ClearInput();

    ViewData();
};



// =============================
// Clear All Data
// =============================

let ClearData = () => {

    localStorage.removeItem("student");


    document.getElementById("output").innerHTML =
        "No data available!";


    ClearInput();


    alert("All Data Cleared!");
};



// =============================
// Edit Data
// =============================

let EditData = (index) => {

    let students =
        JSON.parse(localStorage.getItem("student")) || [];


    let student = students[index];


    document.getElementById("rollno").value =
        student.rollno;

    document.getElementById("name").value =
        student.name;

    document.getElementById("age").value =
        student.age;


    // Store index for update
    localStorage.setItem(
        "editIndex",
        index
    );
};



// =============================
// Update Data
// =============================

let UpdateData = () => {

    let rollno =
        document.getElementById("rollno").value;

    let name =
        document.getElementById("name").value;

    let age =
        document.getElementById("age").value;


    if (rollno === "" || name === "" || age === "") {

        alert("Please Enter All Details!");

        return;
    }


    let index =
        localStorage.getItem("editIndex");


    if (index === null) {

        alert("Please select a student first!");

        return;
    }


    let students =
        JSON.parse(localStorage.getItem("student")) || [];


    students[index] = {

        rollno: Number(rollno),

        name: name,

        age: Number(age)
    };


    localStorage.setItem(
        "student",
        JSON.stringify(students)
    );


    localStorage.removeItem("editIndex");


    alert("Student Updated Successfully!");


    ClearInput();

    ViewData();
};



// =============================
// Clear Input Fields
// =============================

let ClearInput = () => {

    document.getElementById("rollno").value = "";

    document.getElementById("name").value = "";

    document.getElementById("age").value = "";
};