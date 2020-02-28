const express = require('express');
const mongoose = require('mongoose');
// const Routes = require('routes/index.js');

const app = express();



//Conexión BD
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    
    if(err){
        throw err;
    }

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'Online');
});

//Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
        menssage: 'Ok, todo bien en el servidor',
        status: 200
    });

});

app.listen(3000, function(){
    console.log('Funcionando el back 3000: \x1b[32m%s\x1b[0m', 'Online');
});