import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const databasePath = process.argv[2];
    readDatabase(databasePath)
      .then((fields) => {
        let output = 'This is the list of our students\n';
        const sortedFields = Object.keys(fields).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
        sortedFields.forEach((field) => {
          const students = fields[field];
          output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });
        response.status(200).send(output.trim());
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const databasePath = process.argv[2];
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databasePath)
      .then((fields) => {
        const students = fields[major] || [];
        response.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }
}

export default StudentsController;
