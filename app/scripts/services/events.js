angular.module('vvida.services')
  .factory('Events', ['$resource', '$http', function($resource, $http) {
    var obj = $resource('/api/events/:id', {
      id: '@id',
      limit: '@limit',
      page: '@page',
      filter: '@filter'
    }, {
      update: {
        // this method issues a PUT request
        method: 'PUT'
      }
    }, {
      stripTrailingSlashes: false
    });

    obj.popularEvents = function(cb) {
      $http.get('/api/events/popular').success(function(res) {
        cb(null, res);
      }).error(function(err) {
        cb(err);
      });
    };

    return obj;
  }]);
