new Vue({
	el: '#desafio',
	data: {
		efeitoActive: false,
		intervalId: '',
		userClass: 'Digite uma classe',
		userClass2: 'Digite uma classe',
		boldActive: 'false',
	},
	computed: {
		efeitoStyle() {
			return {
				destaque: this.efeitoActive,
				encolher: !this.efeitoActive,
			}
		},
	},
	methods: {
		iniciarEfeito() {
			this.intervalId = setInterval(() => {
				this.efeitoActive = !this.efeitoActive
			}, 100)
		},
		finalizarEfeito() {
			clearInterval(this.intervalId)
		},
		iniciarProgresso() {

		}
	}
})
