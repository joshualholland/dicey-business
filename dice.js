let integers = [1, 2, 3, 4, 5, 6]
let array = [];

class Die {
    constructor() {
        this.value;
        this.roll();
        this.div = document.createElement('div');
        this.div.classList.add('cube');
        this.div.textContent = this.value;
        document.body.append(this.div);
        this.div.addEventListener('click', () => {
            this.roll();
            this.div.textContent = this.value
        });
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            array.splice(-1, 1);
        });
    }

    roll() {
        this.value = Math.floor(Math.random() * integers.length) + 1;
    }
}
// generate dice
document.getElementById('dice').addEventListener('click', () => {
    let newDice = new Die();
    array.push(newDice);
})
// shuffle the dice
document.getElementById('shuffle').addEventListener('click', () => {
    array.forEach(die => {
        die.roll();
        die.div.textContent = die.value;
    })
});
// sum of the dice on the page
document.getElementById('sum').addEventListener('click', () => {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i].value;
    }
    alert(`The sum of all the dice on the page is ${sum}`)
});




