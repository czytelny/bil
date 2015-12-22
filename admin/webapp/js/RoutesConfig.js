export default function($routeProvider) {
    $routeProvider
        .when('/newContent', {
            templateUrl: 'partials/newContent.html',
            controller: 'newContentCtrl as newContentCtrl'
        })
        .when('/listContent', {
            templateUrl: 'partials/listContent.html',
            controller: 'listContentCtrl'
        })
        .otherwise({
            redirectTo: '/newContent'
        });
}
