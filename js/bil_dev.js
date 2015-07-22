"use strict";

(function(RequestModule, DirectivesFactory, ConfigurationHandler, CONSTANTS) {
    RequestModule.sendGet(CONSTANTS.URLS.CONFIG, fetchContentData);

    //Entry point
    function fetchContentData(configurationData) {
        var singlesList = ConfigurationHandler.getSinglesList(configurationData);
        var repeatableList = ConfigurationHandler.getRepeatableList(configurationData);
        var contentFolder = ConfigurationHandler.getContentFolder(configurationData);

        (function fetchSingleArticlesData() {
            var curriedSingleArticleRender = function(articleName) {
                return function(dataToRender) {
                    renderSingleArticle(dataToRender, articleName)
                }
            };

            for (var i = 0; i < singlesList.length; i++) {
                var url = contentFolder + "/" + singlesList[i] + ".json";
                RequestModule.sendGet(url, curriedSingleArticleRender(singlesList[i]));
            }
        })();

        (function fetchRepeatableData() {

            var curriedRepeatableRender = function(articleName) {
                return function(dataToRender) {
                    renderRepeatableItems(dataToRender, articleName);
                }
            };

            for (var i = 0; i < repeatableList.length; i++) {
                var url = contentFolder + "/" + repeatableList[i] + ".json";
                RequestModule.sendGet(url, curriedRepeatableRender(repeatableList[i]));
            }
        })();
    }

    function renderSingleArticle(data, articleName) {
        var selector = getSingleArticleSelector(articleName);
        var directive = DirectivesFactory.getSingleArticleDirective(data, articleName);
        $p(selector).render(data, directive);
    }

    function renderRepeatableItems(data, articleName) {
        var selector = getRepeatableSelector(articleName);
        var directive = DirectivesFactory.getRepeatableDirective(data, articleName);
        $p(selector).render(data, directive);
    }

    function getRepeatableSelector(articleName) {
        return '.' + articleName;
    }

    function getSingleArticleSelector(articleName) {
        return '.' + articleName;
    }

})(BIL.RequestModule,
    BIL.DirectivesFactory,
    BIL.ConfigurationHandler,
    BIL.CONSTANTS
    );

