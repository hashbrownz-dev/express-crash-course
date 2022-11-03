const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

// app.get('/', (request, response) => {
//     // response.send('<h1>Hello World!</h1>');
//     response.sendFile(path.join(__dirname, 'public','index.html'));
// })

//HARD CODE MEMBERS

const members = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Bob Williams',
        email: 'bob@gmail.com',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'Shannon Jackson',
        email: 'shannon@gmail.com',
        status: 'active'
    },
]


//Gets All Members
app.get('/api/members', (req, res) => {
    res.json(members);
})

//SET STATIC FOLDER

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
