// Routing

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('navbar', {
    to: "header"
  });
  this.render('welcome', {
    to: "main"
  });
});

Router.route('/website_detail/:_id', function () {
  this.render('navbar', {
    to: "header"
  });
  this.render('website_detail', {
    to: "main",
    data: function () {
      return Websites.findOne({ _id: this.params._id });
    }
  });
});