const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');

const colour = document.querySelector('.colour');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


btn.addEventListener('click', function(){
    let hexColour = "#"
    for(let i=0; i<6; i++){
        hexColour += hex[getRandomInt(15)];
    }
    colour.textContent = hexColour;
    document.body.style.backgroundColor = hexColour;
})
