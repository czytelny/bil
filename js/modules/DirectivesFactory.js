const contentConfigName = ".data";
const PREFIX = ".b-";
const REPEATABLE_ITEM = ".bil-item";

var getRepeatableDirective = function(data, articleName) {
    var repeatableDirective = {};
    repeatableDirective[REPEATABLE_ITEM] = {};

    var repeatString = 'element<-' + articleName + contentConfigName;
    var requiredFields = data[articleName].options['requiredFields'];
    repeatableDirective[REPEATABLE_ITEM][repeatString] = {};

    for (var i = 0; i < requiredFields.length; i++) {
        if (!repeatableDirective[REPEATABLE_ITEM][repeatString]) {
            repeatableDirective[REPEATABLE_ITEM][repeatString] = {};
        }
        var currentTagName = requiredFields[i];

        repeatableDirective[REPEATABLE_ITEM][repeatString][PREFIX + currentTagName] = 'element.' + currentTagName;
    }

    return repeatableDirective;
};

var getSingleArticleDirective = function(data, articleName) {
    var directive = {};
    var requiredFields = data[articleName].options['requiredFields'];
    for (var i = 0; i < requiredFields.length; i++) {
        var currentTagName = requiredFields[i];
        directive[PREFIX + currentTagName] = articleName + contentConfigName + '.' + currentTagName;
    }
    return directive;
};

var api = {
    getRepeatableDirective: getRepeatableDirective,
    getSingleArticleDirective: getSingleArticleDirective
};

export default api;

