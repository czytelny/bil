var REQUEST_TYPES = {
    "getRequest": "GET"
};

const REQUEST_FINISHED_RESPONSE_READY = 4;
const OK = 200;

var hookSuccessCallback = function(dataRequest, callbackFun) {
    dataRequest.onreadystatechange = function() {
        if (dataRequest.readyState === REQUEST_FINISHED_RESPONSE_READY && dataRequest.status === OK) {
            let data = JSON.parse(dataRequest.responseText);
            callbackFun(data);
        }
    };
};

var sendGet = function(url, successCallback) {
    let dataRequest = new XMLHttpRequest();
    hookSuccessCallback(dataRequest, successCallback);
    dataRequest.open(REQUEST_TYPES.getRequest, url, true);
    dataRequest.setRequestHeader("Content-Type", "application/json");
    dataRequest.send();
};

var RequestModule = {
    sendGet: sendGet
};


export default RequestModule
