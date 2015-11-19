import Loader from './modules/Loader'


Loader.sendGet("testURL", () => {
    console.log("test");
});
