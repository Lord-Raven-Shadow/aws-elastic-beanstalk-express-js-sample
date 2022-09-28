const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Module 5, Full pipeline test - Tony - ISEC6000, 28 Sept 22'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
