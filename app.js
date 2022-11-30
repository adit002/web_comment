const http = require('http');
const express = require('express');
const route = require('./src/routes/routes');
const app = express();
app.use(express.static('public'));
app.use('/',route);
app.use((req, res,next)=>{
   res.status(404).send('<h1> Page not found </h1>');
});
const server = http.createServer(app);
server.listen(3000);