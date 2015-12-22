import AddContentService from './AddContentService.js';

export default class AddContentCtrl {
    constructor(AddContentService) {
        this.AddContentService = AddContentService;
        this.htmlPreview = "";
        this.initEditor();
    }

    save() {
        angular.bind(this, function() {
            this.htmlPreview = AddContentService.getEditorHandler().getHTML();
        });
    }

    initEditor() {
        this.AddContentService.initEditor();
    }
}