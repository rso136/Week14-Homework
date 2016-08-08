var mysql = require('mysql');

var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "orangegit12",
        database: "burgers_db"
    },

    jawsDB: {
        port: 3306,
        host: 'gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'e45xumklps1v6wwp',
        password: "q6aah0uz6okkefd0",
        database: "vqxkpdc82ckq29lm" 
    }
}

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
