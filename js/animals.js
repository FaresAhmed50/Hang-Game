var Hint = document.querySelector(".hint");
var keyBoard = document.querySelector(".key-bord");
var wordGess = document.querySelector(".word-gess");
var head = document.querySelector(".head");
var body = document.querySelector(".body");
var RA = document.querySelector(".right-arm");
var LA = document.querySelector(".left-arm");
var RL = document.querySelector(".left-leg");
var LL = document.querySelector(".right-leg");
var game = document.querySelector(".game");
var  win = document.querySelector(".win");
var lose = document.querySelector(".lose");


let animals = [
    { name: "Lion", hint: "Often associated with bravery and strength in many cultures" },
    { name: "Tiger", hint: "This animal is known for being elusive and solitary in the wild" },
    { name: "Elephant", hint: "Known to have excellent memory and strong family bonds" },
    { name: "Giraffe", hint: "Its unique body structure allows it to reach areas other animals can't" },
    { name: "Kangaroo", hint: "Native to a region known for its arid climate, this animal moves in leaps" },
    { name: "Panda", hint: "An animal that's often a symbol for conservation efforts" },
    { name: "Penguin", hint: "Thrives in harsh, icy environments, but never flies" },
    { name: "Dolphin", hint: "A creature famous for its intelligence and echolocation skills" },
    { name: "Zebra", hint: "No two of these animals share the same pattern" },
    { name: "Cheetah", hint: "Known for bursts of incredible speed over short distances" },
    { name: "Bear", hint: "A powerful animal often seen preparing for long periods of rest" },
    { name: "Wolf", hint: "This animal is known for its teamwork and communication" },
    { name: "Rhinoceros", hint: "Despite its tough appearance, this animal has poor eyesight" },
    { name: "Hippo", hint: "Spends much of its life submerged, yet it's highly territorial on land" },
    { name: "Leopard", hint: "An elusive animal known for its rosette-like spots and agility" },
    { name: "Crocodile", hint: "Ancient and powerful, this animal often waits patiently for hours" },
    { name: "Koala", hint: "It has a diet that's surprisingly specific and limited to one type of leaf" },
    { name: "Eagle", hint: "This creature is known for its keen sight and lofty perches" },
    { name: "Shark", hint: "A misunderstood predator, often highlighted for its rows of teeth" },
    { name: "Whale", hint: "This massive ocean dweller communicates through complex sounds" },
    { name: "Ostrich", hint: "This animal has impressive speed despite its inability to leave the ground" },
    { name: "Peacock", hint: "Famous for its elaborate displays, often associated with beauty and pride" },
    { name: "Frog", hint: "A creature that undergoes significant transformation during its life" },
    { name: "Snake", hint: "Its movement is silent, and its skin is shed periodically" },
    { name: "Turtle", hint: "Known for its longevity and protective, natural armor" },
    { name: "Bat", hint: "One of the few creatures that uses sound to navigate its surroundings" },
    { name: "Octopus", hint: "Has the ability to blend into its environment using remarkable camouflage" },
    { name: "Fox", hint: "Often portrayed as cunning, this animal is mostly active during twilight" },
    { name: "Rabbit", hint: "This animal is known for being a symbol of fertility in many cultures" },
    { name: "Monkey", hint: "A social creature known for its curiosity and dexterous hands" }
];


var counter = 0 ;



var choosen_word = choose_word();
var len = choosen_word.length;
var visted = new Array(len).fill(false);





function creat_key_board(){

var num = 65;
var cartona = "";

for(var i = 0 ; i < 26  ; i++){

    cartona += `<button class="btn btn-outline-primary shadow  mb-2  rounded  me-1  " id="${String.fromCharCode(num)}">${String.fromCharCode(num)} </button>`
    num++;
}

keyBoard.innerHTML = cartona;
}


function creat_gess(word){

    var cartona = "";
    // console.log(word);
    

    for (let i = 0; i < word.length; i++) {
        cartona += `<p class="me-2 text-center mb-4" id="${i+1}">_</p>`
    }

    wordGess.innerHTML= cartona;
}


creat_key_board();
creat_gess(choosen_word);




keyBoard.addEventListener("click" , function(e){
    var value = e.target.id;

    isLose();
    is_present(value , choosen_word );

})


function choose_word(){

    var random = Math.floor(Math.random() * animals.length);

    console.log(random);
    
    var word = animals[random].name;
    word.toUpperCase();
    console.log(word);


    creatHint(random);
    return word;
}



function creatHint(random){



    var hint = `<div class="d-flex gap-2 justify-content-center">
        <p class="text-danger h5">Hint : </p>
        <p class="h5">${animals[random].hint}</p>
        </div>`

    Hint.innerHTML = hint;


}





function is_present(value , word){


    let present = false;


    for (let i = 0; i < word.length; i++) {

        // console.log(word[i] , visted[i]);
        
        if(value.toUpperCase() == word[i].toUpperCase() && visted[i] == false ){
            // console.log(value , i);
            present = true;
            Fill(i , value);
            visted[i] = true
        }
    }


    if(! present ){
        not_present();
    }

    isWin();
}


function not_present(){

    if(head.classList.contains("d-none")){
        head.classList.remove("d-none");
        head.classList.add("d-block");
    }else if ( body.classList.contains("d-none") ){
        body.classList.remove("d-none");
        body.classList.add("d-block");
    }else if (RA.classList.contains("d-none")){
        RA.classList.remove("d-none");
        RA.classList.add("d-block");
    }else if(LA.classList.contains("d-none")){
        LA.classList.remove("d-none");
        LA.classList.add("d-block");
    }else if(RL.classList.contains("d-none")){
        RL.classList.remove("d-none");
        RL.classList.add("d-block");
    }else if(LL.classList.contains("d-none")){
        LL.classList.remove("d-none");
        LL.classList.add("d-block");
    }

    counter++;
    // console.log(counter);
}


function Fill(index , value){

    var target = wordGess.childNodes.item(index);

    target.classList.add("d-none");
    target.innerHTML = value;
    target.classList.remove("d-none");
    target.classList.add("d-block");    
}


function isWin(){

    if(visted.every(val => val == true)){
        console.log("win");
        game.classList.add("d-none");
        wordGess.classList.add("d-none");
        keyBoard.classList.add("d-none");
        Hint.classList.add("d-none");
        win.classList.remove("d-none")
        win.classList.add("d-block ");
    }

}


function isLose(){

    if(counter == 5){
        console.log("lose");
        game.classList.add("d-none");
        wordGess.classList.add("d-none");
        keyBoard.classList.add("d-none");
        Hint.classList.add("d-none");
        lose.classList.remove("d-none")
        lose.classList.add("d-block ");
    }
}
