var fs = require('fs');
var path = require('path');
var Models = require('../models');
//handles all requests for our image app
module.exports = {
	index: function(req, res) {
        var viewModel = Models.Comment.find(function (err, comments) {
            res.render('comment', {
            comments: comments
        });
    });
    },
	create: function(req, res) {
        res.send('The image:create POST controller');
	},
	like: function(req, res) {
		res.send('The image:like POST controller');
	},
	comment: function(req, res) {
        //create new model to save into db
        var newComment = new Models.Comment({
            name: req.body.nameOP,
            comment: req.body.commentSection,
            timestamp: Date.now()
        });

        //go in and add Anonymous to old posts with no name and remove old posts with no comment
        if (Comment.name == "") Comment.name = "Anonymous";
        if (Comment.comment == "") comments.remove(comments);
        
        //save to db as anonymous if no name is entered and do nothing if no comment is entered
        if (newComment.comment == "") {
            console.log("No comment left...");
        } else {
            if (newComment.name == ""){
                newComment.name = "Anonymous";
                newComment.save(function(err, Comment) {
                    console.log('Successfully inserted comment: by ' + req.body.nameOP);
                    res.redirect('/comment');
                });
            } else {
                newComment.save(function(err, Comment) {
                    console.log('Successfully inserted comment: by ' + req.body.nameOP);
                    res.redirect('/comment');
                });
            }
        }
        
	}
};