'use strict';

var rootFolder =__dirname + '/../dist',
    express = require('express'),
    server,
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    app;

app = express();
server = require('http').createServer(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(rootFolder));

app.get('/api', function (req, res) {
    res.json({ api: 'success' });
});

app.all('*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: rootFolder});
});


server.listen(3000);
console.log('Server is up and running on http://localhost:3000');