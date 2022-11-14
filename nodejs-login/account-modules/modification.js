export async function createUser (res,req) {
	const user = req.body.username;
	console.log(user)
	const hashedPassword = await bcrypt.hash(req.body.password, 10);
	console.log(hashedPassword)
	const email = req.body.email;
	console.log(email)

	db.getConnection( async (err, connection) => {

		if (err) throw (err);
		const sqlSearch = "SELECT * FROM accounts WHERE username = ?";
		const search_query = mysql.format(sqlSearch,[user]);
		const sqlInsert = "INSERT INTO accounts VALUES (0,?,?,?)";
		const insert_query = mysql.format(sqlInsert,[user, hashedPassword, email]);

		await connection.query (search_query, async (err, result) => {

			if (err) throw (err)

			console.log("------> Search Results");
			console.log(result.length);

			if (result.length != 0) {
				connection.release();
				console.log("------> User already exists");
				res.send('username is already taken'); 
			} else {
   				await connection.query (insert_query, (err, result)=> {   
					connection.release()   ;
					if (err) throw (err);
   					console.log ("--------> Created new User");
   					console.log(result.insertId);
   					res.send('created new user')
  				});
 			}
		}); //end of connection.query()}) //end of db.getConnection()}) //end of app.post()
	})
}
