
const students = [
    {
        name: "Alice",
        age: 20,
        major: "Computer Science"
    },
    {
        name: "Bob",
        age: 22,
        major: "Mathematics"
    },
    {
        name: "Charlie",
        age: 21,
        major: "Physics"
    }
];

let filter = students.filter(student => student.name === "Bob");

console.log(filter);