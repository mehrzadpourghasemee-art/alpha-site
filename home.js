let username = 
localStorage.getItem("username");
alert("به الفایی ها خوش امدی !");

const button = 
document.getElementById("chatbtn").onclick = function() {
    window.location.href = "chat.html"
}


const game = 
document.getElementById("gamebtn").onclick = function() {
    window.location.href = "game.html"
}