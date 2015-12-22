export default function($routeProvider) {
    $routeProvider
        .when('/addContent', {
            templateUrl: 'partials/addContent.html',
            controller: 'AddContentCtrl as AddContentCtrl'
        })
        .when('/listContent', {
            templateUrl: 'partials/listContent.html',
            controller: 'listContentCtrl'
        })
        .otherwise({
            redirectTo: '/addContent'
        });
}
