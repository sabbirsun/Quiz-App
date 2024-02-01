const myBTN = document.querySelector(".myBTN button");
const RulesBox = document.querySelector(".RulesBox");
const ExitBTN = document.querySelector(".buttons .ExitBTN");
const ContinueBTN = document.querySelector(".buttons .ContinueBTN");
const Question = document.querySelector(".Question");

myBTN.onclick = () =>{
    RulesBox.classList.add("activeInfo");
}

ExitBTN.onclick = () =>{
    RulesBox.classList.remove("activeInfo");
}

ContinueBTN.onclick = () =>{
    RulesBox.classList.remove("activeQuiz");
    Question.classList.add("activeQuiz");
}