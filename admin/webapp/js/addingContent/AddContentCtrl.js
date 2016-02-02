import AddContentService from './AddContentService.js';

export default function AddContentCtrl(AddContentService) {
    "@ngInject"

            
    this.htmlPreview = "";
    
    this.save = function save() {
        this.htmlPreview = AddContentService.editorHandler.getHTML();                 
    }
    
    AddContentService.initEditor();    
}
