export default class AddContentService {
    constructor() {
        this.editorHandler = {};
        this.quilEdtiorConfig = {
            theme: 'snow',
            styles: {
                '.ql-editor': {
                    'font-family': "Serif",
                    'font-size': '1rem'
                },
                '.ql-editor a': {
                    'text-decoration': 'none'
                }
            }
        };
    }

    initEditor() {
        this.editorHandler = new Quill('.editor', this.quilEdtiorConfig);
        this.editorHandler.addModule('toolbar', {
            container: '.quill-toolbar'
        });
    }

    getEditorHandler() {
        return this.editorHandler;
    }
}
