//Javascript

//Declarando variables...
var $, console;

$(function () {
	"use strict";

	$("ul#menu li").click(function () {
		var index = $(this).index() - 1,
			clase = $(this).attr("class");

		if (clase !== "sel" && index !== -1) {
			$("ul#menu li.sel").removeClass("sel");
			$(this).addClass("sel");
			index = (index * $(".grafica").width()) * -1;
			$("ul#graficas").animate({marginLeft: index});
		}
	});

	//Llevando el scroll hasta la derecha de todos los elementos
	$("#canvas_smartphones").scrollLeft(600)
	$("#canvas_tabletas").scrollLeft(600)
	$("#canvas_escritorio").scrollLeft(600)

});
