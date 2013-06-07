var ScriptLocator = {};
(function(){
	ScriptLocator = function(){
        if( !(this instanceof ScriptLocator))
            return new ScriptLocator();

        this.response = {found: false, filePath: ''};
	};

	ScriptLocator.prototype = {
		findScript: function( fileName, type ){
			var locObj = {
				scriptsArr: document.getElementsByTagName("script"),
				fileName: (fileName.search('.js') > -1) ? fileName : fileName + '.js'
			};

			for(var i=0; i<locObj.scriptsArr.length; i++){
				if(locObj.scriptsArr[i].src.search(fileName) > 0){
					this.response.filePath = locObj.scriptsArr[i].src;
					this.response.found = true;
				}
			}

			return this.response;
		}
	};
})();

//ScriptLocator().findScript("findScript");
//ScriptLocator().findScript("MODEL.js");