'use strict';

describe('Service: pressReleases', function () {

  // load the service's module
  beforeEach(module('equisolveApp'));

  // instantiate service
  var pressReleases;
  beforeEach(inject(function (_pressReleases_) {
    pressReleases = _pressReleases_;
  }));

  it('should do something', function () {
    expect(!!pressReleases).toBe(true);
  });

});
