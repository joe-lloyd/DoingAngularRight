var app = angular.module("myApp", ['ui.bootstrap', 'ngAnimate']);

app.controller('navCtrl', ['$scope', function($scope){
	$scope.navbarCollapsed = true;
	$scope.menuItems = [{title: 'About'}, {title: 'Services'}, {title: 'Contact'}];
}]);