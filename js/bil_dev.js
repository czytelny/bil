"use strict";

(function(RequestModule, DirectivesFactory, ConfigurationHandler, CONSTANTS) {

    ////////////////
    //Entry point
    ////////////////
    RequestModule.sendGet(CONSTANTS.URLS.CONFIG, fetchContentData);


    function fetchContentData(configurationData) {
        ConfigurationHandler.setConfData(configurationData);

        var contentFolder = ConfigurationHandler.getContentFolder();
        var singleArticleList = ConfigurationHandler.getSinglesList();
        var multipleArticlesList = ConfigurationHandler.getMultipleArticlesList();

        (function fetchSingleArticlesData() {
            var curriedSingleArticleRender = function(articleName) {
                return function(dataToRender) {
                    renderSingleArticle(dataToRender, articleName)
                }
            };

            for (var i = 0; i < singleArticleList.length; i++) {
                var url = contentFolder + "/" + singleArticleList[i] + ".json";
                RequestModule.sendGet(url, curriedSingleArticleRender(singleArticleList[i]));
            }
        })();

        (function fetchRepeatableData() {

            var curriedRepeatableRender = function(articleName) {
                return function(dataToRender) {
                    renderRepeatableItems(dataToRender, articleName);
                }
            };

            for (var i = 0; i < multipleArticlesList.length; i++) {
                var url = contentFolder + "/" + multipleArticlesList[i] + ".json";
                RequestModule.sendGet(url, curriedRepeatableRender(multipleArticlesList[i]));
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

