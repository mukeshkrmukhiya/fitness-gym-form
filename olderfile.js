const express = require("express");
const path = require('path');

const app = express();
const port = 80;

app.use('/static', express.static('static'));


//set template file as pug
app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res)=>{
    res.send('this is firs thing with exprees');
})
app.get('/about', (req, res)=>{
    res.status(200).send('this about page of my website');
})

app.get('/pug', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })

app.post('/this', (req, res)=>{
    res.status(200).send('this "this" file page of my website')
});

app.listen(port, ()=>{
    console.log(`listning at port ${port}`)
});
