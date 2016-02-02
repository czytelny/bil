export default function($routeProvider) {
    "ngInject";
    $routeProvider
        .when('/addContent', {
            templateUrl: 'partials/addContent.html',
            controller: 'AddContentCtrl as AddContentCtrl'
        })
        .when('/listContent', {
            templateUrl: 'partials/listContent.html',
            controller: 'ListContentCtrl as ListContentCtrl'
        })
        .otherwise({
            redirectTo: '/addContent'
        });
}
