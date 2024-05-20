const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bakestudiantes = require('./rutas/hogar');

const app = express();
const port = 3000;
app.use(bodyParser.json());
	
app.get('/', (req, res) => {	
    res.send('Welcome to my api');
});

app.use('/api/hogar', bakestudiantes);

//conectarse a la BD
mongoose.connect(`${process.env['MONGO_DB_URL']}`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error en la conexion a MongoBD'));

db.once('open', ()=> {
	console.log("connected!");
})

app.listen(port, () => {
		console.log(`Runningg`)
})