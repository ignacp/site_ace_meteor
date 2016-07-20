Template.website_item.events({
		"click .js-upvote": function (event) {
    // example of how you can access the id for the website in the database
    // (this is the data context for the template)
    var website_id = this._id;
    console.log("Up voting website with id " + website_id);
    // put the code in here to add a vote to a website!
    var site = Websites.findOne({ _id: website_id });
    if (site) {
      var vote = site.vote;
      console.log("vote count:" + vote);
      vote += 1;

      Websites.update({ _id: website_id },
        { $set: { vote: vote } });

      console.log("vote count after of the increment :" + vote);
    }

    return false;// prevent the button from reloading the page
		},
		"click .js-downvote": function (event) {

    // example of how you can access the id for the website in the database
    // (this is the data context for the template)
    var website_id = this._id;
    console.log("Down voting website with id " + website_id);

    // put the code in here to remove a vote from a website!
    var site = Websites.findOne({ _id: website_id });
    if (site) {
      var vote = site.vote;
      console.log("vote count:" + vote);

      if (vote > 0) {
        vote -= 1;

        Websites.update({ _id: website_id },
          { $set: { vote: vote } });

        console.log("vote count after of the decrement :" + vote);
      }
    }

    return false;// prevent the button from reloading the page
		}
});