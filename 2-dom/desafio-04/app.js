new Vue({
	el: '#desafio',
	data: {
		efeitoActive: false,
		intervalId: '',
		userClass: 'Digite uma classe',
		userClass2: 'Digite uma classe',
		userStyle: 'Digite um estilo',
		boldActive: 'false',
	},
	computed: {
		efeitoStyle() {
			return {
				destaque: this.efeitoActive,
				encolher: !this.efeitoActive,
			}
		},
		selectedStyle() {
			switch(this.userStyle) {
				case 'big':
					return { fontSize: '3em' }
				case 'bold':
					return { fontWeight: 900 }
				case 'big bold':
					return { fontSize: '3em', fontWeight: 900 }
				default:
					return { fontSize: '1em', fontWeight: 300 }
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
