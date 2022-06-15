const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');
var app = express();

app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


app.use('/api/libro', require('./routes/libro.route.js'));

app.use('/api/transacciones', require('./routes/transaccion.route'))
app.use('/api/personas', require('./routes/persona.route'))

app.use('/api/pasajes', require('./routes/pasaje.route'))


app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'), () => {
console.log(`Server started on port`, app.get('port'));
});