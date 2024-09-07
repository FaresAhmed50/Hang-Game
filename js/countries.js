

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


let countries = [
    { name: "Brazil", hint: "Has the most World Cup wins in football history" },
    { name: "Japan", hint: "An archipelago located along the Pacific Ring of Fire" },
    { name: "Canada", hint: "This country has the longest coastline in the world" },
    { name: "Germany", hint: "Known for its automotive industry, producing famous luxury cars" },
    { name: "Australia", hint: "Has a vast interior desert area known as the Outback" },
    { name: "India", hint: "The second-most populous country, with a rapidly growing tech industry" },
    { name: "France", hint: "This country's language is known as the 'language of love'" },
    { name: "Italy", hint: "This country has more UNESCO World Heritage sites than any other" },
    { name: "Egypt", hint: "Home to one of the Seven Wonders of the Ancient World" },
    { name: "Russia", hint: "Home to Lake Baikal, the world's deepest freshwater lake" },
    { name: "China", hint: "This country invented paper, gunpowder, and the compass" },
    { name: "Mexico", hint: "Home to the world's smallest volcano" },
    { name: "South Africa", hint: "One of only a few countries with three capital cities" },
    { name: "United Kingdom", hint: "This country is made up of four distinct nations" },
    { name: "Argentina", hint: "This country claims the Falkland Islands, despite opposition" },
    { name: "Spain", hint: "Home to the Sagrada Familia, a famous unfinished basilica" },
    { name: "South Korea", hint: "Borders one of the most militarized zones in the world" },
    { name: "Turkey", hint: "Once home to the capital of the Byzantine and Ottoman empires" },
    { name: "Greece", hint: "Birthplace of democracy and the Olympic Games" },
    { name: "Sweden", hint: "This country awards the Nobel Prizes each year" },
    { name: "Norway", hint: "One of the richest countries in the world, due to its oil reserves" },
    { name: "Saudi Arabia", hint: "One of the world's largest oil producers" },
    { name: "Pakistan", hint: "This country has a disputed region that borders China and India" },
    { name: "Thailand", hint: "Home to the only Southeast Asian country never colonized by a European power" },
    { name: "Vietnam", hint: "This country has one of the world's fastest-growing economies" },
    { name: "Kenya", hint: "Known for the Great Rift Valley and world-class marathon runners" },
    { name: "Poland", hint: "Location of one of the most significant WWII concentration camps" },
    { name: "Philippines", hint: "Named after a Spanish king, this country is prone to typhoons" },
    { name: "Ukraine", hint: "Home to the Chernobyl disaster site" },
    { name: "New Zealand", hint: "One of the last major landmasses to be settled by humans" },
    { name: "Malaysia", hint: "Split between two regions: Peninsular and Borneo" },
    { name: "Indonesia", hint: "Has over 17,000 islands, the most of any country" },
    { name: "Finland", hint: "Ranks highly in education and is home to a popular phone brand" },
    { name: "Switzerland", hint: "A neutral country that is home to the Red Cross" },
    { name: "Netherlands", hint: "The lowest country in Europe, known for reclaiming land from the sea" },
    { name: "Denmark", hint: "Considered the birthplace of modern happiness studies" },
    { name: "Portugal", hint: "Once led the world in exploration and colonization" },
    { name: "Chile", hint: "Home to the driest desert in the world" },
    { name: "Peru", hint: "Location of one of the world's most famous lost cities" },
    { name: "Cuba", hint: "The only country in the Americas with a Communist government" },
    { name: "Iceland", hint: "Has no standing army and uses geothermal energy to power much of its infrastructure" },
    { name: "Ireland", hint: "Its flag features green, white, and orange, symbolizing peace between factions" },
    { name: "Morocco", hint: "Its largest city is not the capital, and it has a famous blue city" },
    { name: "Israel", hint: "Located on the eastern shore of the Mediterranean Sea with significant religious sites" },
    { name: "Colombia", hint: "Has coastlines on both the Pacific Ocean and the Caribbean Sea" },
    { name: "Nigeria", hint: "This country is home to Africa's largest economy and film industry" },
    { name: "Ethiopia", hint: "The only African country never colonized, and the site of the Ark of the Covenant is rumored here" }
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

    var random = Math.floor(Math.random() * countries.length);

    console.log(random);
    
    var word = countries[random].name;
    word.toUpperCase();
    console.log(word);
    creatHint(random);
    
    return word;
}


function creatHint(random){



    var hint = `<div class="d-flex gap-2 justify-content-center">
        <p class="text-danger h5">Hint : </p>
        <p class="h5">${countries[random].hint}</p>
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
