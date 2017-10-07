var pool = require('../util/dbconnection');

var state = {

	addState:function(inputData, cb){
		var sql = "insert into state(STATENAME, CREATIONDATE, UPDATIONDATE)values('"+inputData.sname+"','"+inputData.cdate+"','"+inputData.udate+"')";
		console.log(sql);
		pool.getConnection(function (error, connection){
			if (error) {
				console.log('connection error'+error);
			}
			else{
				connection.query(sql, function(error, result){
					if (error) {
						cb(error, null);
					}
					else{
						cb(null, result);
					}
				});
			}
		});
	}
}

module.exports = state;
