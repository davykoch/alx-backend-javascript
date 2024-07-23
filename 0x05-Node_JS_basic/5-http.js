const http = require('http');
const fs = require('fs').promises;

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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databaseFile = process.argv[2];
    res.write('This is the list of our students\n');
    countStudents(databaseFile)
      .then((output) => {
        res.end(output);
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
