const express = require('express')
const planetRouter = require('./routes/planets/planets.router')
const launchRouter = require('./routes/launches/launches.router')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const app = express();

app.use(cors())
app.use(morgan('combined'))

app.use(express.json());
app.use(cors())


app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(planetRouter)
app.use(launchRouter)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });




// app.set('port', process.env.PORT || 4000);

// app.use(cors());
// app.use(morgan('dev'));
// app.use(express.json()); //to send json requests inside body

// app.use(userRoutes);
// app.use(categoriesRoutes);
// app.use(itemRoutes);
// app.use(orderRoutes);
// app.use(logginRoutes);



module.exports = app;

