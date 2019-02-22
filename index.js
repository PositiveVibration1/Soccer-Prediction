var express= require('express');
var http=require('http');
var path=require('path');
var app= express();
var cons=require('consolidate');
var todoController=require('./Controller/todoController.js');
app.use('/index.css',express.static(__dirname+'/public/assets/css'));
app.use('/jcarousel.basic.css',express.static(__dirname+'/public/assets/css'));
app.use('/jquery.js',express.static(__dirname+'/public/assets/js'));
app.use('/bootstrapValidator.js',express.static(__dirname+'/public/assets/js'));
app.use('/jquery-1.10.2.min.js',express.static(__dirname+'/public/assets/js'));






//app.engine('jade', require('jade').__express);
app.get('/', function (req, res){

	res.sendFile('index.html',{root:path.join(__dirname,'./views')});

})


//app.set(view engine, ejs);
app.use(express.static('public'));
//app.use('/bootstrap-3.3.7',express.static(_dirname + '/public/bootstrap-3.3.7'));
todoController.getHomepage(app);
app.listen(3000);
console.log('app listenning to me at this point 127.0.0.1:3000 ');
