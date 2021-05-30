const knopka1 = document.getElementById('btn');

const knopka2 = document.getElementById('btn1');

const knopka3 = document.getElementById('btn2');

let arr1 = ["true", "привет", "23.05.2021"];

let arr2 = ["true", "привет", "ssss.05.2021"];

let arr3 = ["true", "привет", "ssss.dasdasdasdasasd.2021"];

knopka1.addEventListener('click',function ffa(){

    alert(arr1);

} )



const mass2 = function ff(){

    alert(arr2);

} 

knopka2.addEventListener('click', mass2);

const mass3 = function(){
    return arr3
}

function gar(){
    alert(mass3());
}

knopka3.addEventListener('click', gar);

