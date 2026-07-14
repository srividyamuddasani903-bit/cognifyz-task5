const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let students = [];

app.get("/students", (req, res) => {
    res.json(students);
});

app.post("/students", (req, res) => {
    const student = {
        id: Date.now(),
        name: req.body.name
    };

    students.push(student);
    res.json(student);
});

app.delete("/students/:id", (req, res) => {
    students = students.filter(
        student => student.id != req.params.id
    );
    res.json({ message: "Student Deleted" });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});