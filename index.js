const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const Members = require('./Members');

const logger = require('./middleware/logger');

const app = express();



//Init middleware
//app.use(logger);

//HANDLEBARS MIDDLEWARE

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//HOMEPAGE ROUTE
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Member App',
        Members
    });
})

//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

//BODY PARSER MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//API MEMBERS ROUTES
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
