(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by treisyjimenez on 27/6/17.
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _modulesOffCanvas = require('./modules/off-canvas');

var _modulesOffCanvas2 = _interopRequireDefault(_modulesOffCanvas);

var _modulesSidebarMenu = require('./modules/sidebar-menu');

var _modulesSidebarMenu2 = _interopRequireDefault(_modulesSidebarMenu);

$(function () {
	'use strict';

	(0, _modulesOffCanvas2['default'])();
	(0, _modulesSidebarMenu2['default'])();
});

},{"./modules/off-canvas":2,"./modules/sidebar-menu":3}],2:[function(require,module,exports){
/**
 * Created by treisyjimenez on 30/6/17.
 */

'use strict';

module.exports = function () {

	console.log('off-canvas');

	$('#sidebar-mobile').click(function () {
		"use strict";

		$('.sidebar-wrapper').toggleClass('show');
	});
};

},{}],3:[function(require,module,exports){
/**
 * Created by treisyjimenez on 4/7/17.
 */

'use strict';

module.exports = function () {
	"use strict";

	console.log('menu');

	$('.sidebar .main-options>a').click(function () {
		console.log('click');
	});
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdHJlaXN5amltZW5lei9Qcm95ZWN0b3MvY29uZG9taW5pby9zcmMvc2NyaXB0cy9lczYvbWFpbi5qcyIsIi9Vc2Vycy90cmVpc3lqaW1lbmV6L1Byb3llY3Rvcy9jb25kb21pbmlvL3NyYy9zY3JpcHRzL2VzNi9tb2R1bGVzL29mZi1jYW52YXMuanMiLCIvVXNlcnMvdHJlaXN5amltZW5lei9Qcm95ZWN0b3MvY29uZG9taW5pby9zcmMvc2NyaXB0cy9lczYvbW9kdWxlcy9zaWRlYmFyLW1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDSUEsWUFBWSxDQUFDOzs7O2dDQUVTLHNCQUFzQjs7OztrQ0FDcEIsd0JBQXdCOzs7O0FBRWhELENBQUMsQ0FBQyxZQUFNO0FBQ1AsYUFBWSxDQUFBOztBQUVaLHFDQUFXLENBQUM7QUFDWix1Q0FBYSxDQUFDO0NBQ2QsQ0FBQyxDQUFBOzs7Ozs7Ozs7QUNWRixNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVk7O0FBRTVCLFFBQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBRTFCLEVBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFVO0FBQ3BDLGNBQVksQ0FBQzs7QUFFYixHQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDMUMsQ0FBQyxDQUFDO0NBQ0gsQ0FBQzs7Ozs7Ozs7O0FDVEYsTUFBTSxDQUFDLE9BQU8sR0FBRyxZQUFXO0FBQzNCLGFBQVksQ0FBQzs7QUFFYixRQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUVwQixFQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWTtBQUMvQyxTQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBRXJCLENBQUMsQ0FBQTtDQUNGLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHRyZWlzeWppbWVuZXogb24gMjcvNi8xNy5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBvZmZDYW52YXMgZnJvbSAnLi9tb2R1bGVzL29mZi1jYW52YXMnXG5pbXBvcnQgc2lkZWJhck1lbnUgZnJvbSAnLi9tb2R1bGVzL3NpZGViYXItbWVudSdcblxuJCgoKSA9PiB7XG5cdCd1c2Ugc3RyaWN0J1xuXG5cdG9mZkNhbnZhcygpO1xuXHRzaWRlYmFyTWVudSgpO1xufSkiLCIvKipcbiAqIENyZWF0ZWQgYnkgdHJlaXN5amltZW5leiBvbiAzMC82LzE3LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXG5cdGNvbnNvbGUubG9nKCdvZmYtY2FudmFzJyk7XG5cblx0JCgnI3NpZGViYXItbW9iaWxlJykuY2xpY2soZnVuY3Rpb24oKXtcblx0XHRcInVzZSBzdHJpY3RcIjtcblxuXHRcdCQoJy5zaWRlYmFyLXdyYXBwZXInKS50b2dnbGVDbGFzcygnc2hvdycpO1xuXHR9KTtcbn07IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHRyZWlzeWppbWVuZXogb24gNC83LzE3LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdGNvbnNvbGUubG9nKCdtZW51Jyk7XG5cblx0JCgnLnNpZGViYXIgLm1haW4tb3B0aW9ucz5hJykuY2xpY2soZnVuY3Rpb24gKCkge1xuXHRcdGNvbnNvbGUubG9nKCdjbGljaycpO1xuXG5cdH0pXG59OyJdfQ==
