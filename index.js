import express from 'express'; // to set up a full-stack application
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
console.log(process.env.MONGODB_URI);


const PORT = process.env.PORT || 4000;
const app = express()

// view engine
app.set('views', './views');
app.set('view engine', 'pug')

// Middleware: functions executed in the middle between the request and the response
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(helmet()); // add more security to your app
app.use(cors()); // if we have another app running it will be blocked by cors

// Routes
app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));