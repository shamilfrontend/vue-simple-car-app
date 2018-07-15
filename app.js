const carMake = (name, model, owner, year, phone, image) => ({
	name, model, owner, year, phone, image
});

const cars = [
	carMake('Lamborghini', 'Aventador', 'Nurik', '2018', '+7 925 111 22 33', './images/aventador.jpg'),
	carMake('Audi', 'R8', 'Eldar', '2018', '+7 925 222 12 45', './images/r8.png'),
	carMake('Lada', 'Priora', 'Maga', '2018', '+7 925 111 22 33', './images/priora.jpg'),
	carMake('Shevrole', 'Camaro', 'Daniil', '2017', '+7 925 777 22 43', './images/camaro.jpg'),
	carMake('Bmw', 'M3', 'Shamil', '2018', '+7 925 111 22 33', './images/m3.jpg')
];

new Vue({
	el: '#app',
	data: {
		cars: cars,
		car: cars[0],
		selectedCarIndex: 0,
		phoneVisibility: false,
		modalVisibility: false,
	},
	methods: {
		selectCar(index) {
			this.car = cars[index];
			this.selectedCarIndex = index;
			this.phoneVisibility = false;
		}
	},
	computed: {
		phoneBtnText() {
			return this.phoneVisibility ? 'Hide Phone': 'Show Phone';
		}
	}
});
