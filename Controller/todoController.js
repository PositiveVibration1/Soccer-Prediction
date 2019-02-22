
exports= module.exports={};

exports.getHomepage = function (app) {
	//creating a route using express
	app.get('/Contact', function(req,res){
 	res.send('this is the contact page');
 });
 
 app.get('/', function(req,res){
 	res.send('this is the homepage');
 });
 	//sending html file using send File function
 app.get('/index.html', function(req,res){
 	res.sendFile('file:///C:/Users/POSITIVE%20VIBES/Desktop/Desktop/swiz/views/index.html');
 });

 app.get('/form', function(req,res){
 	res.render('form');
 });
 app.post('/process',function(req,res){
 	console.log('form'+req.query.form);
 	console.log('form'+req.body.name);
 	console.log('form'+req.body.email);
 });
}