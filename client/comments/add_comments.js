// Add a comment to DB
Template.add_comments.events({

		"submit .js-save-comment-form": function (event) {

    var comment = event.target.comment.value;
    var website_id = this.id;

    console.log("Comment: " + comment);

    if (comment == "") {
      alert("Should fill the comment field.");
    }
    else {
      if (Meteor.user()) {
        Comments.insert({
          websiteId: website_id,
          comment: comment,
          createdOn: new Date(),
          createBy: Meteor.user().username
        });
      }
      else {
        alert("For adding a comment should login.");
      }
    }

    return false;// stop the form submit from reloading the page

		}
})