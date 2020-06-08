import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuarios');

    response.json({ 
        "name": "Vinicius Saturnino",
        "email": "vinicius@gmail.com",
        "age": 21
     });
});

app.listen(3333);