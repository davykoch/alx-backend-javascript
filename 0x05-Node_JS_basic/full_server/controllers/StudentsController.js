const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((students) => {
        let output = 'This is the list of our students\n';
        for (const field of Object.keys(students).sort()) {
          output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        }
        response.status(200).send(output.trim());
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(process.argv[2])
        .then((students) => {
          if (students[major]) {
            response.status(200).send(`List: ${students[major].join(', ')}`);
          } else {
            response.status(500).send('Major parameter must be CS or SWE');
          }
        })
        .catch(() => {
          response.status(500).send('Cannot load the database');
        });
    }
  }
}

module.exports = StudentsController;
