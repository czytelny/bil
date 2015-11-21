const GENERAL_SETTINGS = "generalSettings";
const CONTENT_FOLDER = "contentFolder";
const DATA = "data";
const APPLICATION_SETTINGS = "applicationSettings";
const SINGLE_ARTICLES = "singleArticles";
const MULTIPLE_ARTICLES = "multipleArticles";

const PREFIX = "bil-";

var isArray = (o) => Object.prototype.toString.call(o) === '[object Array]';

var appendPrefix = (prefix, item) => item = prefix+item;

function getArticleNames(type, configuration) {
    let articlesList = configuration[APPLICATION_SETTINGS][type];
    if (isArray(articlesList)) {
        for (let i = 0; i < articlesList.length; i++) {
            appendPrefix(PREFIX, articlesList[i]);
        }
        return articlesList;
    }
    new Error("Single list need to be an array");
}

var api = {
    getContentFolderName: configuration => configuration["generalSettings"]["contentFolder"],
    getSingleArticleNames: (configuration) => getArticleNames(SINGLE_ARTICLES, configuration),
    getMultipleArticlesList: (configuration) => getArticleNames(MULTIPLE_ARTICLES, configuration)
};

export default api;