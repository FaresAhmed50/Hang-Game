


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


let fruits = [
    "Apple", "Banana", "Orange", "Mango", "Pineapple", "Strawberry", 
    "Grapes", "Watermelon", "Blueberry", "Peach", "Kiwi", "Cherry", 
    "Papaya", "Lemon", "Pomegranate", "Avocado", "Dragonfruit", 
    "Raspberry", "Coconut", "Passionfruit", "Guava", "Pear", "Lychee", 
    "Fig", "Cantaloupe", "Blackberry", "Tangerine", "Apricot", 
    "Plum", "Jackfruit"
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

    var random = Math.floor(Math.random() * fruits.length);

    console.log(random);
    
    var word = fruits[random];
    word.toUpperCase();
    console.log(word);
    
    return word;
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
        lose.classList.remove("d-none")
        lose.classList.add("d-block ");
    }
}
