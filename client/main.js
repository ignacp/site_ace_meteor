import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Accounts config
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

/* Comments config
Comments.ui.config({
   template: 'bootstrap' // or ionic, semantic-ui
});
*/