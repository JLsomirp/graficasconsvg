//Javascript
//Creador de Charts con Javascript y SVG
//Usando la librería de Raphael
//Usando Jquery para obtener data
//JL_somirp

// Declarando variables que me dijo Brackets
var $, Raphael, console, EjeX, Data_smartphones, h;

//Valor máximo de todos los valores en la Data
function valorMax(Data) {
	"use strict";
	//Necesitaba una variable y aquí esta
	var Todos_los_valores = [], Maximo;
	//Each todos los valores
	$.each(Data, function (index, value) {
		Todos_los_valores[index] = Math.max.apply(Math, Data[index].valores);
	});
	Maximo = Math.max.apply(Math, Todos_los_valores);
	//Para que el último número este cerrado a 0, trabajo en ello
	//Maximo = Maximo + (10 - Maximo[Maximo.length - 1]);
	//console.log(Maximo)
	return Maximo;
}

//Revisando por los path que se visualizarán
var visible_o_no = function (este, color) {
	"use strict";
	var donde_estoy = $(este).parent().parent().find("path"),
		donde_estoy2 = $(este).parent().parent().find("circle");
	//Paths
	for (h = 0; h < donde_estoy.length; h++) {
		if (donde_estoy.eq(h).attr("stroke") === color && donde_estoy.eq(h).attr("opacity") === "0") {
			donde_estoy.eq(h).css("opacity", 1).attr("opacity", "1");
			$("span", este).css("background-color", color);
		} else if (donde_estoy.eq(h).attr("stroke") === color && donde_estoy.eq(h).attr("opacity") === "1") {
			donde_estoy.eq(h).css("opacity", 0).attr("opacity", 0);
			$("span", este).css("background-color", "#D4D4D4");
		}
	}
	//Circles
	for (h = 0; h < donde_estoy2.length; h++) {
		if (donde_estoy2.eq(h).attr("fill") === color && donde_estoy2.eq(h).attr("opacity") === "0") {
			donde_estoy2.eq(h).css({"opacity": 1, "position": "relative", "z-index": 10, display: "block"}).attr("opacity", "1");//.data("visible", true);
			//console.log(Raphael.data(donde_estoy2.eq(h)));
		} else if (donde_estoy2.eq(h).attr("fill") === color && donde_estoy2.eq(h).attr("opacity") === "1") {
			donde_estoy2.eq(h).css({"opacity": 0, "z-index": 0, display: "none"}).attr("opacity", "0");//.data("visible", true);
		}
	}
};

//Genera la Gráfica tipo Linear
function grafica_linear(ID, estilos, Data) {
	"use strict";
	//Recordar en convertir todo en variable
	//Fondo de la cuadrícula
	if (estilos.Cuadricula.visibleFondo === true) {
		ID.rect(estilos.Cuadricula.padding, estilos.Cuadricula.padding, estilos.Cuadricula.ancho, estilos.Cuadricula.altura).attr({"fill": estilos.Cuadricula.colorFondo, "stroke-width": "0"});
	}
	//Variables para diferentes cosas
	var i,
		h = 0,
		Cuadricula_EjeX = {
			grupo: [],
			valores: EjeX,
			cuantos: EjeX.length + 1, //Aquí abajo --\/ va el padding o se puede aumentar para cuadrar la gráfica
			separacion: ((estilos.Cuadricula.ancho - 20) + ((estilos.Cuadricula.ancho) / (EjeX.length + 1))) / (EjeX.length + 1),
			tamano_data: (1.5 * 100) / parseInt(estilos.Cuadricula.textoTamano, 10)
		},
		Cuadricula_EjeY = {
			grupo: [],
			valores: {
				minimo: 0,
				//maximo: Math.max.apply(Math, Aristegui.valores) + 40
				maximo: valorMax(Data) + 20
			},
			cuantos: estilos.Cuadricula.altura / estilos.Cuadricula.lineaCada,
			separacion: estilos.Cuadricula.altura / (estilos.Cuadricula.altura / estilos.Cuadricula.lineaCada),
			tamano_data: 35 + estilos.Cuadricula.padding
		},
		Valor_formateado = function (valor) {
			valor = valor.toString();
			if (valor.length === 1) {
				valor = "0.00" + valor;
			} else if (valor.length === 2) {
				valor = "0.0" + valor;
			} else if (valor.length === 3) {
				valor = "0." + valor;
			} else if (valor.length === 4) {
				valor = valor.substr(0, 1) + "." + valor.substr(1, 3);
			} else if (valor.length === 5) {
				valor = valor.substr(0, 2) + "." + valor.substr(2, 4);
			}
			return valor;
		},
		Linea_Base_Grafica,
		escala_en_grafica = function (valor) {
			valor = (valor * Cuadricula_EjeY.valores.maximo) / (Math.round((estilos.Cuadricula.altura - Cuadricula_EjeX.tamano_data) / estilos.Cuadricula.lineaCada) - 1);
			return Math.round(valor);
		},
		segmentos_en_grafica = function (valor) {
			if (valor < (Cuadricula_EjeX.cuantos - 1)) {
				valor = (Cuadricula_EjeY.tamano_data + (Cuadricula_EjeX.separacion * (valor + 0.5)));
				return Math.round(valor);
			} else {
				return -100;
			}
		},
		//Saber en donde se ubica el punto en refencia a la escala
		punto_vs_escala = function (punto, escalaMax, puntoMax) {
			punto = (((((puntoMax - punto) * 100) / puntoMax) * (escalaMax - Cuadricula_EjeY.tamano_data)) / 100) + Cuadricula_EjeY.tamano_data;
			return Math.round(punto);
		},
		texto,
		posicion,
		ConteoTotal = ( EjeX.length - 1 ),
		ConteoNoTotal = ( EjeX.length - 3 ),
		punto_hover = function (e, esto) {
			//console.log(esto.node.attributes.opacity.value);
			if (esto.node.attributes.opacity.value === "1" && esto.data("conteo") <= ConteoTotal && esto.data("conteo") >= ConteoNoTotal ) {
				estilos.Descripcion.identificador.find(".info")
					.html(estilos.Descripcion.html.replace(/Listado.colorFondo/gi, esto.attrs.fill).replace(/Listado.valor/gi, Valor_formateado(esto.data("valor"))).replace(/Listado.nombre/gi, esto.data("nombre")).replace(/Listado.porcentaje/gi, esto.data("porcentaje")).replace("<span>(NaN%)</span>", " ").replace("(Infinity%)", ""))
					.stop(true)
					.fadeIn(0)
				estilos.Descripcion.identificador.find(".info")
					.animate({top: (esto.attrs.cy + (parseInt(esto.attrs.r.replace("px", ""), 10))), left: (esto.attrs.cx + (parseInt(esto.attrs.r.replace("px", ""), 10)) - estilos.Descripcion.identificador.find(".info").width() - 30)}, 400);
			}
			else if (esto.node.attributes.opacity.value === "1" && esto.data("conteo") < ConteoNoTotal ) {
				estilos.Descripcion.identificador.find(".info")
					.html(estilos.Descripcion.html.replace(/Listado.colorFondo/gi, esto.attrs.fill).replace(/Listado.valor/gi, Valor_formateado(esto.data("valor"))).replace(/Listado.nombre/gi, esto.data("nombre")).replace(/Listado.porcentaje/gi, esto.data("porcentaje")).replace("<span>(NaN%)</span>", " ").replace("(Infinity%)", ""))
					.stop(true)
					.fadeIn(0)
					.animate({top: (esto.attrs.cy + (parseInt(esto.attrs.r.replace("px", ""), 10))), left: (esto.attrs.cx + (parseInt(esto.attrs.r.replace("px", ""), 10)))}, 400);
			}
			console.log( esto.data("conteo"), ConteoTotal )
		},
		punto_no_hover = function (e) {
			estilos.Descripcion.identificador.find(".info").fadeOut(0);
		};
	//Cuadrícula sobre el Eje Y
	//ID.setStart();
	if (estilos.Cuadricula.visibleCuadricula && estilos.Cuadricula.visibleEscala === true) { // Muestra los números de la escala
		for (i = (estilos.Cuadricula.altura - Cuadricula_EjeX.tamano_data); i > Cuadricula_EjeX.tamano_data; i = (i - estilos.Cuadricula.lineaCada)) {
			ID.path("M" + Cuadricula_EjeY.tamano_data + " " + i + " L" + (estilos.Cuadricula.ancho + estilos.Cuadricula.padding) + " " + i).attr({"stroke-width": estilos.Cuadricula.anchoLinea, "stroke": estilos.Cuadricula.colorLinea, "stroke-dasharray": estilos.Cuadricula.tipoLinea});
			texto = escala_en_grafica(h); //obtengo el valor de cada línea sobre la gráfica
			Cuadricula_EjeY.grupo[h] = texto;
			//ID.text((Cuadricula_EjeY.tamano_data - 20), i, texto).attr({"font-size": estilos.Cuadricula.textoTamano, "fill": estilos.Cuadricula.textoColor, "font-family": estilos.Cuadricula.textoFuente});
			//****
			estilos.Descripcion.identificador.parent("li").find("div.escala").append('<div style="top: ' + (i - 5) + 'px">' + texto + '</div>');
			//****
			//Checando cuantas veces se ha hecho el ajuste
			h = h + 1;
		}
	} else if (estilos.Cuadricula.visibleCuadricula === true && estilos.Cuadricula.visibleEscala === false) { // No muestra números en la escala
		for (i = (estilos.Cuadricula.altura - Cuadricula_EjeX.tamano_data); i > Cuadricula_EjeX.tamano_data; i = (i - estilos.Cuadricula.lineaCada)) {
			ID.path("M" + estilos.Cuadricula.padding + " " + i + " L" + (estilos.Cuadricula.ancho + estilos.Cuadricula.padding) + " " + i).attr({"stroke-width": estilos.Cuadricula.anchoLinea, "stroke": estilos.Cuadricula.colorLinea, "stroke-dasharray": estilos.Cuadricula.tipoLinea});
			texto = escala_en_grafica(h); //obtengo el valor de cada línea sobre la gráfica
			Cuadricula_EjeY.grupo[h] = texto;
			//Checando cuantas veces se ha hecho el ajuste
			h = h + 1;
		}
	}//De lo contrario No muestra la cuadrícula en el Eje Y

	//Cuadricula sobre el Eje X
	if (estilos.Cuadricula.visibleCuadricula && estilos.Cuadricula.visibleSegmentos === true) { // Muestra los valores en los segmentos
		for (i = 0; i < (Cuadricula_EjeX.cuantos - 1); i =  i + 1) {
			ID.path("M" + (Cuadricula_EjeY.tamano_data + (Cuadricula_EjeX.separacion * i)) + " " + estilos.Cuadricula.padding + " L" + (Cuadricula_EjeY.tamano_data + (Cuadricula_EjeX.separacion * i)) + " " + (estilos.Cuadricula.altura - (estilos.Cuadricula.padding / 2))).attr({"stroke-width": estilos.Cuadricula.anchoLinea, "stroke": estilos.Cuadricula.colorLinea, "stroke-dasharray": estilos.Cuadricula.tipoLinea});
			texto = segmentos_en_grafica(i); //obtengo el valor de cada segmento sobre la gráfica
			Cuadricula_EjeX.grupo[i] = texto;
			ID.text(texto, estilos.Cuadricula.altura, EjeX[i]).attr({"font-size": estilos.Cuadricula.textoTamano, "fill": estilos.Cuadricula.textoColor, "font-family": estilos.Cuadricula.textoFuente});
		}
	} else if (estilos.Cuadricula.visibleCuadricula === true && estilos.Cuadricula.visibleSegmentos === false) { // No muestra valores en los segmentos
		for (i = 0; i < Cuadricula_EjeX.cuantos; i = i + 1) {
			ID.path("M" + (Cuadricula_EjeY.tamano_data + (Cuadricula_EjeX.separacion * i)) + " " + estilos.Cuadricula.padding + " L" + (Cuadricula_EjeY.tamano_data + (Cuadricula_EjeX.separacion * i)) + " " + (estilos.Cuadricula.altura - (estilos.Cuadricula.padding / 2))).attr({"stroke-width": estilos.Cuadricula.anchoLinea, "stroke": estilos.Cuadricula.colorLinea, "stroke-dasharray": estilos.Cuadricula.tipoLinea});
			texto = segmentos_en_grafica(i); //obtengo el valor de cada segmento sobre la gráfica
			Cuadricula_EjeX.grupo[i] = texto;
		}
	}//De lo contrario No muestra la cuadrícula en el Eje X

	//Agragando la base de la Gráfica
	//if (estilos.Cuadricula.padding === 0) {
	//	Linea_Base_Grafica = "M" + 20 + " " + (estilos.Cuadricula.altura - 40) + " L" + (estilos.Cuadricula.ancho - (10 * 2)) + " " + (estilos.Cuadricula.altura - 40);
	//} else {
	//	Linea_Base_Grafica = "M" + (estilos.Cuadricula.padding + estilos.Cuadricula.padding) + " " + (estilos.Cuadricula.altura - 40) + " L" + estilos.Cuadricula.ancho + " " + (estilos.Cuadricula.altura - 40);
	//}
	//Linea_Base_Grafica = ID.path(Linea_Base_Grafica).attr({"stroke-width": 0.5});
	//---------Termina  la construccion de la Cuadrícula

	//Generando la gráfica Linear
	//Probando que la linea tenga nombre
	$.each(Data.reverse(), function (index, value) {
		posicion = "M";
		for (i = 0; i < value.valores.length; i++) {
			posicion += Cuadricula_EjeX.grupo[i] + " " + punto_vs_escala(value.valores[i], (estilos.Cuadricula.altura - Cuadricula_EjeX.tamano_data), Cuadricula_EjeY.grupo[Cuadricula_EjeY.grupo.length - 1]) + "L";
			value.x[i] = Cuadricula_EjeX.grupo[i];
			value.y[i] = punto_vs_escala(value.valores[i], (estilos.Cuadricula.altura - Cuadricula_EjeX.tamano_data), Cuadricula_EjeY.grupo[Cuadricula_EjeY.grupo.length - 1]);
		}
		//Ocultando path que no deben ser visibles y mostrando los que si
		if (value.datos.visible !== true) {
			ID.path(posicion)
				.attr({"class": value.datos.nombre, "stroke": value.datos.color, "stroke-width": estilos.Linea.grosor, "stroke-dasharray": estilos.Linea.tipo, "opacity": 0});
				//.hover(punto_hover(e), punto_no_hover(e));
		} else {
			ID.path(posicion)
				.attr({"class": value.datos.nombre, "stroke": value.datos.color, "stroke-width": estilos.Linea.grosor, "stroke-dasharray": estilos.Linea.tipo});
				//.hover(punto_hover(e), punto_no_hover(e));
		}
		//creando los puntos
		for (i = 0; i < value.x.length; i++) {
			var porcentaje, g = i - 1;
			porcentaje = "(" + ((value.valores[i] / value.valores[g] - 1) * 100).toFixed(2) + "%)";
			//Ocultando los que no se quieren mostrar
			if (value.datos.visible === true) {
				ID.circle(value.x[i], value.y[i], estilos.Linea.puntoTamano)
					.attr({"fill": value.datos.color, "stroke": estilos.Linea.puntoColorBorde, "stroke-width": estilos.Linea.puntoBorde, "opacity": "1"})
					.hover(function (e) {punto_hover(e, this); }, function (e) {punto_no_hover(e); })
					.data("valor", value.valores[i])
					.data("visible", value.datos.visible)
					.data("nombre", value.datos.nombre)
					.data("porcentaje", porcentaje)
					.data("conteo", i);
			} else {
				ID.circle(value.x[i], value.y[i], estilos.Linea.puntoTamano)
					.attr({"fill": value.datos.color, "stroke": estilos.Linea.puntoColorBorde, "stroke-width": estilos.Linea.puntoBorde, "opacity": 0})
					.hover(function (e) {punto_hover(e, this); }, function (e) {punto_no_hover(e); })
					.data("valor", value.valores[i])
					.data("visible", value.datos.visible)
					.data("nombre", value.datos.nombre)
					.data("porcentaje", porcentaje)
					.data("conteo", i);
			}
		}
	});
	//Termina la construcción de líneas y puntos de los valores en la gráfica

	//Generando el listado de valores si se quiere visualizar
	if (estilos.Listado.visible === true) {
		estilos.Listado.identificador.html(estilos.Listado.htmlTitulo.replace("Listado.titulo", estilos.Listado.titulo));
		$.each(Data.reverse(), function (index, value) {
			if (value.datos.visible === true) {
				estilos.Listado.identificador.append(estilos.Listado.html.replace(/data.colorFondo/gi, value.datos.color.toLowerCase()).replace(/Listado.colorFondo/gi, value.datos.color).replace("Listado.valor", Valor_formateado(value.valores[value.valores.length - 1])).replace("Listado.nombre", value.datos.nombre));
			} else {
				estilos.Listado.identificador.append(estilos.Listado.html.replace(/data.colorFondo/gi, value.datos.color.toLowerCase()).replace(/Listado.colorFondo/gi, estilos.Descripcion.colorBase).replace("Listado.valor", Valor_formateado(value.valores[value.valores.length - 1])).replace("Listado.nombre", value.datos.nombre));
			}
		});
		//Agregando una leyenda al final
		//estilos.Listado.identificador.append('<p style="margin-top: 10px; text-transform: none; height: auto; cursor: default">' + estilos.Listado.leyenda + '</p>')
	}
	//Termina la construcción del listado
	//Comienza la visualización de los elementos:
	i=0;
	for (i = 0; i < estilos.Acotaciones.elementosVisibles; i++){
		estilos.Listado.identificador.find("p").eq(i).click();
	}
	//Termina la visualización de elementos

	//Generando las acotaciones
	if (estilos.Acotaciones.visible === true) {
		estilos.Acotaciones.identificador.html("<h5>" + Acotaciones[0] + " <br /><span>" + Acotaciones[1] + "</span></h5><h6>" + Acotaciones[2] + "</h6>" )
	}
}

//Generador de la gráfica
//Tipos de gráfica: *Que no se han programado aún
//Linear, Barra*, dona*, pastel*, radar*
function Grafica(Tipo, ID, Data) {
	"use strict";

	//Cosas que necesito para mostrar datos:
	$("#" + ID).html('<div class="info"></div>');
	$("#" + ID).parent("li").append('<div class="acotaciones"></div><div class="listado"></div><div class="escala"></div>');

	if (Tipo === "Linear") {
		var canvas = $("#" + ID),
			ancho = parseInt(canvas.css("width"), 10) + 600,
			altura = parseInt(canvas.css("height"), 10),
			//Espacio entre la gráfica y el contenedor
			padding = 20,
			//Crea el Canvas
			espacio = new Raphael(ID, ancho, altura),
			//Creando estilos para la gráfica linear
			estilos = {
				Cuadricula: {
					visibleFondo: true,
					visibleCuadricula: true,
					visibleEscala: true,
					visibleSegmentos: true,
					anchoLinea: 0.25,
					tipoLinea: ".", // dot ".", dash "-", solid ""
					colorLinea: "#333",
					colorFondo: canvas.css("background-color"),
					padding: padding,
					ancho: ancho - (padding * 2),
					altura: altura - (padding * 2),
					lineaCada: 60, //espacio entre valores de la gráfica
					textoFuente: "Helvetica, Arial, Sans-serif",
					textoTamano: "10px",
					textoColor: "#a0a0a0"
				},
				Linea: {
					grosor: "3px",
					tipo: "",
					puntoTamano: "5px",
					puntoBorde: "1px",
					puntoColorBorde: canvas.css("background-color")
				},
				Descripcion: {
					identificador: canvas,
					//Solo reconoce las leyendas exactas:
					//Listado.colorFondo, para reconocer el color del dato,
					//Listado.nombre para saber el nombre del dato y
					//Listado.valor para mostrar el valor del dato
					html: '<h3 style="background-color: Listado.colorFondo">Listado.valor<span>Listado.porcentaje</span></h3><h4>Listado.nombre</h4>',
					colorBase: "#D4D4D4"
				},
				Acotaciones: {
					identificador: canvas.parent("li").find(".acotaciones"),
					visible: true,
					elementosVisibles: 10
				},
				Listado: {
					visible: true,
					identificador: canvas.parent("li").find(".listado"),
					ancho: 0, //parseInt(canvas.parent("li").find(".listado").css("width"), 10),
					titulo: "Junio 2016", //EjeX[EjeX.length - 1],
					htmlTitulo: "<h1>Listado.titulo</h1>",
					//Solo reconoce las leyendas exactas: Listado.colorFondo, para reconocer el color del dato,
					//Listado.nombre para saber el nombre del dato y
					//Listado.valor para mostrar el valor del dato
					html: '<p onclick="visible_o_no(this, \'data.colorFondo\')"><span style="background-color: Listado.colorFondo">Listado.valor</span> Listado.nombre</p>',
					leyenda: Leyenda
				}
			};
		if (estilos.Listado.visible === true) {
				estilos.Cuadricula.ancho = (ancho - estilos.Listado.ancho - (padding / 2)) - (padding);
		}
		//Generar gráfica
		grafica_linear(espacio, estilos, Data);
	}
}
