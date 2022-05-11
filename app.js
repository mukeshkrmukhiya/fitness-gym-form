//express
const express = require('express');
const fs = require('fs');
const app = express();
const bodyparser = require('body-parser');

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/mydatabase'); 5
    console.log("Database connection successful...");
}
// Schema
const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    aboutu: {
        type: String,
        required: true
    }

});
// Model / collection
const Collections = mongoose.model('collections', dataSchema);
//Document


// const document1 = new Collections({ name: 'collec' });




// Express configure
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));

port = 80;
//configure satic   
//configer pug 
app.set('viewengine', 'pug');

//End point
const con = 'this is the best thing that i have heared';
const parameter = { 'title': 'Fitness gym Resitrasion form', 'contents': 'this is content of this website' }
app.get('/', (req, res) => {
    res.status(200).render('index.pug', parameter);
})
// form date save in database
// app.post('/', (req, res) => {
//     var myDataObj = new Collections(req.body);
//     myDataObj.save().then(() => {
//         res.send('😀😀😁Datahasbeen saves Successfully...');
//     }).catch(() => {
//         res.status(404).send('😓😓data insertion faild!');
//     })

// })

// app.get('/name', async (req, res) => {
//     try {
//         const login = await Collections.findOne({ age: 78 });
//         res.render("")
//         console.log(login);
//     } catch (error) {
//         console.log(error);
//     }
// })

// app.post('/contact', (req, res) => {
//     const parameter = { 'message': 'your form is summited succesfully' }
//     res.status(200).render('index.pug', parameter)
//     name1 = req.body.name;
//     age = req.body.age;
//     gender = req.body.gender;
//     address = req.body.address;
//     more = req.body.aboutu;
//     let outPutFile = `\n Name of clinet is ${name1} , ${age} year old , ${gender} and he is belonging from ${address} , more obout is ${more}`
//     fs.appendFileSync('output.txt', outPutFile);
//     console.log(name1);
// })

// server listning
app.listen(port, () => {
    console.log(`this is listnig at port : ${port}`);
})