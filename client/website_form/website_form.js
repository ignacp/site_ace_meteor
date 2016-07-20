Template.website_form.events({
		"click .js-toggle-website-form": function (event) {
    $("#website_form").toggle('slow');
		},
		"submit .js-save-website-form": function (event) {

    // here is an example of how to get the url out of the form:
    var url = event.target.url.value;
    var title = event.target.title.value;
    var description = event.target.description.value;

    console.log("url: " + url + ",  title:" + title + " and description: " + description);

    //  put your website saving code in here!
    if ((url == "") || (title == "") || (description == "")) {
      alert("Should fill all fields (url, title and description).");
    }
    else {
      if (Meteor.user()) {
        Websites.insert({
          title: title,
          url: url,
          description: description,
          createdOn: new Date(),
          createBy: Meteor.user()._id,
          vote: 0
        });
      }
      else {
        alert("For adding a website should login.");
      }
    }

    return false;// stop the form submit from reloading the page

		}
});