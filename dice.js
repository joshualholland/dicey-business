let integers = [1, 2, 3, 4, 5, 6]
let array = [];

class Die {
    constructor(value) {
        this.value = value,
        this.div = $('<div class="cube"></div>')
        array.push(this),
        $('#container').append(`<div class="cube"></div>`)
    }
    
    roll() {
        this.value = Math.floor(Math.random() * integers.length) + 1;
        $('.cube').text(this.value)
    }
}
$('#dice').click(function () {
    let newDice = new Die()
    newDice.roll();
});
// $('#shuffle').click(function () {
    
// })



