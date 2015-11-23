const PREFIX = ".b-";
const REPEATABLE_ITEM = ".bil-item";

var getRepeatableDirective = function(data) {
    let repeatableDirective = {};
    repeatableDirective[REPEATABLE_ITEM] = {};

    var repeatString = 'element<-';
    var requiredFields = data.options['requiredFields'];
    repeatableDirective[REPEATABLE_ITEM][repeatString] = {};

    for (let i = 0; i < requiredFields.length; i++) {
        if (!repeatableDirective[REPEATABLE_ITEM][repeatString]) {
            repeatableDirective[REPEATABLE_ITEM][repeatString] = {};
        }
        let currentTagName = requiredFields[i];
        repeatableDirective[REPEATABLE_ITEM][repeatString][PREFIX + currentTagName] = 'element.' + currentTagName;
    }
    return repeatableDirective;
};

var getSingleArticleDirective = function(data) {
    var directive = {};
    var requiredFields = data.options['requiredFields'];
    for (let i = 0; i < requiredFields.length; i++) {
        let currentTagName = requiredFields[i];
        directive[PREFIX + currentTagName] = currentTagName;
    }
    return directive;
};

var api = {
    getRepeatableDirective: getRepeatableDirective,
    getSingleArticleDirective: getSingleArticleDirective
};

export default api;

