(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('pomodoro', {
                url: '/',
                controller: placeholder, //not sure what to put here 
                templateUrl: '/templates/pomodoro.html'
        });
    };
    
    angular
        .module('Bloctime', ['ui.router', 'firebase'])
        .config(config);
})();
        
                
                