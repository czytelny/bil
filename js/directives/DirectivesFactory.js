"use strict";

BIL.DirectivesFactory = (function(CONSTANTS) {
    var contentConfigName = ".data";
    var optionsConfigName = "options";
    var PREFIX = ".bil-";

    var getRepeatableDirective = function(data, articleName) {
        var repeatableDirective = {};
        var itemTag = CONSTANTS.CSS.REPEATABLE_ITEM;
        repeatableDirective[itemTag] = {};

        var repeatString = 'element<-' + articleName + contentConfigName;
        var requiredFields = data[articleName].options['requiredFields'];
        repeatableDirective[itemTag][repeatString] = {};

        for (var i = 0; i < requiredFields.length; i++) {
            if (!repeatableDirective[itemTag][repeatString]) {
                repeatableDirective[itemTag][repeatString] = {};
            }
            var currentTagName = requiredFields[i];

            repeatableDirective[itemTag][repeatString][PREFIX + currentTagName] = 'element.' + currentTagName;
        }

        return repeatableDirective;
    };

    var getSingleArticleDirective = function(data, articleName) {
        var directive = {};
        var requiredFields = data[articleName].options['requiredFields'];
        for (var i = 0 ; i <requiredFields.length; i++){
            var currentTagName = requiredFields[i];
            directive[PREFIX+currentTagName] = articleName + contentConfigName + '.' + currentTagName;
        }
        return directive;
    };

    return {
        getRepeatableDirective: getRepeatableDirective,
        getSingleArticleDirective: getSingleArticleDirective
    }
})(BIL.CONSTANTS);
