var app = angular.module('myAppRouter', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'app/components/home/partial-home.html',
            controllerUrl: 'app/components/home/homeCtrl'
            //seviceUrl: 'app/components/home/homeService'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('About', {
            url: '/About',
            templateUrl: 'app/components/about/about.html'      
        })

        // SERVICES PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('Services', {
            url: '/Services',
            templateUrl: 'app/components/services/services.html'      
        })

        // CONTACT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('Contact', {
            url: '/Contact',
            templateUrl: 'app/components/contact/contact.html'      
        });
        
});