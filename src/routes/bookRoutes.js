var express = require('express');

var bookrouter = express.Router();



var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
        },
    {
        title: 'Les Misérables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        read: false
        },
    {
        title: 'The Time Machine',
        genre: 'Science Fiction',
        author: 'H. G. Wells',
        read: false
        },
    {
        title: 'A Journey into the Center of the Earth',
        genre: 'Science Fiction',
        author: 'Jules Verne',
        read: false
        },
    {
        title: 'The Dark World',
        genre: 'Fantasy',
        author: 'Henry Kuttner',
        read: false
        },
    {
        title: 'The Wind in the Willows',
        genre: 'Fantasy',
        author: 'Kenneth Grahame',
        read: false
        },
    {
        title: 'Life On The Mississippi',
        genre: 'History',
        author: 'Mark Twain',
        read: false
        },
    {
        title: 'Childhood',
        genre: 'Biography',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
        }
    ];

var router= function(nav){
    
    bookrouter.route('')
    .get(function(req,res){
    res.render('books',{title:"Books page",list:nav,
                       booklists:books});
});
bookrouter.route('/singlebook')
    .get(function(req,res){
    res.send('hello single book');
});

bookrouter.route('/:id')
  .get(function(req,res){
    
    var id= req.params.id;
    res.render('book',{title:"single Book page",list:nav,
                       booklists:books[id]});
});
    
    return bookrouter;
}






module.exports = router;