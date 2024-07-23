import fs from 'fs/promises';
import path from 'path';

const readDatabase = (filePath) => {
  const fullPath = path.resolve(__dirname, '..', filePath);
  return new Promise((resolve, reject) => {
    fs.readFile(fullPath, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1);

        const fields = {};
        students.forEach((student) => {
          const [firstname, , , field] = student.split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        });

        resolve(fields);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
};

export default readDatabase;
