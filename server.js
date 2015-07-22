var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('groceries', ['lists', 'items']);
var bodyParser = require('body-parser');

var fs = require('fs');
var nodemailer = require('nodemailer');

var path = require('path');
var templatesDir = path.resolve(__dirname, '..', 'views/mailer');
var emailTemplates = require('email-templates');

var ejs = require('ejs');

ejs.open = '{{';
ejs.close = '}}';

app.set('views', path.join(__dirname, 'views/mailer'));
app.set('view engine', 'ejs');


app.use(express.static(__dirname + "/dist"));

app.use(bodyParser.json());
//app.use(bodyParser({strict: false}));

// BEGIN Items routes

app.get('/items', function (req, res) {		
	db.items.find(function (err, docs) {
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
		update: {$set: {name:req.body.name, price:req.body.price}},
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
	db.lists.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name:req.body.name, use_count:req.body.use_count, items:req.body.items}},
		new: true}, function (err, doc) {
			res.json(doc);		
		}
	);	
});

app.get('/shoppinglists', function (req, res) {		
	db.lists.find(function (err, docs) {
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

//console.log("Server running on port 9000");



var CustomMail = function (to, subject, template, content){
	this.to = to;
	this.subject = subject;
	this.template = template;
	this.content = content;
};

CustomMail.prototype.send = function (callback){
	//Get email template path
	//var template = templatesDir + '/send-items/' +this.template+'.ejs';
	var template = process.cwd() + '/dist/views/' +this.template+'.ejs';

	var content = this.content;
	var to = this.to;
	var subject = this.subject;

	// Use fileSystem module to read template file
	fs.readFile(template, 'utf8', function (err, file){
		if(err) return callback (err);

		var html = ejs.render(file, content);		

		var mailOptions = {
			from: 'no-reply@thedanielweber.com',
			to: to,
			subject: subject,
			html: html
		};

		transporter.sendMail(mailOptions, function (err, info){
			// If a problem occurs, return callback with the error
			if(err) return callback(err);
			console.log(info);
			callback();
		});
		
	});
};

var transporter = nodemailer.createTransport();

app.post('/senditems', function (req, res) {  

	var contact = req.body;  
	console.log("Contact: ", contact);

	contact.test = "TEST!";
	contact.list2 = [
		{name: 'Item1', price: '2.99'},
		{name: 'Item2', price: '3.99'}
	];

	var customMail = new CustomMail(contact.email, 'You have been sent a shopping list!', 'html', contact);

	// And send the email
	customMail.send(function (err){
		// if an error occurs, render index page with the error message
		if(err) 
			console.log(err);			
	});

	return res.send({ success : true, message : 'Email succeeded' });	
});