 player1_name = localStorage.getItem("player1")
 player2_name = localStorage.getItem("player2")

 player1_s = 0
 player2_s = 0

 document.getElementById("player1_name").innerHTML = player1_name
 document.getElementById("player2_name").innerHTML = player2_name

 document.getElementById("player1_score").innerHTML = player1_s
 document.getElementById("player2_score").innerHTML = player2_s

 document.getElementById("Question_Turn").innerHTML = "Question Turn : " + player1_name
 document.getElementById("Answer_Turn").innerHTML = "Answer Turn : " + player2_name




 function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    lenght_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(lenght_divide_2);
    
    console.log(charAt2);

    lenght_minus_1 = word.length - 1; 
    charAt3 = word.charAt(lenght_minus_1); 
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);




    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";

    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "Player1"

answer_turn = "Player2"

function check() {
   Answer = document.getElementById("input_check_box").value;

   Answerfinall= Answer.toLowerCase()

   if(Answerfinall == word) {
       if( answer_turn == "Player2") {
       player2_s = player2_s + 1
       document.getElementById("player2_score").innerHTML = player2_s
       }
       else{
           player1_s = player1_s + 1
           document.getElementById("player1_score").innerHTML = player1_s
       }
   }
   if(question_turn == "Player1") {
       question_turn = "Player2"
       document.getElementById("Question_Turn").innerHTML = "Question Turn : " + player2_name 
   }
   else{
       question_turn = "Player1"
       document.getElementById("Question_Turn").innerHTML = "Question Turn : " + player1_name
   }
   if(answer_turn == "Player1") {
       answer_turn = "Player2"
       document.getElementById("Answer_Turn").innerHTML = "Answer Turn : " + player2_name
   }
   else{
       answer_turn = "Player1"
       document.getElementById("Answer_Turn").innerHTML = "Answer Turn : " + player1_name
   }

   document.getElementById("output").innerHTML = ""
}