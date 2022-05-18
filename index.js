'use strict'

const { application } = require('express');
//Requerimientos
var mongoose = require('mongoose');
var app = require('./app');

//Puerto Servidor
var port = process.env.port || 3999;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://pruebas123:pruebas123@cluster0.mp48g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
                ,{ useNewUrlParser: true})
                .then(
                    ()=>{
                        console.log('La conexion a la bd es correcta.')
                        //CREAR EL SERVIDOR
                        app.listen(port,()=>{
                           console.log('El servidor http://localhost:3999 esta funcionando.') 
                        });
                    }
                )
                .catch(error => console.log(error));