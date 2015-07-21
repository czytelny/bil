"use strict";

BIL.ConfigurationHandler = (function() {
    var PREFIX = "bil-";

    function appendPrefixToArrayElements(array) {
        for (var i = 0; i < array.length; i++) {
            var currentItem = array[i];
            array[i] = PREFIX + currentItem;
        }
    }

    //TODO: configData zagnieździć jako obiekt dla conf handlera.

    var getSinglesList = function(configData) {
        var singlesList = configData.applicationSettings.staticArticles;
        if (singlesList instanceof Array) {
            appendPrefixToArrayElements(singlesList);
            return singlesList;
        }
        var singleArrayList = new Array(singlesList);
        appendPrefixToArrayElements(singleArrayList);
        return new Array(singleArrayList);
    };

    var getRepeatableList = function(configData) {
        var repeatableList = configData.applicationSettings.dynamicArticles;
        if (repeatableList instanceof Array) {
            appendPrefixToArrayElements(repeatableList);
            return repeatableList;
        }
        var repeatableArrayList = new Array(repeatableList);
        appendPrefixToArrayElements(repeatableArrayList);
        return new Array(repeatableArrayList);
    };

    var getContentFolder = function(configData) {
        return configData.generalSettings.contentFolder;
    };

    return {
        getSinglesList: getSinglesList,
        getRepeatableList: getRepeatableList,
        getContentFolder: getContentFolder
    }
})();
