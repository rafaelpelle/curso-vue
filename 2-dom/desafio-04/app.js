new Vue({
	el: '#desafio',
	data: {
		efeitoActive: false,
		intervalId: '',
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
