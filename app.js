var imge = document.querySelector('img')
var start = document.getElementById('start')
var reset = document.getElementById('stop')
var start_i = 0
var time = 0
var global_r1;

var score = document.querySelector('.scoreBoard .Score p')
var timesPlayed = document.querySelector('.scoreBoard .timesPlayed p')
var tp=0
var game_Score = 0

var Loading = document.querySelector('.BasePage p')

var Popup = document.querySelector('.Popup')
var Popup_Text = document.querySelector('.Popup h1')
var Popup_Close = document.querySelector('.Popup img')

var Current_selection = document.querySelector('.Current_Selection p')

var mobile = document.querySelector('.Mobile')

var button_Value = 0

var b1 = document.getElementById('b1')
var b2 = document.getElementById('b2')
var b3 = document.getElementById('b3')
var b4 = document.getElementById('b4')
var b5 = document.getElementById('b5')
var b6 = document.getElementById('b6')

b1.onclick = ()=>{
    button_Value = 1
    Current_selection.innerHTML = button_Value

}
b2.onclick = ()=>{
    button_Value = 2
    Current_selection.innerHTML = button_Value

}
b3.onclick = ()=>{
    button_Value = 3
    Current_selection.innerHTML = button_Value

}
b4.onclick = ()=>{
    button_Value = 4
    Current_selection.innerHTML = button_Value

}
b5.onclick = ()=>{
    button_Value = 5
    Current_selection.innerHTML = button_Value

}
b6.onclick = ()=>{
    button_Value = 6
    Current_selection.innerHTML = button_Value

}

var timer;

function time_function(){
    if(button_Value == 0){
        Current_selection.innerHTML = 'Please Select a value'
        clearInterval(timer)
    }
    else{
        if(time == 3){
            time = 0
            tp++
            var rN1 = Math.floor(Math.random() * 6) + 1
            global_r1 = rN1
            imge.src='i'+rN1+'.png'
            timesPlayed.innerHTML = tp
            Loading.innerHTML = 'Please Select a value and then click on Start to start the game'

            Correct_Answer(rN1)
        }
        else{
            time++
            Loading.innerHTML = 'Current Time = '+time+' sec'
        }
    }
    

}
function rotate(){
    imge.style.transform = 'rotate(360deg)'
}

start.onclick = ()=>{
  Popup.style.bottom='-20vh'
  timer = setInterval(time_function,1000)

}
reset.onclick = () =>{ 
    time = 0
    game_Score = 0
    tp = 0
    timesPlayed.innerHTML = tp
    score.innerText=game_Score
    Popup.style.bottom='-20vh'
    Loading.innerHTML = 'Please Select a value and then click on Start to start the game'
    Current_selection.innerHTML = 'none'
    clearInterval(timer)
}

function Correct_Answer(rN1){
    if(button_Value == rN1){
        Popup.style.bottom='0vh'
        Popup_Text.innerText = "Congrats You win 10 Points"
        game_Score = game_Score+10
        score.innerText=game_Score
        button_Value = 0
        clearInterval(timer)

    }
    else{
        Popup.style.bottom='0vh'
        Popup_Text.innerText = "Sorry Better Luck Next Time"
        button_Value = 0
        clearInterval(timer)

    }

}

Popup_Close.onclick = () =>{
    Popup.style.bottom='-20vh'
    timer = setInterval(time_function,1000)
}


window.onload = () =>{
    if(screen.width >=1100){
        mobile.style.display='none'
    }
    else{
        mobile.style.display='flex'
    }
}