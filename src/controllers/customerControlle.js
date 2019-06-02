const controller = {};

controller.list = (req, res) => {
	req.getConnection((err, conn) => {
		if (err) {
			console.log('Error conexion a base de datos server: ', err);
			res.json(err);
			return;
		}
		conn.query('SELECT * FROM customer', (err, customers) => {
			if (err) {
				console.log('Error busqueda en base de datos server: ', err);
				res.json(err);
				return;
			}
			console.log(customers);
			res.render('customers', {
				data: customers
			});
		});
	});
};

controller.add = (req, res) => {
	console.log(req.body);
	const data = req.body;
	req.getConnection((err, conn) => {
		conn.query('INSERT INTO customer set ?', [ data ], (err, rows) => {
			console.log(rows);
			res.redirect('/');
		});
	});
};

controller.delete = (req, res) => {
	console.log(req.params.id);
	const id = req.params.id;
	req.getConnection((err, conn) => {
		conn.query('DELETE FROM customer WHERE id = ? ', [ id ], (err, rows) => {
			console.log(rows);
			res.redirect('/');
		});
	});
};

controller.update = (req, res) => {
	console.log(req.params.id);
	const newCustomer = req.body;
	const id = req.params.id;
	req.getConnection((err, conn) => {
		conn.query('UPDATE  customer set ? WHERE id = ? ', [ newCustomer, id ], (err, rows) => {
			console.log(rows);
			res.redirect('/');
		});
	});
};

controller.edit = (req, res) => {
	const id = req.params.id;

	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM customer WHERE id = ? ', [ id ], (err, row) => {
			res.render('customer_edit', {
				data: row[0]
			});
		});
	});
};

module.exports = controller;
