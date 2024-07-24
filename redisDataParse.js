const fs = require('fs');
const path = require('path');

// Path to the JSON file
const filePath = path.join(__dirname, 'aimia.txt');

// Function to read and parse the JSON file
function readAndParseJsonFile(filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    // Convert buffer to string with 'utf8' encoding
    const decodedData = data.toString('utf8');

    console.log('Decoded file content:', decodedData); // Inspect the decoded data

    // Check for unexpected characters and sanitize if necessary
    const sanitizedData = decodedData.replace(/[\x00-\x1F\x7F]/g, ''); // Remove non-printable characters

    console.log('Sanitized file content:', sanitizedData); // Inspect the sanitized data

    // Trim any extraneous whitespace or newline characters
    const trimmedData = sanitizedData.trim();

    try {
      const jsonData = JSON.parse(trimmedData);
      console.log('Parsed JSON data:', jsonData);
      
      fs.writeFile(path.join(__dirname, 'aimia.json'), JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
          console.error('Error writing file:', err);
        } else {
          console.log('JSON data successfully saved ');
        }
      });

    } catch (err) {
      console.error('Error parsing JSON:', err);
    }
  });
}

// Call the function to read and parse the JSON file
readAndParseJsonFile(filePath);
