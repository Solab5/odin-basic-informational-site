const http = require('http');
const express = require('express');
const path = require('path');
const fs = require('fs');


const app = express();

app.get("/", (req, res) => {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {'content-Type': 'text/html'})
            res.end(content)
        });
    }
);

app.get('/about', (req, res) => {
    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
        if (err) throw err;
        res.writeHead(200, {'content-Type': 'text/html'})
        res.end(content)
    });
}) 

app.get('/contact-me', (req, res) => {
    fs.readFile(path.join(__dirname, 'public', 'contact-me.html'), (err, content) => {
        if (err) throw err;
        res.writeHead(200, {'content-Type': 'text/html'})
        res.end(content)
    });
});

app.get('*', (req, res) => {
    fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
        if (err) throw err;
        res.writeHead(200, {'content-Type': 'text/html'})
        res.end(content)
    });
}) 


const PORT = process.env.port || 3000

app.listen(PORT, () => console.log(`Server running on ${PORT}`));