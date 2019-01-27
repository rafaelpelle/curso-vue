new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('Exibir Alerta')
        },
        changeValue(event) {
            this.valor = event.target.value
        }
    }
})