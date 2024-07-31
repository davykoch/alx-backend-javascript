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
	location: "London"
  };
  
  // Create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // Function to render the table
  function renderTable(): void {
	const table = document.createElement('table');
	const headerRow = table.insertRow();
	
	// Create header cells
	const firstNameHeader = headerRow.insertCell(0);
	const locationHeader = headerRow.insertCell(1);
	firstNameHeader.textContent = 'First Name';
	locationHeader.textContent = 'Location';
  
	// Add rows for each student
	studentsList.forEach((student) => {
	  const row = table.insertRow();
	  const firstNameCell = row.insertCell(0);
	  const locationCell = row.insertCell(1);
	  firstNameCell.textContent = student.firstName;
	  locationCell.textContent = student.location;
	});
  
	// Append the table to the body
	document.body.appendChild(table);
  }
  
  // Call the render function when the DOM is loaded
  document.addEventListener('DOMContentLoaded', renderTable);
