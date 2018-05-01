// chrome.storage.sync.get(null, function (storageContents) {
    var script = document.createElement("script");
    script.text = "";

    // Object.keys(storageContents).forEach(function (key) {
       
        script.text += "navigator.__defineGetter__('platform', () => 'Linux armv7l');";
     // script.text +="Object.defineProperty(navigator,'platform',{value:'lll',writable:false})"
    // });

    (document.head || document.documentElement).appendChild(script);
// });
