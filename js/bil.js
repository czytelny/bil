//require('babel-polyfill');
import Pure from './vendor/pure.js'
import Loader from './modules/Loader'
import ConfigParser from './modules/ConfigParser'
import DirectivesFactory from './modules/DirectivesFactory'

Loader.getConfiguration().then(function(configuration) {
    let contentFolderName = ConfigParser.getContentFolderName(configuration);
    let singleArticlesNames = ConfigParser.getSingleArticleNames(configuration);
    let repeatableArticlesNames = ConfigParser.getRepeatableArticlesNames(configuration);

    for (let i = 0; i < singleArticlesNames.length; i++) {
        let articleName = singleArticlesNames[i];
        Loader.getContent(contentFolderName, articleName).then((data)=>
                renderSingleArticle(data, articleName)
        );
    }

    for (let i = 0; i < repeatableArticlesNames.length; i++) {
        let articleName = repeatableArticlesNames[i];
        Loader.getContent(contentFolderName, articleName).then((data) =>
                renderRepeatableItems(data, articleName)
        );
    }
});

function renderSingleArticle(data, articleName) {
    let selector = '.' + articleName;
    let directive = DirectivesFactory.getSingleArticleDirective(data, articleName);
    Pure.$p(selector).render(data, directive);
}

function renderRepeatableItems(data, articleName) {
    let selector = '.' + articleName;
    let directive = DirectivesFactory.getRepeatableDirective(data, articleName);
    Pure.$p(selector).render(data, directive);
}
