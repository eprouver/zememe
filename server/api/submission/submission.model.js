'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var SubmissionSchema = new mongoose.Schema({
  background: String,
  top: String,
  bottom: String,
  room: String,
  active: Boolean
});

export default mongoose.model('Submission', SubmissionSchema);
