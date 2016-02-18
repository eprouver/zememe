'use strict';

describe('Service: memes', function () {

  // load the service's module
  beforeEach(module('memesApp'));

  // instantiate service
  var memes;
  beforeEach(inject(function (_memes_) {
    memes = _memes_;
  }));

  it('should do something', function () {
    expect(!!memes).toBe(true);
  });

});
