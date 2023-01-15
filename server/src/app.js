const express = require('express')
const planetRouter = require('./routes/planets.router')


const app = express();

app.use(express.json());

app.use(planetRouter)




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

