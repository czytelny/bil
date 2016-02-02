import Routes from './RoutesConfig.js'
import ThemeConfig from './ThemeConfig.js'
import Controllers from './ControllersConfig.js'
import AddContentService from './addingContent/AddContentService.js';

angular.module('bil-admin', [Controllers.name, 'ngMaterial', 'ngRoute'])
    .config(Routes)
    .config(ThemeConfig)
    .service('AddContentService', AddContentService);

