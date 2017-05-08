export function routerConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        })
        .state('authentication', {
            url: '/authentication',
            templateUrl: 'app/authentication/authentication.html',
            controller: 'AuthenticationController',
            controllerAs: 'authentication'
        });

    $urlRouterProvider.otherwise('/');
}
