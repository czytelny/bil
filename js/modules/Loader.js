const GET_REQUEST = "GET";
const CONFIG_FILE_NAME = "bil.config.json";
const DATA_FILE_NAME = "bil.data.json";


const REQUEST_FINISHED_RESPONSE_READY = 4;
const OK = 200;

var sendGet = function(url) {
    let request = new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
        request.onload = function() {
            if (this.status === OK) {
                let data = JSON.parse(this.responseText);
                resolve(data);
            } else {
                reject(new Error(this.statusText));
            }
        };
        request.onerror = () => {
            reject(new Error('XMLHttpRequest Error: ' + this.statusText));
        };

        request.open(GET_REQUEST, url);
        request.setRequestHeader("Content-Type", "application/json");
        request.send();
    });
};

var api = {
    getConfiguration: ()=> sendGet(CONFIG_FILE_NAME),
    getContent: (contentFolder)=> sendGet(`${contentFolder}/${DATA_FILE_NAME}`)
};

export default api;
