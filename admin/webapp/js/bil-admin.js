angular.module('bil-admin', ['ngMaterial']);

angular.module('bil-admin').config(function($mdThemingProvider) {
// Extend the red theme with a few different colors
    var neonRedMap = $mdThemingProvider.extendPalette('red', {
        '500': '323232'
    });
    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('blue-grey', neonRedMap);
    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
});

angular.module('bil-admin').controller('MainController', ['$mdSidenav', function($mdSidenav) {
    var scope = this;
    this.save = function function_name() {
        scope.htmlPreview = quill.getHTML();
    };

    this.toggleSideNav = function(name) {
        $mdSidenav(name).toggle();
    };

    this.htmlPreview = "";
}]);
