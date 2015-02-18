//pull in our controllers
var home = require('../controllers/home');
var comment = require('../controllers/comment');

module.exports.initialize = function(app, router) {
	//****handle browser requests for content (index and comment page)
	app.get('/', home.index);
	app.get('/comment', comment.index);
	// //*****handle post routes (like the form submission)
	app.post('/comment', comment.comment);
	app.use('/', router);
};