let board=document.getElementById("board");

let dice=document.getElementById("dice");

let number=document.getElementById("number");

let turn=document.getElementById("turn");


let cells=[];


// ساخت صفحه

for(let i=100;i>=1;i--){

let cell=document.createElement("div");

cell.className="cell";

cell.id="cell"+i;

cell.innerHTML=i;


board.appendChild(cell);


cells[i]=cell;

}


// مارها 🐍

let snakes={

99:78,
95:75,
89:68,
74:53,
62:19,
55:34,
48:26,
36:6,
27:9,
17:7

};


// پله ها 🪜

let ladders={

3:22,
8:31,
20:41,
28:84,
39:59,
51:72,
64:86,
70:92,
79:98

};



// اضافه کردن استیکر

for(let s in snakes){

cells[s].innerHTML+=" 🐍";

}


for(let l in ladders){

cells[l].innerHTML+=" 🪜";

}




let players=[

{
name:"بازیکن ۱",
pos:1,
color:"red"
},

{
name:"بازیکن ۲",
pos:1,
color:"blue"
}

];


let current=0;




function draw(){


document.querySelectorAll(".player")
.forEach(e=>e.remove());


players.forEach(p=>{


let div=document.createElement("div");


div.className="player "+p.color;


cells[p.pos].appendChild(div);


});


}




dice.onclick=function(){


let roll=Math.floor(Math.random()*6)+1;


number.innerHTML="عدد تاس: "+roll;



let p=players[current];


p.pos+=roll;



if(p.pos>100){

p.pos-=roll;

}



if(snakes[p.pos]){

alert("🐍 افتادی روی مار!");

p.pos=snakes[p.pos];

}



if(ladders[p.pos]){

alert("🪜 از پله بالا رفتی!");

p.pos=ladders[p.pos];

}



draw();



if(p.pos==100){

alert(p.name+" برنده شد 🎉");

location.reload();

}



current++;

if(current>1){

current=0;

}


turn.innerHTML="نوبت "+players[current].name;



};



draw();