import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './src/rest/components'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
   .use(express.json())
   .use(morgan('short'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", (req, res) => {
    console.log("Responding to root route");
    res.send("Hello from ROOOT");
});

app.use(routes);

const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
    console.log("Server is up and listening on ..." + PORT);
});