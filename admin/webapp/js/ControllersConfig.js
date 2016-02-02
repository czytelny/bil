import MainCtrl from './MainCtrl.js';
import AddContentCtrl from './addingContent/AddContentCtrl.js';
import ListContentCtrl from './listingContent/ListContentCtrl.js';

var controllersModule = angular.module('bil-admin.controllers', [])
	.controller('MainCtrl', MainCtrl)
	.controller('AddContentCtrl', AddContentCtrl)
	.controller('ListContentCtrl', ListContentCtrl);

export default controllersModule;