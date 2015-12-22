import Routes from './RoutesConfig.js'
import ThemeConfig from './ThemeConfig.js'
import MainCtrl from './MainCtrl.js';
import AddContentCtrl from './addingContent/AddContentCtrl.js';
import AddContentService from './addingContent/AddContentService.js';
import ListContentCtrl from './listingContent/ListContentCtrl.js';

angular.module('bil-admin', ['ngMaterial', 'ngRoute'])
    .config(Routes)
    .config(ThemeConfig)
    .controller('MainCtrl', MainCtrl)
    .controller('AddContentCtrl', AddContentCtrl)
    .service('AddContentService', AddContentService);
