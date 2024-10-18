/**
 * 2.6 - Connecting HTML to JavaScript!
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/


/*** Functions ***/

// Return a random integer from `min` to `max`, inclusive
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let my_div = document.getElementById("try_me");

console.log(my_div.textContent);

my_div.textContent = "Hi mom!";

document.getElementById("d6").addEventListener("click", roll_d6)
document.getElementById("d8").addEventListener("click", roll_d8)
document.getElementById("d6").addEventListener("mouseenter", d6_enter)
document.getElementById("d6").addEventListener("mouseleave", d6_leave)
document.getElementById("enter").addEventListener("click", greeting)
document.getElementById("user_input").addEventListener("input", key_log)

document.getElementById("swap_pic").addEventListener("click", swap)

let which_pic = 1

function swap() {
    if (which_pic ==1) {    
    document.getElementById("swap_pic").src = "./image/jurin.jpg"
    which_pic = 2 
    } else {
    document.getElementById("swap_pic").src = "./image/chisa.jpg"  
    which_pic = 1 
    }
}

function randInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min
}

function roll_d6() {
let roll = randInt(1,6)
document.getElementById("die_roll").textContent = roll
}

function roll_d8() {
    let roll = randInt(1,8)
    document.getElementById("die_roll").textContent = roll
    }

function d6_enter() {
    document.getElementById("die").textContent = "💝"
}

function d6_leave() {
    document.getElementById("die").textContent = "🎲"
}

function greeting() {
let name = document.getElementById("user_input").value
document.getElementById("greeting").textContent = `Hello ${name}!`
document.getElementById("user_input").value = ""
} 

function key_log() {
    console.log(document.getElementById("user_input").value)
}
