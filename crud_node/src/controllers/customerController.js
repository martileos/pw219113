const controller = {}

controller.list = (req,res) => {
	req.getConnection((err,conn) => {
		conn.query('SELECT * FROM customers',(err,customers)=>{
			if(err){
				res.json(err);
			}
			console.log(customers);
			res.render('customer',{
				data: customers
			})
		});
	});
}

controller.save = (req,res) =>{
	const newCustomer = req.body;
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO customers set ?',[newCustomer],(err, rows)=>{
			res.redirect('/');
		})
	})
}
controller.delete = (req,res) =>{
	const { id } = req.params;
	req.getConnection((err,conn) =>{
		conn.query('DELETE FROM customers WHERE id = ?',[id],(err,rows) =>{
			res.redirect('/');
		})
	})
}
controller.edit = (req,res) =>{
	const { id } = req.params;
	req.getConnection((err,conn) =>{
		conn.query('SELECT * FROM customers WHERE id = ?',[id],(err,customer) =>{
			res.render('customer-edit',{
				data: customer[0]
			})
		})		
	})
}
controller.update = (req, res ) =>{
	const { id } = req.params;
	const updateCustomer = req.body;
	req.getConnection((err,conn) =>{
		conn.query('UPDATE customers set ? WHERE id = ?',[updateCustomer,id],(err,rows) =>{
			res.redirect('/');
		})
	})	
}

module.exports = controller;