'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;
var Attachement = new Module('attachment');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Attachment.register(function(app, auth, database, upload) {

  Attachment.routes(app, auth, database);


  //We are adding a link to the main menu for all authenticated users
  Attachment.menus.add({
    title: 'attachment help page',
    link: 'attachment help page',
    roles: ['authenticated'],
    menu: 'main'
  });

  return Attachment;
});
