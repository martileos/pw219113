const express = require('express');
const app = express(); 

//Importamos las rutas
const indiceRutas=require('./rutas/index');

//Usar las Rutas
app.use("/", indiceRutas);

//Servidor que esté escuchando
app.listen(3000, () => {
	console.log("Servidor escuchando puerto 3000");
});