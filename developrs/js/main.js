// JavaScript Document
$(function (){
	'use strict';
	var windowHeight =$(window).height(),
		upperHeight=$('.upper-bar').innerHeight,
		headerHeight=$('.navbar').innerHeight;
	$('.slider .carousel-inner').height(windowHeight - ( upperHeight + headerHeight));
});