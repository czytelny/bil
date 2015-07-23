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

        var curriedSingleArticleRender = function(articleName) {
            return function(dataToRender) {
                renderSingleArticle(dataToRender, articleName)
            }
        };
        var curriedRepeatableRender = function(articleName) {
            return function(dataToRender) {
                renderRepeatableItems(dataToRender, articleName);
            }
        };

        sendRequestForContent(singleArticleList, curriedSingleArticleRender);
        sendRequestForContent(multipleArticlesList, curriedRepeatableRender);

        function sendRequestForContent(list, callback) {
            for (var i = 0; i < list.length; i++) {
                var url = contentFolder + "/" + list[i] + ".json";
                RequestModule.sendGet(url, callback(list[i]));
            }
        }
    }

    function renderSingleArticle(data, articleName) {
        var selector = '.' + articleName;
        var directive = DirectivesFactory.getSingleArticleDirective(data, articleName);
        $p(selector).render(data, directive);
    }

    function renderRepeatableItems(data, articleName) {
        var selector = '.' + articleName;
        var directive = DirectivesFactory.getRepeatableDirective(data, articleName);
        $p(selector).render(data, directive);
    }

})(BIL.RequestModule,
    BIL.DirectivesFactory,
    BIL.ConfigurationHandler,
    BIL.CONSTANTS
);

