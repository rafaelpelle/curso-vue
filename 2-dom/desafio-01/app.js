new Vue({
    el: '#desafio',
    data: {
        name: 'Rafael Pelle',
        age: 26,
        imageLink: 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
    },
    methods: {
        getTripleAge: function() {
            return this.age * 3
        },
        getRandomNumber: function() {
            return Math.random()
        }
    }
})