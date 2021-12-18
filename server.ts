import express = require('express');
const app = express();
import path = require('path');
const port: string | number = process.env.PORT || 8080;

app.set('views', (path.join(__dirname, 'src\\static')));
app.set('view engine', 'ejs');

app.get('/', (req: any, res: any) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})