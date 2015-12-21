angular.module('bil-admin').controller('newContentCtrl',
    ['newContentService', function(newContentService) {
        this.htmlPreview = "";

        this.save = angular.bind(this, function() {
            this.htmlPreview = newContentService.getEditorHandler().getHTML();
        });

        (function initEditor() {
            newContentService.initEditor();
        })();

    }]);