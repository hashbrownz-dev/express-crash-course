const express = require('express');
const path = require('path');

const logger = require('./middleware/logger');

const app = express();



//Init middleware
app.use(logger);

// app.get('/', (request, response) => {
//     // response.send('<h1>Hello World!</h1>');
//     response.sendFile(path.join(__dirname, 'public','index.html'));
// })



//SET STATIC FOLDER

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
