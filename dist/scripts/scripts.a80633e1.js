"use strict";angular.module("equisolveApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","infinite-scroll","ks.ngScrollRepeat"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",resolve:{getNews:["pressReleases",function(a){return a.getList().then(function(a){return a.news})}]}}).otherwise({redirectTo:"/"})}]),angular.module("equisolveApp").controller("MainCtrl",["$scope","getNews",function(a,b){a.pressReleases=b}]),angular.module("equisolveApp").factory("pressReleases",["$http","$q",function(a,b){var c="http://www.stellarbiotechnologies.com/media/press-releases/json";return{getList:function(){var d=b.defer();return a({url:c,method:"GET",headers:{"Content-Type":"application/json; charset=UTF-8"}}).success(function(a){d.resolve(a)}).error(function(a){d.reject(a)}),d.promise}}}]);