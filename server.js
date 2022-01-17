const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use('/', htmlRoutes);
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('Now Listening');
})