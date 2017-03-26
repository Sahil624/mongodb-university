var express = require('express');
var app = express();
var engine =require('consolidate');

app.engine('html',engine.nunjucks);
app.set('view engine','html');
app.set('views',__dirname + '/views');

app.get('/',function(req,res){
    res.render('index',{'name' : 'Templates'})
});

app.listen(1337,function(){
    console.log('Listening to 1337');
});