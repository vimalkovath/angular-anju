const express = require('express');

const app = express();

app.use(express.static('./dist/angular-anju'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-anju/'}),
);

app.listen(process.env.PORT || 8080);
