/* jshint esversion:8 */
const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//midleware
app.use(express.static(__dirname + '/public'));

//express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


// servidor express
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'hector catacora',
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/plantilla', (req, res) => {
    res.render('plantilla');
});

app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}...`);
});

// 1.-
//res.send('Hello World');
/*  let salida = {
      nombre: 'hector catacora',
      edad: 44,
      url: req.url
  };*/
//res.send(salida);