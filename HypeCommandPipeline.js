/*!
Hype CommandPipeline 1.3
copyright (c) 2019 Max Ziebell, (https://maxziebell.de). MIT-license
*/
/*
* Version-History
* 1.0 (Beta) Initial release under MIT-license
* 1.1 Fixed error handling and now the errors are detailed
* 1.2 Fixed pipeline and made parsing more robust
* 1.3 Converted into a selfcontained extension
*/

if("HypeCommandPipeline" in window === false) window['HypeCommandPipeline'] = (function () {

	var commandPipeline = function(hypeDocument, element, event) {
		if (event.customBehaviorName.indexOf('|')>-1) {
			var cmd = event.customBehaviorName.split('|');
			try {
				var fnparams = JSON.parse('['+cmd[1]+']');
			} catch (e) {
			    alert("Hype CommandPipeline:\n"+e.name+': '+e.message);
			}
			if (typeof fnparams === "object"){
				var fn = cmd[0].trim();
				if (hypeDocument.hasOwnProperty(fn)) {
					if (typeof hypeDocument[fn] === "function") {
						hypeDocument[fn].apply(hypeDocument, fnparams);
					}
				}
			}
		}	
	}
	
	if("HYPE_eventListeners" in window === false) { window.HYPE_eventListeners = Array();}
	window.HYPE_eventListeners.push({"type":"HypeTriggerCustomBehavior", "callback": commandPipeline});

	/* Reveal Public interface to window['HypeCommandPipeline'] */
	return {
		version: '1.3'
	};
})();