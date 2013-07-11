/**
 * Created with JetBrains PhpStorm.
 * User: ANDREW
 * Date: 7/3/13
 * Time: 1:14 PM
 * To change this template use File | Settings | File Templates.
 */
(function($){

	$.fn.replaceClass = function(classToFind, classToReplaceTo){
		if (!classToFind && !classToReplaceTo)
			return this;
		var toFindType = $.type(classToFind), replaceToType = $.type(classToReplaceTo);

		if ((toFindType == 'array') && (replaceToType == 'array') && (classToFind.length === classToReplaceTo.length)) {
			for (var i = 0, max = classToFind.length; i < max; i++) {
				this.replaceClass.call(this, classToFind[i], classToReplaceTo[i])
			}
			return this;
		}

		debugger;

		if (toFindType == 'string' && !classToReplaceTo) {
			return this.removeClass(classToFind);
		} else if (replaceToType == 'string' && !toFindType) {
			return this.addClass(classToReplaceTo);
		}
		var finder = {
			'array' : function(input){
				var sourceTokens = input.split(/\s+/), searchItems = classToFind, result = [];
				for(var element; element = sourceTokens.shift();) {
					if (searchItems.indexOf(element) < 0)
						continue;
					result.push(element);
				}
				return result;
			},
			'string' : function(input) {
				var sourceTokens = input.split(/\s+/), searchItems = classToFind.split(/\s+/), result = [];
				for(var element; element = sourceTokens.shift();) {
					if (searchItems.indexOf(element) < 0)
						continue;
					result.push(element);
				}
				return result;
			},
			'regexp' : function(input) {
				debugger;
				var sourceTokens = input.split(/\s+/), result = [];
				for(var element; element = sourceTokens.shift();) {
					if (classToFind.test(element))
						result.push(element);
				}
				debugger;
				return result;
		},
			'function': classToFind
		}[toFindType],
			replacer = {
				'string' : function (input) { return input.replace(classToFind, classToReplaceTo); },
				'function' : classToReplaceTo,
				'undefined' : function (input, entry) { return input.replace(entry, '')}
			}[replaceToType];

		if (!finder || !replacer)
			return this;

		this.each(function(k, v){
			var className = this.className, result = className, findResult = finder(className);
			if (!$.isArray(findResult)) {
				findResult = [findResult];
			}
			for(var element; element = findResult.shift();) {
				result = replacer(className, element, classToFind, classToReplaceTo, k);
			}
			if (result !== className) {
				this.className = result;
			}
		});

		return this;
	};

})(jQuery);