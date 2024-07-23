const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1);

        let output = `Number of students: ${students.length}\n`;

        const fields = {};
        students.forEach((student) => {
          const [firstname, , , field] = student.split(',');
          if (!fields[field]) {
            fields[field] = { count: 0, list: [] };
          }
          fields[field].count += 1;
          fields[field].list.push(firstname);
        });

        for (const [field, data] of Object.entries(fields)) {
          output += `Number of students in ${field}: ${data.count}. List: ${data.list.join(', ')}\n`;
        }

        resolve(output);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseFile = process.argv[2];
  res.write('This is the list of our students\n');
  countStudents(databaseFile)
    .then((output) => {
      res.end(output);
    })
    .catch((error) => {
      res.end(error.message);
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
