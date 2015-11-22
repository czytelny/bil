//require('babel-polyfill');
import Loader from './modules/Loader'
import ConfigParser from './modules/ConfigParser'

Loader.getConfiguration().then(function(configuration) {
    let contentFolderName = ConfigParser.getContentFolderName(configuration);
    let singleArticlesNames = ConfigParser.getSingleArticleNames(configuration);
    let multipleArticlesNames = ConfigParser.getMultipleArticlesNames(configuration);

    for (let i = 0; i < singleArticlesNames.length; i++) {
        Loader.getContent(contentFolderName, singleArticlesNames[i]);
    }

    for (let i = 0; i < multipleArticlesNames.length; i++) {
        Loader.getContent(contentFolderName, multipleArticlesNames[i]);
    }
});
