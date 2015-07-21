"use strict";

BIL.RequestModule = (function() {
    var REQUEST_TYPES = {
        "getRequest": "GET"
    };
    var REQUEST_FINISHED_RESPONSE_READY = 4;
    var OK = 200;

    var hookSuccessCallback = function(dataRequest, callbackFun) {
        dataRequest.onreadystatechange = function() {
            if (dataRequest.readyState == REQUEST_FINISHED_RESPONSE_READY && dataRequest.status == OK) {
                var data = JSON.parse(dataRequest.responseText);
                callbackFun(data);
            }
        };
    };

    var sendGet = function(url, successCallback) {
        var dataRequest = new XMLHttpRequest();
        hookSuccessCallback(dataRequest, successCallback);
        dataRequest.open(REQUEST_TYPES.getRequest, url, true);
        dataRequest.send();
    };

    return {
        sendGet: sendGet
    }
})();
