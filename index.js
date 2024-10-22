const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware to handle JSON responses
app.use(express.json());

// Define a route to get the list of folders and files
app.get('/api/folders', (req, res) => {
  const directoryPath = path.join(__dirname, 'markdown'); // Adjust the directory path

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
  app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express

  // Read the directory
  fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to scan directory' });
    }

    // Filter the directories (folders) and files
    const folders = files.filter(file => file.isDirectory()).map(folder => folder.name);

    res.json(folders);
  });
});

// Define a route to get files in a specific folder
app.get('/api/folders/:folderName', (req, res) => {
  const folderName = req.params.folderName;
  const folderPath = path.join(__dirname, 'markdown', folderName); // Adjust the directory path

  // Read the folder contents
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: `Unable to read folder ${folderName}` });
    }

    res.json(files); // Return the list of files in the folder
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
