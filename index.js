import fs from 'fs'
import cors from 'cors';
import express from 'express'
import path from 'path';
import { readdir } from 'node:fs/promises'
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname, basename } from 'path';

// ---------------------------- GLOBAL VARS

const app = express();
const PORT = 5000;
app.use(express.json());
app.disable('x-powered-by')

// ---------------------------- Middleware to handle JSON responses

app.use(cors({
  origin: (origin, callback) => {
    const alloworigins = ['http://localhost:3000']


    if (alloworigins.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
}))

// ---------------------------- Define a route to get the list of folders and files

const getDirectoryPath = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  return join(__dirname, 'api');
};

async function getAllFilesInDirectory(directory) {
  let results = [];
  
  // SCAN THE DIRECTORIES
  const files = await readdir(directory, { withFileTypes: true });
  console.log(files)

  for (const file of files) {
    const filePath = join(directory, file.name);
    
    if (file.isDirectory()) {
      // If it's a directory, we can optionally call the function recursively
      const subFiles = await getAllFilesInDirectory(filePath);  // Recursively scan subfolder
      results = results.concat(subFiles); // Add the subfolder's files to the results
    } else {
      // If it's a file, add it to the results array
      results.push(filePath);
    }
  }
  
  return results; // Return the list of files
}

console.log(await getAllFilesInDirectory("/api/folders"))

app.get('/api/folders', async (req, res) => {

  // ABSOLUTLE PATH
  const directoryPath = fileURLToPath(import.meta.url);
  //const directoryPath = path.join(__dirname, 'markdown'); // Adjust the directory path

  // NAME FROM THE FILE
  const fileName = basename(directoryPath);
  //Read the directory
    try{
      const files = await readdir(directoryPath);
      for (const file of files)
      console.log(files)
    // Filter the directories (folders) and files
    res.json(files);
  } catch(err){
    console.log(err)
    return res.status(500).json({ error: 'Unable to scan directory' });
  }
});

// Define a route to get files in a specific folder
app.get('/api/folders/:folderName', async (req, res) => {
  const folderName = req.params.folderName;
  //const folderPath = path.join(__dirname, 'markdown', folderName); // Adjust the directory path

// ABSOLUTLE PATH
const directoryPath = fileURLToPath(import.meta.url);
//const directoryPath = path.join(__dirname, 'markdown'); // Adjust the directory path

// NAME FROM THE FILE
const fileName = basename(directoryPath);
//Read the directory
  try{
    const files = await readdir(directoryPath);
    for (const file of files)
    console.log(files)
  // Filter the directories (folders) and files
  res.json(files);
} catch(err){
  console.log(err)
  return res.status(500).json({ error: 'Unable to scan directory' });
}
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
