const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

// Function to read a file asynchronously and print its content
async function readAndPrintFile(filePath) {
  try {
    const content = await readFileAsync(filePath, 'utf8');
    console.log(`Content of ${filePath}:\n${content}`);
  } catch (error) {
    console.error(`Error reading ${filePath}: ${error.message}`);
    // Log the error to an error log file (e.g., error.log)
    fs.appendFile('error.log', `Error reading ${filePath}: ${error.message}\n`, (err) => {
      if (err) {
        console.error('Error writing to error log:', err);
      }
    });
  }
}

// Read the list of file paths from the text file and process them concurrently
async function readFilesConcurrently(filePathsFile) {
  try {
    const filePaths = await readFileAsync(filePathsFile, 'utf8');
    const pathsArray = filePaths.split('\n').map((path) => path.trim());

    // Filter out empty lines (for instance, if there's an extra newline at the end of the file)
    const nonEmptyPaths = pathsArray.filter((path) => path.length > 0);

    // Process each file concurrently
    await Promise.all(nonEmptyPaths.map((filePath) => readAndPrintFile(filePath)));

    console.log('All files read.');
  } catch (error) {
    console.error(`Error reading file paths: ${error.message}`);
  }
}

module.exports = { readFilesConcurrently };
