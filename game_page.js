player_1=localStorage.getItem("player1_name");
player_2=localStorage.getItem("player2_name");
player_1_score=0;
player_2_score=0;

document.getElementById("player1_name").innerHTML=player_1+":";
document.getElementById("player2_name").innerHTML=player_2+":";
document.getElementById("player1_name_score").innerHTML=player_1_score;
document.getElementById("player2_name_score").innerHTML=player_2_score;
document.getElementById("player_question_turn").innerHTML="Question Turn:" + player_1;
document.getElementById("player_answer_turn").innerHTML="Answer Turn:" + player_2;

function send(){
    number1=document.getElementById("1").value;
    number2=document.getElementById("2").value
    q=number1 + "x" + number2;

    value=Math.q;



    Question_word="<h4 id='Question'> Q." + q + "</h4>";
    input="<br> Answer: <input type='text' id='input_box'>";
    button_check="<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row= Question_word + input + button_check;
    document.getElementById("output").innerHTML=row;
    document.getElementById(q).value=" ";
}

question_turn="player1";
answer_turn="player2";

function check(){

 get_answer=document.getElementById("input_box").value;
 answer = get_answer.toLowerCase();
 console.log("answer in lowercase is = " + answer);
if(answer==value){
if (answer_turn=="player1"){
    player_1_score = player_1_score + 1;
    document.getElementById("player1_name_score").innerHTML = player_1_score;
}
else{
    player_2_score = player_2_score + 1;
    document.getElementById("player2_name_score").innerHTML = player_2_score;
}
}
if(question_turn=="player1"){
    question_turn = "player2";
    document.getElementById("player_question_turn").innerHTML="Question Turn:" + player_2;
}
else{
    question_turn="player1";
    document.getElementById("player_question_turn").innerHTML="Question Turn:" + player_1;
}
if(answer_turn=="player1"){
    answer_turn = "player2";
    document.getElementById("player_answer_turn").innerHTML="Answer Turn:" + player_2;
}
else{
    question_turn = "player1";
    document.getElementById("player_answer_turn").innerHTML="Answer Turn:" + player_1;
}
document.getElementById("output").innerHTML=" ";
}