var express = require('express');
var app = express();
var port = 5000;



var nav = [
        {
            Text:'Books',
            link:'/books'
        },{
            Text:'Authors',
            link:'/authors'
        },{
            Text:'Notes',
            link:'/Notes'
        },{
            Text:'New note',
            link:'/newnote'
        }
        
    ];

var bookrouter= require('./src/routes/bookRoutes')(nav);

app.use(express.static('public'));
app.use(express.static('src/views'));
app.set('views','./src/views');
app.set('view engine','ejs');

app.use('/books',bookrouter);
app.get('/', function (req, res) {
    res.render('index',{title:"Home page",list:[
        {
            Text:'Books',
            link:'/books'
        },{
            Text:'Authors',
            link:'/authors'
        },{
            Text:'Notes',
            link:'/Notes'
        },{
            Text:'New note',
            link:'/newnote'
        }
        
    ]});
});
app.listen(port, function (err) {
    console.log("running on port-" + port);
});