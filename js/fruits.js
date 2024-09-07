

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


let fruits = [
    { name: "Apple", hint: "Often associated with knowledge or temptation in myths" },
    { name: "Banana", hint: "Its skin has been the cause of many comic slips" },
    { name: "Orange", hint: "Known for its segmented structure and connection to vitamin C" },
    { name: "Mango", hint: "A tropical delight often enjoyed in its ripest, golden form" },
    { name: "Pineapple", hint: "Spiky on the outside, sweet and juicy on the inside" },
    { name: "Strawberry", hint: "This fruit has seeds on the outside instead of the inside" },
    { name: "Grapes", hint: "Sometimes dried to become a popular snack" },
    { name: "Watermelon", hint: "A summer favorite, known for its refreshing, watery content" },
    { name: "Blueberry", hint: "This small, blue fruit is often found in baked goods" },
    { name: "Peach", hint: "Associated with softness, both in texture and color" },
    { name: "Kiwi", hint: "Fuzzy on the outside, but bright and green on the inside" },
    { name: "Cherry", hint: "Often sits on top of desserts as a finishing touch" },
    { name: "Papaya", hint: "A fruit with a central cavity filled with small black seeds" },
    { name: "Lemon", hint: "This fruit's sourness often makes people pucker up" },
    { name: "Pomegranate", hint: "Packed with tiny, jewel-like seeds inside" },
    { name: "Avocado", hint: "Green and creamy, this fruit is often mistaken for a vegetable" },
    { name: "Dragonfruit", hint: "This exotic fruit has a vibrant skin and speckled flesh" },
    { name: "Raspberry", hint: "Tiny clusters form this delicate, tart fruit" },
    { name: "Coconut", hint: "Often associated with tropical beaches and refreshing water" },
    { name: "Passionfruit", hint: "Small but filled with intense, tart flavor" },
    { name: "Guava", hint: "Has a fragrant aroma and can be white or pink inside" },
    { name: "Pear", hint: "Shaped like a bell, this fruit is often softer when fully ripe" },
    { name: "Lychee", hint: "Small, red, and spiny on the outside, sweet and translucent inside" },
    { name: "Fig", hint: "Often associated with ancient times, this fruit has a soft, seedy texture" },
    { name: "Cantaloupe", hint: "Its orange flesh makes it a summer favorite" },
    { name: "Blackberry", hint: "This dark, juicy fruit grows on thorny bushes" },
    { name: "Tangerine", hint: "Similar to an orange but smaller and often easier to peel" },
    { name: "Apricot", hint: "A relative of the peach but typically smaller and less fuzzy" },
    { name: "Plum", hint: "Can be sweet or tart, often with a smooth skin and juicy flesh" },
    { name: "Jackfruit", hint: "Known as the largest tree-borne fruit and often used as a meat substitute" }
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
    
    var word = fruits[random].name;
    word.toUpperCase();
    console.log(word);
    creatHint(random);
    return word;
}



function creatHint(random){



    var hint = `<div class="d-flex gap-2 justify-content-center">
        <p class="text-danger h5">Hint : </p>
        <p class="h5">${fruits[random].hint}</p>
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
