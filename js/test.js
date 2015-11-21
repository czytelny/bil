//require('babel-polyfill');
import Loader from './modules/Loader'

Loader.getConfiguration().then(function(data) {
    console.log("success");
    console.log(data);
}, function() {
    console.log("error");

});
