var num = 1

var write0 = document.createElement('p')
var write1 = document.createElement('p')
var write2 = document.createElement('p')
var write3 = document.createElement('p')
var write4 = document.createElement('p')
var write5 = document.createElement('p')
var write6 = document.createElement('p')
var write7 = document.createElement('p')
var write8 = document.createElement('p')
var windiv = document.createElement('div')

function write() {
  
  num++ 
  
  if (num == 2) {
    bruh ="X"
    
    
  }
  else if (num == 4) {
    bruh ="X"  
    
  }
  else if (num == 6) {
    bruh ="X"
    
  }
  else if (num == 8) {
    bruh ="X"
    
  }
  else if (num == 10) {
    bruh ="X"
    
  }

    
  else if (num == 3) {
    bruh ="O"
    
    
  }  
  else if (num == 5) {
    bruh ="O"
    
   
  }
  else if (num == 7) {
    bruh ="O"
    
   
  }
  else if (num == 9) {
    bruh ="O"
    
    
  }
  else if (num == 11) {
    bruh ="O"
    
   
  }
  
}



function done0 () {
  
}

function done1 () {
  
}

function done2 () {
  
}

function done3 () {
  
}

function done4 () {
  
}

function done5 () {
  
}

function done6 () {
  
}

function done7 () {
  
}

function done8 () {
  
}

function cell0 () {
  flag0 = done0;
  
  var cell0 = document.getElementById("cell0")
  write()
  write0.innerHTML = bruh
  cell0.appendChild(write0)
  
  if (bruh == "X") {
    entry0 += 1
    write0.style.color = "#7CFF01";
    turn_0()
  }
  else if (bruh =="O") {
    entry0 += 2
    write0.style.color = '#FFF205';
    turn_X()
  }
  
  check()
};
var flag0 = cell0



function cell1() {
  flag1 = done1;
  
  var cell1 = document.getElementById("cell1")
  write()
  write1.innerHTML = bruh
  cell1.appendChild(write1)
  
  if (bruh == "X") {
    entry1 += 1
    write1.style.color = "#7CFF01";
    turn_0()
  }
  else if (bruh =="O") {
    entry1 += 2
    write1.style.color = '#FFF205';
    turn_X()
  }
  
  check()
}
var flag1 = cell1




function cell2() {
  flag2 = done2;
  var cell2 = document.getElementById("cell2")
  write()
  write2.innerHTML = bruh
  cell2.appendChild(write2)
  
  if (bruh == "X") {
    entry2 += 1
    write2.style.color = "#7CFF01";
    turn_0()
  }
  else if (bruh =="O") {
    entry2 += 2
    write2.style.color = '#FFF205';
    turn_X()
  }
  
  check()
}
var flag2 = cell2



function cell3() {
  flag3 = done3;
  var cell3 = document.getElementById("cell3")
  write()
  write3.innerHTML = bruh
  cell3.appendChild(write3)
  
  if (bruh == "X") {
    entry3 += 1
    write3.style.color = "#7CFF01";
    turn_0()
  }
  else if (bruh =="O") {
    entry3 += 2
    write3.style.color = '#FFF205';
    turn_X()
  }
  
  check()
}
var flag3 = cell3

function cell4() {
  flag4 = done4;
  var cell4 = document.getElementById("cell4")
  write()
  write4.innerHTML = bruh
  cell4.appendChild(write4)
  
  if (bruh == "X") {
    entry4 += 1
    write4.style.color = "#7CFF01";
    turn_0()
  }
  else if (bruh =="O") {
    entry4 += 2
    write4.style.color = '#FFF205';
    turn_X()
  }
  
  check()
}
var flag4 = cell4

function cell5() {
  flag5 = done5;
  var cell5 = document.getElementById("cell5")
  write()
  write5.innerHTML = bruh
  cell5.appendChild(write5)

  if (bruh == "X") {
    entry5 += 1
    write5.style.color = "#7CFF01";
    turn_0()
  }
  else if (bruh =="O") {
    entry5 += 2
    write5.style.color = '#FFF205';
    turn_X()
  }
  
  check()
}
var flag5 = cell5


function cell6() {
  flag6 = done6;
  var cell6 = document.getElementById("cell6")
  write()
  write6.innerHTML = bruh
  cell6.appendChild(write6)

  if (bruh == "X") {
    entry6 += 1
    write6.style.color = "#7CFF01";
    turn_0()
  }
  else if (bruh =="O") {
    entry6 += 2
    write6.style.color = '#FFF205';
    turn_X()
  }
  
  check()
}
var flag6 = cell6



function cell7() {
  flag7 = done7;
  var cell7 = document.getElementById("cell7")
  write()
  write7.innerHTML = bruh
  cell7.appendChild(write7)

  if (bruh == "X") {
    entry7 += 1
    write7.style.color = "#7CFF01";
    turn_0()
  }
  else if (bruh =="O") {
    entry7 += 2
    write7.style.color = '#FFF205';
    turn_X()
  }
  
  check()
}
var flag7 = cell7




function cell8() {
  flag8 = done8;
  var cell8 = document.getElementById("cell8")
  write()
  write8.innerHTML = bruh
  cell8.appendChild(write8)

  if (bruh == "X") {
    entry8 += 1
    write8.style.color = "#7CFF01";
    turn_0()
  }
  else if (bruh =="O") {
    entry8 += 2
    write8.style.color = '#FFF205';
    turn_X()
  }
  
  
  check()
}
var flag8 = cell8






function restartbtn() {
  write0.remove()
  write1.remove()
  write2.remove()
  
  write3.remove()
  write4.remove()
  write5.remove()
  
  write6.remove()
  write7.remove()
  write8.remove()


  flag0 = cell0;
  flag1 = cell1;
  flag2 = cell2;

  flag3 = cell3;
  flag4 = cell4;
  flag5 = cell5;

  flag6 = cell6;
  flag7 = cell7;
  flag8 = cell8;
  num = 1
  
  entry0 = 0
  entry1 = 0
  entry2 = 0

  entry3 = 0
  entry4 = 0
  entry5 = 0

  entry6 = 0
  entry7 = 0
  entry8 = 0
  var game_status = document.getElementById('game-status')
  game_status.innerHTML = "It's X' turn"

  windiv.remove()

  
}

var entry0 = 0
var entry1 = 0
var entry2 = 0

var entry3 = 0
var entry4 = 0
var entry5 = 0

var entry6 = 0
var entry7 = 0
var entry8 = 0


function check() {
  if (entry0 == 1 && entry1 == 1 && entry2 == 1) {  
    reportx()
    
  }
    
  else if (entry0 == 1 && entry3 == 1 && entry6 == 1) {
    reportx()
  }

  else if (entry0 == 1 && entry4 == 1 && entry8 == 1) {
    reportx()
  }

  else if (entry1 == 1 && entry4 == 1 && entry7 == 1) {
    reportx()
  }

  else if (entry2 == 1 && entry5 == 1 && entry8 == 1) {
    reportx()
  }

  else if (entry2 ==1 && entry4 == 1 && entry6 == 1) {
    reportx()
  }

  else if (entry3 == 1 && entry4 == 1 && entry5 == 1) {
    reportx()
  }

  else if (entry6 == 1 && entry7 == 1 && entry8 == 1) {
    reportx()
  }



  else if (entry0 == 2 && entry1 == 2 && entry2 == 2) {
    reporto()
  }
    
  else if (entry0 == 2 && entry3 == 2 && entry6 == 2) {
    reporto()
  }

  else if (entry0 == 2 && entry4 == 2 && entry8 == 2) {
    reporto()
  }

  else if (entry1 == 2 && entry4 == 2 && entry7 == 2) {
    reporto()
  }

  else if (entry2 == 2 && entry5 == 2 && entry8 == 2) {
    reporto()
  }

  else if (entry2 == 2 && entry4 == 2 && entry6 == 2) {
    reporto()
  }

  else if (entry3 == 2 && entry4 == 2 && entry5 == 2) {
    reporto()
  }


  else if (entry6 == 2 && entry7 == 2 && entry8 == 2) {
    reporto()
  }

  if (num >= 10) {
    draw()
  }
}

function reportx(){
  var game_status = document.getElementById('game-status')
  game_status.innerHTML = "Player X wins"
  win()
  continues()
  
  addx()
  
}

function reporto() {
  var game_status = document.getElementById('game-status')
  game_status.innerHTML = "Player O wins"
  win()
  continues()
  addo()
}



function turn_X() {
  var game_status = document.getElementById("game-status")
    game_status.innerHTML = "It's X's turn"
} 

function turn_0() {
  var game_status = document.getElementById('game-status')
    game_status.innerHTML = "It's O's turn"
}

function green() {
  var green = '#7CFF01';
  green
  
}


function continues() {
  setTimeout(function () {
    var game_status = document.getElementById('game-status')
    game_status.innerHTML = "Click the restart button to continue"
  }, 2000)
  
}

function draw() {
  
  
  setTimeout(function () {
    var game_status = document.getElementById('game-status')
    game_status.innerHTML = "Click the restart button to continue"
  }, 2000)
}

function win() {
  var winning_message = document.getElementById("winning_message")

  
  
  
  winning_message.append(windiv)
  
}

function addx() {
  var player1 = document.getElementById('player1')
  add = 1
  player1.value = parseInt(player1.value) + add
  
}
function addo() {
  var player2 = document.getElementById('player2')
  add = 1
  player2.value = parseInt(player2.value) + add
  
}

