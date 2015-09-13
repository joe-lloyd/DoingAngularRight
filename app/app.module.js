var app = angular.module("myApp", ['ui.bootstrap', 'ngAnimate', 'ui.router']);

app.controller('navCtrl', ['$scope', function($scope){
	$scope.menuItems = [{title: 'About'}, {title: 'Services'}, {title: 'Contact'}];
}]);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            //templateUrl: 'partial-home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});