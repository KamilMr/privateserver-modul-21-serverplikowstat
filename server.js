const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    res.show = (name) => {
        res.sendFile(path.join(__dirname, `/${name}`));
    };
    next();
});

app.use('/user/settings',(req, res) => {
    res.send('Administrator Login Required');
});

app.use('/user/panel',(req, res) => {
    res.send('Administrator Login Required');
});

app.get('/', (req, res) => {
    res.show('home.html');
})
app.get('/home', (req, res) => {
    res.show('home.html');
})

app.get('/about', (req, res) => {
    res.show('about.html')
})

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '/error.jpg'));
})

app.listen(8080, () => {
    console.log('server is running on port: 8080')
});