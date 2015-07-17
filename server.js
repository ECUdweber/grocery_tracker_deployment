var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('groceries', ['lists', 'items']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/dist"));
app.use(bodyParser.json());

// BEGIN Items routes

app.get('/items', function (req, res) {		
	db.items.find(function (err, docs) {
		console.log("Docs: ", docs);
		res.json(docs);
	});   
});

app.get('/items/:id', function (req, res) {		
	var id = req.params.id; 
	db.items.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});  
});

app.put('/items/:id', function (req, res) {		
	var id = req.params.id; 
	
	db.items.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name:req.body.name, items:req.body.items}},
		new: true}, function (err, doc) {
			res.json(doc);		
		}
	);	
});

app.post('/items', function (req, res) {   
	db.items.insert(req.body, function (err, doc) {
		res.json(doc);
	});		
});

app.delete('/items/:id', function (req, res) { 
	var id = req.params.id; 
	db.items.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});	
});

// END Items routes



// BEGIN Shopping Lists routes

app.get('/shoppinglists/:id', function (req, res) {		
	var id = req.params.id; 
	db.lists.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});  
});

app.put('/shoppinglists/:id', function (req, res) {		
	var id = req.params.id; 
	console.log("Will update list: ", req.body);
	
	db.lists.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name:req.body.name, items:req.body.items}},
		new: true}, function (err, doc) {
			res.json(doc);		
		}
	);
	
});

app.get('/shoppinglists', function (req, res) {		
	db.lists.find(function (err, docs) {
		console.log("Docs: ", docs);
		res.json(docs);
	});   
});

app.delete('/shoppinglists/:id', function (req, res) { 
	var id = req.params.id; 
	db.lists.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});	
});

app.post('/shoppinglists', function (req, res) {   
	db.lists.insert(req.body, function (err, doc) {
		res.json(doc);
	});		
});

// END Shopping Lists routes

app.listen(9000);

console.log("Server running on port 9000");