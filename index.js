const express = require('express');
const app = express();


app.get('/', (req, res) => {
	res.send({ new: 'commit' });
});


const PORT = process.env.PORT || 5000; // Heroku port listen
app.listen(PORT);