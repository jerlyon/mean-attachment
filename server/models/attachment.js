'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Post Schema
 */
var AttachmentSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  parent: {
    type: Schema.ObjectId,
    ref: 'Article',
    index: true
  }
});

/**
 * Validations
 */
AttachmentSchema.path('name').validate(function(message) {
  return message.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
//AttachmentSchema.statics.load = function(id, cb) {
  //this.findOne({
    //_id: id
  //}).populate('user', 'name username picture').exec(cb);
//};
AttachmentSchema.set('versionKey', false);
mongoose.model('Attachment', AttachmentSchema);
