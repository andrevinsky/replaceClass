/**
 * Created with JetBrains PhpStorm.
 * User: ANDREW
 * Date: 7/12/13
 * Time: 2:03 AM
 * To change this template use File | Settings | File Templates.
 * @requires $ jQuery
 *
 */
describe('replaceClass plugin', function(){
	var testElementA;
	var testElementB;
	beforeEach(function(){
		testElementA = $('.test-1').html('<div class="a aa aaa"></div>').find('.a');
		testElementB = $('.test-2').html('<div class="b">\
			<div class="b_1"></div>\
			<div class="b_2"></div>\
			<div class="b_3"></div>\
		</div>').find('.b').find('div').andSelf();
	});

	xit('should be a method for jQuery object', function(){
		expect(testElementA.replaceClass).toBeDefined();
	});

	xit('should not throw exceptions when called', function(){
		var callingFunction = function(){
			testElementA.replaceClass();
		};
		expect(callingFunction).not.toThrow();
	});

	xit('should be able to replace one class (string) to another (string)', function(){
		var simpleReplacement = function(){
			testElementA.replaceClass('a', 'd');
		};
		expect(testElementA.is('.a')).toBe(true);
		expect(testElementA.is('.d')).not.toBe(true);
		expect(simpleReplacement).not.toThrow();
		expect(testElementA.is('.a')).not.toBe(true);
		expect(testElementA.is('.d')).toBe(true);
	});

	xit('should be able to remove class, if replacement is not specified', function(){
		var simpleReplacement = function(){
			testElementA.replaceClass('a');
		};
		expect(testElementA.is('.a')).toBe(true);
		expect(simpleReplacement).not.toThrow();
		expect(testElementA.is('.a')).not.toBe(true);
	});

	xit('takes space-separated class names (string) and carries action for each item', function(){
		var simpleReplacement = function(){
			testElementA.replaceClass('a aa aaa');
		};
		expect(testElementA.is('.a')).toBe(true);
		expect(testElementA.is('.aa')).toBe(true);
		expect(testElementA.is('.aaa')).toBe(true);
		expect(simpleReplacement).not.toThrow();
		expect(testElementA.is('.a')).not.toBe(true);
		expect(testElementA.is('.aa')).not.toBe(true);
		expect(testElementA.is('.aaa')).not.toBe(true);
	});

	it('should match the regex should it be specified', function(){
		var regexReplacement = function(){
			testElementB.replaceClass(/^b\_/);
		};
		expect(testElementB.is('.b_1')).toBe(true);
		expect(regexReplacement).not.toThrow();
		expect(testElementB.is('.b_1')).not.toBe(true);
	});


	//it('should ', function(){});

});