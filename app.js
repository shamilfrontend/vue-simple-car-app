const createCar = (name, model, owner, year, phone, image) => ({
	name, model, owner, year, phone, image
});

const createLog = (text, type, date = new Date()) => ({
	text, type, date
});

const cars = [
	createCar('Lamborghini', 'Aventador', 'Nurik', '2018', '+7 925 111 22 33', './images/aventador.jpg'),
	createCar('Audi', 'R8', 'Eldar', '2018', '+7 925 222 12 45', './images/r8.png'),
	createCar('Lada', 'Priora', 'Maga', '2018', '+7 925 111 22 33', './images/priora.jpg'),
	createCar('Shevrole', 'Camaro', 'Daniil', '2017', '+7 925 777 22 43', './images/camaro.jpg'),
	createCar('Bmw', 'M3', 'Shamil', '2018', '+7 925 111 22 33', './images/m3.jpg')
];

new Vue({
	el: '#app',
	data: {
		cars: cars,
		selectedCarIndex: 0,
		phoneVisibility: false,
		search: '',
		modalVisibility: false,
		logs: []
	},
	created() {
		window.addEventListener('keyup', this.modalClose);
	},
	beforeDestroy() {
		window.removeEventListener('keyup', this.modalClose);
	},
	methods: {
		selectCar(index) {
			console.log('index', index);
			this.car = cars[index];
			this.selectedCarIndex = index;
			this.phoneVisibility = false;
		},
		newOrder() {
			this.modalVisibility = false;
			this.logs.push(createLog(
				`Success order ${this.car.name} ${this.car.model}`,
				'ok'
			));
		},
		cancelOrder() {
			this.modalVisibility = false;
			this.logs.push(createLog(
				`Cancel order ${this.car.name} ${this.car.model}`,
				'cancel'
			));
		},
		modalClose(event) {
			this.modalVisibility = !event.keyCode === 27;
		},
		// modalEscClose(event) {
		// 	if (event.keyCode === 27) {
		// 		this.modalClose();
		// 	}
		// },
		carItemClassActive(index) {
			return {'active': this.selectedCarIndex === index}
		}
	},
	computed: {
		car() {
			return this.cars[this.selectedCarIndex]
		},
		phoneBtnText() {
			return this.phoneVisibility ? 'Hide Phone' : 'Show Phone';
		},
		filteredCars() {
			return this.cars.filter((car) => {
				return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1;
			});
		}
	},
	filters: {
		formatDate(date) {
			return date.toLocaleString();
		}
	}
});
