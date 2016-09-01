//Javascript
//JL_somirp

//Valor aleatorio
var valorAleatorio = function () {
	"use strict";
	return Math.round(2000 * Math.random()) + 1;
};
//Valores del EjeX
var EjeX = ["Oct-2014", "Nov-2014", "Dic-2014", "Ene-2015", "Feb-2015", "Mar-2015", "Abr-2015", "May-2015", "Jun-2015", "Jul-2015", "Ago-2015", "Sep-2015", "Oct-2015", "Nov-2015", "Dic-2015", "Ene-2016", "Feb-2016", "Mar-2016", "Abr-2016", "May-2016", "Jun-2016"],
	EjeY = [],
	Acotaciones = ["Número de visitas al mes", "(Diferencia en puntos)", "Millones de usuarios"],
	// Donde se genera el listado, esta comentado para agregar la leyenda
	Leyenda = "",
	Colores = {
		AnimalPolitico: "#C1272D",
		AristeguiNoticias: "#F15A24",
		AutoPlaza: "#F7931E",
		CulturaColectiva: "#FBB03B",
		de10: "#8CC63F",
		ElDeforma: "#39B54A",
		Referee: "#009245",
		FutbolTotal: "#006837",
		JuanFutbol: "#00A99D",
		KiwiLimon: "#29ABE2",
		LopezDoriga: "#0071BC",
		LosImpuestos: "#2E3192",
		MedioTiempo: "#1B1464",
		PijamaSurf: "#662D91",
		RedPolitica: "#9E005D",
		ReporteIndigo: "#ED1E79",
		SDPnoticias: "#998675",
		SinEmbargo: "#736357",
		Sopitas: "#534741",
		UnoTV: "#603813",
		Unocero: "#333333",
		Parentesis: "#444444",
		Salud180: "#b7c698",
		ActitudFem: "#d19d55",
		Gamedots: "#FF0000"
	},
	Data_escritorio = [
		{
			datos: {
				visible: false,
				nombre: "sdpnoticias.com",
				color: Colores.SDPnoticias
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "aristeguinoticias.com",
				color: Colores.AristeguiNoticias
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "sopitas.com",
				color: Colores.Sopitas
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "culturacolectiva.com",
				color: Colores.CulturaColectiva
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "mediotiempo.com",
				color: Colores.MedioTiempo
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "salud180.com",
				color: Colores.Salud180
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "sinembargo.mx",
				color: Colores.SinEmbargo
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "eldeforma.com",
				color: Colores.ElDeforma
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "animalpolitico.com",
				color: Colores.AnimalPolitico
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "unotv.com",
				color: Colores.UnoTV
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "de10.com.mx",
				color: Colores.de10
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "actitudfem.com",
				color: Colores.ActitudFem
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "juanfutbol.com",
				color: Colores.JuanFutbol
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "losimpuestos.com.mx ",
				color: Colores.LosImpuestos
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "kiwilimon.com",
				color: Colores.KiwiLimon
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "Parentesis.com",
				color: Colores.Parentesis
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "pijamasurf.com",
				color: Colores.PijamaSurf
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "lopezdoriga.com",
				color: Colores.LopezDoriga
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "autoplaza.com.mx",
				color: Colores.AutoPlaza
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "referee.mx",
				color: Colores.Referee
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "unocero.com",
				color: Colores.Unocero
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "redpolitica.mx",
				color: Colores.RedPolitica
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "gamedots.mx",
				color: Colores.Gamedots
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		}
	],
	Data_smartphones = [
		{
			datos: {
				visible: false,
				nombre: "sdpnoticias.com",
				color: Colores.SDPnoticias
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "unotv.com",
				color: Colores.UnoTV
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "aristeguinoticias.com",
				color: Colores.AristeguiNoticias
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "eldeforma.com",
				color: Colores.ElDeforma
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "culturacolectiva.com",
				color: Colores.CulturaColectiva
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "sopitas.com",
				color: Colores.Sopitas
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "sinembargo.mx",
				color: Colores.SinEmbargo
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "mediotiempo.com",
				color: Colores.MedioTiempo
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "lopezdoriga.com",
				color: Colores.LopezDoriga
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "juanfutbol.com",
				color: Colores.JuanFutbol
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "animalpolitico.com",
				color: Colores.AnimalPolitico
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "salud180.com",
				color: Colores.Salud180
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "actitudfem.com",
				color: Colores.ActitudFem
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "kiwilimon.com",
				color: Colores.KiwiLimon
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "referee.mx",
				color: Colores.Referee
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "de10.com.mx",
				color: Colores.de10
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "pijamasurf.com",
				color: Colores.PijamaSurf
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "parentesis.com",
				color: Colores.Parentesis
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "unocero.com",
				color: Colores.Unocero
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "gamedots.mx",
				color: Colores.Gamedots
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "losimpuestos.com.mx",
				color: Colores.LosImpuestos
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "redpolitica.mx",
				color: Colores.RedPolitica
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "autoplaza.com.mx",
				color: Colores.AutoPlaza
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		}
	],
	Data_tabletas = [
		{
			datos: {
				visible: false,
				nombre: "aristeguinoticias.com",
				color: Colores.AristeguiNoticias
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "sdpnoticias.com",
				color: Colores.SDPnoticias
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "sinembargo.mx",
				color: Colores.SinEmbargo
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "lopezdoriga.com",
				color: Colores.LopezDoriga
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "eldeforma.com",
				color: Colores.ElDeforma
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "sopitas.com",
				color: Colores.Sopitas
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "culturacolectiva.com",
				color: Colores.CulturaColectiva
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "mediotiempo.com",
				color: Colores.MedioTiempo
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "salud180.com",
				color: Colores.Salud180
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "animalpolitico.com",
				color: Colores.AnimalPolitico
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "unotv.com",
				color: Colores.UnoTV
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "kiwilimon.com",
				color: Colores.KiwiLimon
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "actitudfem.com",
				color: Colores.ActitudFem
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "juanfutbol.com",
				color: Colores.JuanFutbol
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "de10.com.mx",
				color: Colores.de10
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "pijamasurf.com",
				color: Colores.PijamaSurf
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "referee.mx",
				color: Colores.Referee
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "parentesis.com",
				color: Colores.Parentesis
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "unocero.com",
				color: Colores.Unocero
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "losimpuestos.com.mx",
				color: Colores.LosImpuestos
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "redpolitica.mx",
				color: Colores.RedPolitica
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "gamedots.mx",
				color: Colores.Gamedots
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		},
		{
			datos: {
				visible: false,
				nombre: "autoplaza.com.mx",
				color: Colores.AutoPlaza
			},
			valores: [valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio(), valorAleatorio()],
			x: [],
			y: []
		}
	];
