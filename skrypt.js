let i = 0;
let tyt = document.getElementById("title")
let yes = document.getElementById("b1");
let no = document.getElementById("b2");
let rozmiar1 = 200;
let rozmiar2 = 75;
let rozmiar3 = 50;

const nie = () => {
    i++;
    rozmiar1 = rozmiar1 + 40;
    rozmiar2 = rozmiar2 + 25;
    rozmiar3 = rozmiar3 + 12;
    
    yes.style.width = rozmiar1 + "px"; 
    yes.style.height = rozmiar2 + "px"; 
    yes.style.fontSize = rozmiar3 + "px";

    if (i == 12) {
        no.style.display = "none";
    }
}

const tak = () => {
     tyt.textContent = `:DDDDD`;
     yes.style.display = `none`;
     no.style.display = `none`;

     document.getElementById("zdj1").style.display = `none`; 

     document.getElementById("zdj2").style.display = `inline`;
     document.getElementById("zdj3").style.display = `inline`;
     document.getElementById("zdj4").style.display = `inline`;
}
