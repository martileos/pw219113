const app = new Vue({
	el: '#app',
	data: {
		titulo: 'Hola mundo pero con Vue',
		frutas: ['Manzana','Uva','Peras','Fresas'],
		frutas2: [
			{nombre:'Manzana',cantidad: 11},
			{nombre:'Uva',cantidad: 0},
			{nombre:'Peras',cantidad: 80},
			{nombre:'Fresas',cantidad: 110}
		]
	}
});