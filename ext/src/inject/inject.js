chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
        newScript = document.createElement('script');
        newScript.type = 'text/javascript';
        newScript.src = '//fast.wistia.net/labs/fresh-url/v1.js';
        newScript.async = true;
        document.body.appendChild(newScript);
	}
	}, 10);
});