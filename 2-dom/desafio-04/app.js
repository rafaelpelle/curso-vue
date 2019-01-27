new Vue({
	el: '#desafio',
	data: {
		efeitoActive: false,
		effectIntervalId: '',
		userClass: 'Digite uma classe',
		userClass2: 'Digite uma classe',
		userStyle: 'Digite um estilo',
		boldActive: 'false',
		progressIntervalId: '',
		progress: 0,
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
		progressStyle() {
			return { width: (this.progress/10) + 'vw' }
		},
	},
	methods: {
		iniciarEfeito() {
			this.effectIntervalId = setInterval(() => {
				this.efeitoActive = !this.efeitoActive
			}, 100)
		},
		finalizarEfeito() {
			clearInterval(this.effectIntervalId)
		},
		iniciarProgresso() {
			this.progressIntervalId = setInterval(() => {
				if (this.progress < 1000) {
					this.progress++
				} else {
					this.finalizarProgresso()
				}
			}, 10)
		},
		finalizarProgresso() {
			clearInterval(this.progressIntervalId)
		},
		reiniciarProgresso() {
			this.progress = 0
		}
	}
})
