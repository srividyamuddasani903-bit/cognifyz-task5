const API = "/students";

async function loadStudents() {
    const response = await fetch(API);
    const students = await response.json();

    const list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach(student => {
        list.innerHTML += `
        <li>
        ${student.name}
        <button class="delete" onclick="deleteStudent(${student.id})">
        Delete
        </button>
        </li>`;
    });
}

async function addStudent() {
    const name = document.getElementById("name").value;

    if(name===""){
        alert("Enter Student Name");
        return;
    }

    await fetch(API,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name})
    });

    document.getElementById("name").value="";
    loadStudents();
}

async function deleteStudent(id){
    await fetch(API+"/"+id,{
        method:"DELETE"
    });

    loadStudents();
}

loadStudents();