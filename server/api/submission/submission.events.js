/**
 * Submission model events
 */

'use strict';

import {EventEmitter} from 'events';
var Submission = require('./submission.model');
var SubmissionEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SubmissionEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Submission.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SubmissionEvents.emit(event + ':' + doc._id, doc);
    SubmissionEvents.emit(event, doc);
  }
}

export default SubmissionEvents;
