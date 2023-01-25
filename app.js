const colours = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const colour = document.querySelector(".colour");

btn.addEventListener('click', function(){
    //get random num between 0 and 3 
    const rand = getRandomNumber();
    console.log(rand);
    document.body.style.backgroundColor= colours[rand];
    colour.textContent = colours[rand];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colours.length);
};