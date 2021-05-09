//Simple Express Server
const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes/api/members');
const logger = require('./middleware/logger'); 
const exphbs = require('express-handlebars');

const members = require('./Members');

    
//Init Middleware
app.use(logger);

app.use(express.json()); //Body parser middleware
app.use(express.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'})); //HandleBars middleware - Template Engine
app.set('view engine', 'handlebars');


app.get('/', (req, res) => res.render('index', {title: 'Member App',members}));

// Set static Folder
app.use(express.static(path.join(__dirname, 'public')));




//Members API routes
app.use('/api/members',require('./routes/api/members'));



//Launching Server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});