describe('HomeCtrl tests', function() {
  'use strict';
  var scope,
    controller;
  beforeEach(function() {
    module('vvida');
  });

  beforeEach(inject(function($injector) {
    var $controller = $injector.get('$controller');
    scope = $injector.get('$rootScope');
    controller = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('should define header_image', function() {
    expect(scope.header_image).toBeDefined();
    expect(typeof scope.header_image).toBe('string');
  });

  it('should define items', function() {
    expect(scope.items).toBeDefined();
    expect(typeof scope.items).toBe('object');
  });

  it('should define events', function() {
    expect(scope.events).toBeDefined();
    expect(typeof scope.events).toBe('object');
  });

  it('should define reviews', function() {
    expect(scope.reviews).toBeDefined();
    expect(typeof scope.reviews).toBe('object');
  });

});
