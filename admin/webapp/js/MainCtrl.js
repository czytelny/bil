export default class MainController {
    constructor($mdSidenav) {
        this.toggleSideNav = function(name) {
            $mdSidenav(name).toggle();
        };
    }
}