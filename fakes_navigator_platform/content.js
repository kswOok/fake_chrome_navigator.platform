var script = document.createElement("script");
script.text = "";
script.text += "navigator.__defineGetter__('platform', () => 'Linux armv7l');";
(document.head || document.documentElement).appendChild(script);

