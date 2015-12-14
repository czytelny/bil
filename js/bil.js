//require('babel-polyfill');
import Pure from './vendor/pure.js'
import Vnerv from './vendor/vnerv'
import Loader from './modules/Loader'
import ConfigParser from './modules/ConfigParser'
import DirectivesFactory from './modules/DirectivesFactory'

const SINGLE_TYPE = "single";
const REPEATABLE_TYPE = "repeatable";

Loader.getConfiguration().then(function(configuration) {
    let contentFolderName = ConfigParser.getContentFolderName(configuration);

    Loader.getContent(contentFolderName).then((data) =>
            renderItems(data)
    );
});

function renderItems(rawData) {
    for (let i = 0; i < rawData.length; i++) {
        let directive = {};
        if (rawData[i].type === SINGLE_TYPE) {
            directive = DirectivesFactory.getSingleArticleDirective(rawData[i]);
        } else {
            directive = DirectivesFactory.getRepeatableDirective(rawData[i]);
        }
        renderArticle(rawData[i].data, rawData[i].name, directive);
    }
}

function renderArticle(data, articleName, directive) {
    let selector = '.' + articleName;
    Pure.$p(selector).render(data, directive);
    BilBus.send(articleName, 'rendered', {});
}
