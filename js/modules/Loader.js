const GET_REQUEST = "GET";
const CONFIG_URL = "bil.config.json";

const REQUEST_FINISHED_RESPONSE_READY = 4;
const OK = 200;

var sendGet = function(url) {
    let request = new XMLHttpRequest();
    let d = Promise.defer();
    request.onreadystatechange = function() {
        if ((request.readyState === REQUEST_FINISHED_RESPONSE_READY)
             && (request.status === OK)) {
            let data = JSON.parse(request.responseText);
            d.resolve(data);
        } else {
            d.reject(request.responseText);
        }
    };

    request.open(GET_REQUEST, CONFIG_URL, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send();

    return d.promise;
};

var getConfiguration = function() {
   return sendGet(CONFIG_URL);
}

var api = {
    sendGet: sendGet
};

export default api;
