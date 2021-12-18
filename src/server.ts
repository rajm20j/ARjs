import express = require('express');
const app = express();
import path = require('path');
const port: number = 8080;

app.set('views', (path.join(__dirname, 'static')));
app.set('view engine', 'ejs');

app.get('/', (req: any, res: any) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})