'use strict';

/**
 * @ngdoc overview
 * @name equisolveApp
 * @description
 * # equisolveApp
 *
 * Main module of the application.
 */
angular
  .module('equisolveApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'infinite-scroll',
    'ks.ngScrollRepeat'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          getNews: function(pressReleases) {
            return pressReleases.getList().then(function(results) {
              return results.news;
            });
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
