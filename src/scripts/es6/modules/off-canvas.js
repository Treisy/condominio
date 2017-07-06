/**
 * Created by treisyjimenez on 30/6/17.
 */

module.exports = function () {

	console.log('off-canvas');

	$('#sidebar-mobile').click(function(){
		"use strict";

		$('.sidebar-wrapper').toggleClass('show');
	});
};