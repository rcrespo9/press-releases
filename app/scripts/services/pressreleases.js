'use strict';

/**
 * @ngdoc service
 * @name equisolveApp.pressReleases
 * @description
 * # pressReleases
 * Factory in the equisolveApp.
 */
angular.module('equisolveApp')
  .factory('pressReleases', function ($http, $q) {
    // Service logic
    // ...

    var baseURL = 'http://www.stellarbiotechnologies.com/media/press-releases/json';

    // Public API here
    return {
      getList: function() {
        var deferred = $q.defer();

        $http({
           url: baseURL,
           method: 'GET',
           headers: {'Content-Type': 'application/json; charset=UTF-8'}      
        })
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(data) {
          deferred.reject(data);
        });

        return deferred.promise;

      }
    };
  });
