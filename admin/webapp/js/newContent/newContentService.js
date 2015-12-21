angular.module('bil-admin').factory('newContentService', [function() {
    var editorHandler = {};

    var quilEdtiorConfig = {
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

    var initEditor = function initEditor() {
        editorHandler = new Quill('.editor', quilEdtiorConfig);
        editorHandler.addModule('toolbar', {
            container: '.quill-toolbar'
        });
    };

    var getEditorHandler = function() {
        return editorHandler;
    };

    return {
        initEditor: initEditor,
        getEditorHandler: getEditorHandler
    }
}]);
