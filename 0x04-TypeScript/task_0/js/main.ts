// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const renderTable = (students: Student[]) => {
    const table = document.createElement("table");

    students.forEach(student => {
        const row = document.createElement("tr");
        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        const locationCell = document.createElement("td");
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        table.appendChild(row);
    });

    document.body.appendChild(table);
};

// Render the table
renderTable(studentsList);
