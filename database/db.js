const {MongoClient} = require("mongodb");
const client = new MongoClient("mongodb+srv://pruebas123:pruebas123@cluster0.mp48g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

client.connect().then(
    (response)=>{
        console.log('La conexion a la bd es correcta - url:'+ response.url);
    },
    (error)=>{
        console.log('error:'+error)
    }
)

module.exports = client;