"use strict";

BIL.ConfigurationHandler = (function() {
    var PREFIX = "bil-";
    var configuration;

    function appendPrefixToArrayElements(array) {
        for (var i = 0; i < array.length; i++) {
            var currentItem = array[i];
            array[i] = PREFIX + currentItem;
        }
    }

    var setConfData = function(confObj) {
        configuration = confObj;
    };

    function isArray(o) {
        return Object.prototype.toString.call(o) === '[object Array]';
    }

    var getSinglesList = function() {
        var singlesList = configuration["applicationSettings"]["singleArticles"];
        if (isArray(singlesList)) {
            appendPrefixToArrayElements(singlesList);
            return singlesList;
        }
        var singleArrayList = new Array(singlesList);
        appendPrefixToArrayElements(singleArrayList);
        return new Array(singleArrayList);
    };

    var getMultipleArticlesList = function() {
        var multipleArtList = configuration["applicationSettings"]["multipleArticles"];
        if (isArray(multipleArtList)) {
            appendPrefixToArrayElements(multipleArtList);
            return multipleArtList;
        }
        var repeatableArrayList = new Array(multipleArtList);
        appendPrefixToArrayElements(repeatableArrayList);
        return new Array(repeatableArrayList);
    };

    var getContentFolder = function() {
        return configuration["generalSettings"]["contentFolder"];
    };

    return {
        getSinglesList: getSinglesList,
        getMultipleArticlesList: getMultipleArticlesList,
        getContentFolder: getContentFolder,
        setConfData: setConfData
    }
})();
