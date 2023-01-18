const express = require('express');

const app = express();

app.get('/',(req,res) => res.send('<h1>Pruebas con aws</h1>'))


app.listen(3000);
console.log('Puerto 3000');