//require('babel-polyfill');
import Loader from './modules/Loader'
import ConfigParser from './modules/ConfigParser'

Loader.getConfiguration().then(function(configuration) {
    let contentFolderName = ConfigParser.getContentFolderName(configuration);
    let singleArticles = ConfigParser.getSingleArticleNames(configuration);
    let multipleArticles = ConfigParser.getMultipleArticlesList(configuration);
});
