var express = require('express');
var mongo = require('mongodb').MongoClient;
var engines = require('consolidate');

var app = express();

app.engine('html',engines.nunjucks);
app.set('view engine','html');
app.set('views',__dirname + '/views');

mongo.connect('mongodb://localhost:27017',function(err,db){
    
    if(err){
        console.log('Database not connected');
    }
    
    else{
        
        app.get('/',function(req,res){

            db.collection('movie').find().toArray(function(err,docs){
                //res.send('done');
                res.render('index',{'movies' : docs});
              //  res.render('index',{"movies":docs});
            });
            
        });
        
    }
    
    app.use(function(req,res){
        res.sendStatus(404);
    })
})

app.listen(1337,function(){
    console.log('Listening to 1337');
})