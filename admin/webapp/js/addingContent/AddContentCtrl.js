import newContentService from './AddContentService.js';

export default class newContentCtrl {
    constructor(newContentService) {
        this.newContentService = newContentService;

        this.htmlPreview = "";
        this.initEditor();
    }

    save() {
        angular.bind(this, function() {
            this.htmlPreview = newContentService.getEditorHandler().getHTML();
        });
    }

    initEditor() {
        this.newContentService.initEditor();
    }
}