const text = document.getElementsByClassName("text");

window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || 
                           ( typeof window.performance != "undefined" && 
                                window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
      // Handle page restore.
      console.log("hello");
      window.location.reload();
    }
  });

function randomChar() {
    const chars = ["j","o","e","l"];
    let picker = Math.trunc(Math.random() * chars.length);
    return chars[picker];
}

function setChar(char) {
    for (let i = 0; i < text.length; i++){
        for (let n = 0; n < text[i].innerText.length; n++){
            if (text[i].innerText[n] != String.fromCharCode(160)){
                text[i].innerText = text[i].innerText.slice(0,n) + char + text[i].innerText.slice(n+1);
            }
        }
    }
}

function updateChar() {
    for (let i = 0; i < text.length; i++){
        n = Math.trunc(Math.random() * text[i].innerText.length)
        if (text[i].innerText[n] != String.fromCharCode(160)){
            text[i].innerText = text[i].innerText.slice(0,n) + randomChar() + text[i].innerText.slice(n+1);
        }
    }
}

function fadeOut2past_work() {
    fading = true;
    b1.style.display = "none";
    b2.style.display = "none";
    b3.style.display = "none";
    b4.style.visibility = "hidden";
    tip.style.visibility = "hidden";
    let timesRun = 0;
    var handle = setInterval(function() {
        timesRun += 1;
        if(timesRun == 70){
            clearInterval(handle);
            clearInterval(charHandle);
            setChar(String.fromCharCode(160));
            window.location.href = "past_work.html";
        }
        for (let i = 0; i < text.length; i++){
            n = Math.trunc(Math.random() * text[i].innerText.length)
            if (text[i].innerText[n] != String.fromCharCode(160)){
                text[i].innerText = text[i].innerText.slice(0,n) + String.fromCharCode(160) + text[i].innerText.slice(n+1);
            }
        }
    },20);
}

function fadeOut2project_A() {
    fading = true;
    b1.style.display = "none";
    b2.style.display = "none";
    b3.style.display = "none";
    b4.style.visibility = "hidden";
    tip.style.visibility = "hidden";
    let timesRun = 0;
    var handle = setInterval(function() {
        timesRun += 1;
        if(timesRun == 70){
            clearInterval(handle);
            clearInterval(charHandle);
            setChar(String.fromCharCode(160));
            window.location.href = "https://joelgw1.github.io/Perspective/";
        }
        for (let i = 0; i < text.length; i++){
            n = Math.trunc(Math.random() * text[i].innerText.length)
            if (text[i].innerText[n] != String.fromCharCode(160)){
                text[i].innerText = text[i].innerText.slice(0,n) + String.fromCharCode(160) + text[i].innerText.slice(n+1);
            }
        }
    },20);
}

function fadeOut2essays() {
    fading = true;
    b1.style.visibility = "hidden";
    b2.style.display = "none";
    b3.style.display = "none";
    b4.style.display = "none";
    tip.style.visibility = "hidden";
    let timesRun = 0;
    var handle = setInterval(function() {
        timesRun += 1;
        if(timesRun == 70){
            clearInterval(handle);
            clearInterval(charHandle);
            setChar(String.fromCharCode(160));
            window.location.href = "essays.html";
        }
        for (let i = 0; i < text.length; i++){
            n = Math.trunc(Math.random() * text[i].innerText.length)
            if (text[i].innerText[n] != String.fromCharCode(160)){
                text[i].innerText = text[i].innerText.slice(0,n) + String.fromCharCode(160) + text[i].innerText.slice(n+1);
            }
        }
    },20);
}

function fadeOut2research() {
    fading = true;
    b1.style.visibility = "hidden";
    b2.style.display = "none";
    b3.style.display = "none";
    b4.style.display = "none";
    tip.style.visibility = "hidden";
    let timesRun = 0;
    var handle = setInterval(function() {
        timesRun += 1;
        if(timesRun == 70){
            clearInterval(handle);
            clearInterval(charHandle);
            setChar(String.fromCharCode(160));
            window.location.href = "research.html";
        }
        for (let i = 0; i < text.length; i++){
            n = Math.trunc(Math.random() * text[i].innerText.length)
            if (text[i].innerText[n] != String.fromCharCode(160)){
                text[i].innerText = text[i].innerText.slice(0,n) + String.fromCharCode(160) + text[i].innerText.slice(n+1);
            }
        }
    },20);
}

///
const b1 = document.getElementById("past_work");
const b2 = document.getElementById("project_A");
const b3 = document.getElementById("essays");
const b4 = document.getElementById("research");
const J = document.getElementById("J");
const O = document.getElementById("O");
const E = document.getElementById("E");
const L = document.getElementById("L");
const tip = document.getElementById("tip");

const character = document.getElementById("character");

function showb1() {
    b1.style.visibility = "visible";
    b1.style.cursor = "pointer";
    J.style.opacity = "20%";
    J.style.cursor = "pointer";
}

function hideb1() {
    b1.style.visibility = "hidden";
    J.style.opacity = "100%";
}


function showb2() {
    b2.style.visibility = "visible";
    b2.style.cursor = "pointer";
    O.style.opacity = "20%";
    O.style.cursor = "pointer";
}

function hideb2() {
    b2.style.visibility = "hidden";
    O.style.opacity = "100%";
}


function showb3() {
    b3.style.visibility = "visible";
    b3.style.cursor = "pointer";
    E.style.opacity = "20%";
    E.style.cursor = "pointer";
}

function hideb3() {
    b3.style.visibility = "hidden";
    E.style.opacity = "100%";
}


function showb4() {
    b4.style.visibility = "visible";
    b4.style.cursor = "pointer";
    L.style.opacity = "20%";
    L.style.cursor = "pointer";
}

function hideb4() {
    b4.style.visibility = "hidden";
    L.style.opacity = "100%";
}

setChar(randomChar());
var charHandle = setInterval(updateChar,100);
