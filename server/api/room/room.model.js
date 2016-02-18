'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var RoomSchema = new mongoose.Schema({
  submissions: [String],
  active: Boolean,
  background: String,
  top: String
});

export default mongoose.model('Room', RoomSchema);
