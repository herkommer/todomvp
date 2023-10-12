const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

app.use(cors()); 
app.use('/todos', todoRoutes);

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(4242, () => {
    console.log('Server up and running');
});

module.exports = app;