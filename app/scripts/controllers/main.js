'use strict';

/**
 * @ngdoc function
 * @name equisolveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the equisolveApp
 */
angular.module('equisolveApp')
  .controller('MainCtrl', function ($scope, pressReleases) {
  	pressReleases.getList().then(function(results) {
  		$scope.pressReleases = results.news;
  		console.log(results);
  	});
  });
