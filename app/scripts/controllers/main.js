'use strict';

/**
 * @ngdoc function
 * @name equisolveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the equisolveApp
 */
angular.module('equisolveApp')
  .controller('MainCtrl', function ($scope, getNews) {
  	$scope.pressReleases = getNews;
  	// pressReleases.getList().then(function(results) {
  	// 	$scope.pressReleases = results.news;
  	// });
  });
