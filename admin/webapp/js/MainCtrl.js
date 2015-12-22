export default class MainController {
    /*@ngInject*/
    constructor($mdSidenav) {
        this.toggleSideNav = function(name) {
            $mdSidenav(name).toggle();
        };
    }
}