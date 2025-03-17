import express from 'express';
const PORT = process.env.PORT || 4000;
const app = express()

// view engine
app.set('views', './views');
app.set('view engine', 'pug')

// Middleware: functions executed in the middle between the request and the response
app.use(express.static("./public"));

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));