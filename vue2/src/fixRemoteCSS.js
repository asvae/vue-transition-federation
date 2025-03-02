// For some reason - CSS doesn't use proper base, as I didn't find a better config - I just hacked it here.

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../dist/assets/remoteEntry.js');

// Read the file and replace occurrences of CSS filenames
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading ${filePath}:`, err);
    return;
  }

  // Regex to find all occurrences of CSS file references in quotes (like 'xyz.css')
  const updatedContent = data.replace(/"([\w-]+\.css)"/g, '"./assets/$1"');

  fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing ${filePath}:`, err);
      return;
    }
    console.log(`Updated ${filePath}: CSS file paths fixed.`);
  });
});
