const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, res, next), () => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${_req.method} ${req.url}`);
        next();
    }
})

app.listen(4201, '127.0.0.1', () => {
    console.log('listening on 4201');
})

app.get('/', (req, res) => {
    res.send({});
})


app.get('/test', (req, res) => {
    res.send('test');
})

app.post('/quotes', (req, res) => {
    res.sendStatus(200);
    console.log('tst')
})