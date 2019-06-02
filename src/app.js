const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// import routes
const customersRoutes = require('./routes/customer');

// configurar express
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middelewares
app.use(morgan('dev'));
app.use(
	myConnection(
		mysql,
		{
			host: 'localhost',
			user: 'digdata',
			password: 'digdataproject',
			port: 3306,
			database: 'test_mysql'
		},
		'single'
	)
);

app.use(express.urlencoded({ extended: false }));

//user route
app.use('/', customersRoutes);
app.use('/add', customersRoutes);
app.use('/delete/:id', customersRoutes);
app.use('/update/:id', customersRoutes);
//static file
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
	console.log('Server on port 3000');
});
