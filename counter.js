const plus = document.querySelector(".plus");
plus.addEventListener("click", plusHandleClick);

function plusHandleClick(){
    count += 1;
    console.log(count);
    counter.innerHTML=count;
}

let count = 0;
const minus = document.querySelector(".minus");
minus.addEventListener("click", minusHandleClick);

function minusHandleClick(){
    if(count === 0){
        alert("Yer Canne Have Nae Kitties Hen! Add Some More!")
    }
    else{
    count -=1;
    console.log(count);
    counter.innerHTML=count;}
}

const counter = document.querySelector(".kitty");

const reset = document.querySelector(".reset");

reset.addEventListener("click", resetHandleClick);

function resetHandleClick(){
    count = 0;
    counter.innerHTML=count;
}