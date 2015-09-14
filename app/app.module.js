var app = angular.module("myApp",   [
                                        'ui.bootstrap', 
                                        'ngAnimate', 
                                        'myAppRouter', 
                                        'myAppHomeCtrl',
                                        'myAppHomeService'
                                    ]);

app.controller('navCtrl', ['$scope', function($scope){
	$scope.menuItems = [{title: 'About'}, {title: 'Services'}, {title: 'Contact'}];
	
}]);