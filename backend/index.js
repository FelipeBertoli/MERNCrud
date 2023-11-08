import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/routes'

const app = express();
const PORT = 4000;

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/libraryDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
});

// bodyparser setup
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.get('/', (req, res) =>
    res.send(`The application is running ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`The application server is running on port ${PORT}`)
);

// CORS setup
app.use(cors());


routes(app);