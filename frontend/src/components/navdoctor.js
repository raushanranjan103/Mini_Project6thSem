// import React, { useState } from 'react';
// import "./css/navdoctor.css"

// export default function Navdoctor() {
//     const questions = [

//         {
//             question: "Do you show zero interest in physical exercises?",
//             optionA: "always",
//             optionB: "mostly",
//             optionC: "sometimes",
//             optionD: "no",
//             correctOption: "optionD"
//         },
    
//         {
//            question: "Do you get some suicidal thoughts?",
//            optionA: "always",
//            optionB: "mostly",
//            optionC: "sometimes",
//            optionD: "no",
//            correctOption: "optionD"
//         },
    
//         {
//           question: "Do you face some anxiety and depression related issues?",
//           optionA: "always",
//           optionB: "mostly",
//           optionC: "sometimes",
//           optionD: "no",
//           correctOption: "optionD"
//         },
    
//         {
//           question: "Can you able to sleep at night?",
//           optionA: "always",
//           optionB: "mostly",
//           optionC: "sometimes",
//           optionD: "no",
//           correctOption: "optionA"
//         },
    
//         {
//           question: "Do you overthink face some inferiority complex issues and having difficulties in daily activities ?",
//           optionA: "always",
//           optionB: "mostly",
//           optionC: "sometimes",
//           optionD: "no",
//           correctOption: "optionD"
//         },
    
//         {
//           question: "Do you get Overwhelming feelings of helplessness or hopelessness¬†?",
//     optionA: "always",
//     optionB: "mostly",
//     optionC: "sometimes",
//     optionD: "no",
//     correctOption: "optionD"
//         },
    
//         {
//           question: "Do you have migraine issues?",
//             optionA: "always",
//             optionB: "mostly",
//             optionC: "sometimes",
//             optionD: "no",
//             correctOption: "optionD"
//         },
    
//         {
//           question: "Do you face impaired consciousness?",
//           optionA: "always",
//           optionB: "mostly",
//           optionC: "sometimes",
//           optionD: "no",
//           correctOption: "optionD"
//         },
    
//         {
//           question: "Do you feel laziness and weakness?",
//           optionA: "always",
//           optionB: "mostly",
//           optionC: "sometimes",
//           optionD: "no",
//           correctOption: "optionD"
//         },
    
//         {
//           question: "Do you face any discomfort while doing physical exercises?",
//           optionA: "always",
//           optionB: "mostly",
//           optionC: "sometimes",
//           optionD: "no",
//           correctOption: "optionD"
//         }
    
//     ]
    
    
//     let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions
    
//     function handleQuestions() {
//         //function to shuffle and push 10 questions to shuffledQuestions array
//     //app would be dealing with 10questions per session
//         while (shuffledQuestions.length <= 9) {
//             const random = questions[Math.floor(Math.random() * questions.length)]
//             if (!shuffledQuestions.includes(random)) {
//                 shuffledQuestions.push(random)
//             }
//         }
//     }
    
    
//     let questionNumber = 1 //holds the current question number
//     let playerScore = 0  //holds the player score
//     let wrongAttempt = 0 //amount of wrong answers picked by player
//     let indexNumber = 0 //will be used in displaying next question
    
//     // function for displaying next question in the array to dom
//     //also handles displaying players and quiz information to dom
//     function NextQuestion(index) {
//         handleQuestions()
//         const currentQuestion = shuffledQuestions[index]
//         document.getElementById("question-number").innerHTML = questionNumber;
//         document.getElementById("display-question").innerHTML = currentQuestion.question;
//         document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
//         document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
//         document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
//         document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
    
//     }
    
    
//     function checkForAnswer() {
//         const currentQuestion = shuffledQuestions[indexNumber] //gets current Question
//         const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
//         const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
//         let correctOption = null
    
//         options.forEach((option) => {
//             if (option.value === currentQuestionAnswer) {
//                 //get's correct's radio input with correct answer
//                 correctOption = option.labels[0].id
//             }
//         })
    
//         //checking to make sure a radio input has been checked or an option being chosen
//         if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
//             document.getElementById('option-modal').style.display = "flex"
//         }
    
//         //checking if checked radio button is same as answer
//         options.forEach((option) => {
//             if (option.checked === true && option.value === currentQuestionAnswer) {
//                 document.getElementById(correctOption).style.backgroundColor = "green"
//                 playerScore++ //adding to player's score
//                 indexNumber++ //adding 1 to index so has to display next question..
//                 //set to delay question number till when next question loads
//                 setTimeout(() => {
//                     questionNumber++
//                 }, 1000)
//             }
    
//             else if (option.checked && option.value !== currentQuestionAnswer) {
//                 const wrongLabelId = option.labels[0].id
    
//                 document.getElementById(correctOption).style.backgroundColor = "green"
//                 wrongAttempt++ //adds 1 to wrong attempts
//                 indexNumber++
//                 //set to delay question number till when next question loads
//                 setTimeout(() => {
//                     questionNumber++
//                 }, 1000)
//             }
//         })
//     }
    
    
    
//     //called when the next button is called
//     function handleNextQuestion() {
//         checkForAnswer() //check if player picked right or wrong option
//         unCheckRadioButtons()
//         //delays next question displaying for a second just for some effects so questions don't rush in on player
//         setTimeout(() => {
//             if (indexNumber <= 9) {
//     //displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
//                 NextQuestion(indexNumber)
//             }
//             else {
//                 handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
//             }
//             resetOptionBackground()
//         }, 1000);
//     }
    
//     //sets options background back to null after display the right/wrong colors
//     function resetOptionBackground() {
//         const options = document.getElementsByName("option");
//         options.forEach((option) => {
//             document.getElementById(option.labels[0].id).style.backgroundColor = ""
//         })
//     }
    
//     // unchecking all radio buttons for next question(can be done with map or foreach loop also)
//     function unCheckRadioButtons() {
//         const options = document.getElementsByName("option");
//         for (let i = 0; i < options.length; i++) {
//             options[i].checked = false;
//         }
//     }
    
//     // function for when all questions being answered
//     function handleEndGame() {
//         let remark = null
//         let remarkColor = null
    
//         // condition check for player remark and remark color
//         if (playerScore <= 2) {
//             remark = "you are dealing with a serious mental health issues <br> Refer to Dr.Sachin Mishra(neurologist) <br> Contact : 8237327653 <br> Refer to Dr. Lakshit Singh(pyschiatrist) <br> Contact:7842672763"
//             remarkColor = "red"
//         }
//         else if (playerScore >= 3 && playerScore < 6) {
//             remark = "you are dealing with a mild  mental health issues <br> Refer to Dr.Alok Mishra(psychologist) <br> Contact : 8237327653 <br> Refer to Dr. Lakshit Singh(pyschiatrist) <br> Contact:7842672763"
//             remarkColor = "orange"
//         }
//         else if (playerScore >= 6 && playerScore < 9) {
//             remark = "you are dealing with a normal mental health issues <br> Refer to Dr.Mahesh Singh(psychologist) <br> Contact : 8237327653"
//             remarkColor = "yellow"
//         }
//         else if (playerScore >= 9) {
//             remark = "your total health score is good <br> Refer to Dr. Arun Gupta(physician)"
//             remarkColor = "green"
//         }
//         const playerGrade = (playerScore / 10) * 100
    
//         //data to display to score board
//         document.getElementById('remarks').innerHTML = remark
//         document.getElementById('remarks').style.color = remarkColor
//         document.getElementById('grade-percentage').innerHTML = playerGrade
//         document.getElementById('wrong-answers').innerHTML = wrongAttempt
//         document.getElementById('right-answers').innerHTML = playerScore
//         document.getElementById('score-modal').style.display = "flex"
    
//     }
    
//     //closes score modal, resets game and reshuffles questions
//     function closeScoreModal() {
//         questionNumber = 1
//         playerScore = 0
//         wrongAttempt = 0
//         indexNumber = 0
//         shuffledQuestions = []
//         NextQuestion(indexNumber)
//         document.getElementById('score-modal').style.display = "none"
//     }
    
//     //function to close warning modal
//     function closeOptionModal() {
//         document.getElementById('option-modal').style.display = "none"
//     }

// return(


//     <main>
//         <div class="modal-container" id="score-modal">

//             <div class="modal-content-container">

//                 <h1>Congratulations, Quiz Completed.</h1>

//                 <div class="grade-details">
//                     <p>Attempts : 10</p>
//                     <p> your health problem score<span id="wrong-answers"></span></p>
//                     <p> your mental fitness score<span id="right-answers"></span></p>
//                     <p> your total health score is : <span id="grade-percentage"></span>%</p>
//                     <p ><span id="remarks"></span></p>
//                 </div>

//                 <div class="modal-button-container">
//                     <button onclick={()=>closeScoreModal()}>Continue</button>
//                 </div>

//             </div>
//         </div>

//         <div class="game-quiz-container">

//             <div class="game-details-container">

//                 <h1> Question : <span id="question-number"></span> / 10</h1>
//             </div>

//             <div class="game-question-container">
//                 <h1 id="display-question"></h1>
//             </div>

//             <div class="game-options-container">

//                <div class="modal-container" id="option-modal">

//                     <div class="modal-content-container">
//                          <h1>Please Pick An Option</h1>

//                          <div class="modal-button-container">
//                             <button onclick={()=>closeOptionModal()}>Continue</button>
//                         </div>

//                     </div>

//                </div>

//                 <span>
//                     <input type="radio" id="option-one" name="option" class="radio" value="optionA" />
//                     <label for="option-one" class="option" id="option-one-label"></label>
//                 </span>


//                 <span>
//                     <input type="radio" id="option-two" name="option" class="radio" value="optionB" />
//                     <label for="option-two" class="option" id="option-two-label"></label>
//                 </span>


//                 <span>
//                     <input type="radio" id="option-three" name="option" class="radio" value="optionC" />
//                     <label for="option-three" class="option" id="option-three-label"></label>
//                 </span>


//                 <span>
//                     <input type="radio" id="option-four" name="option" class="radio" value="optionD" />
//                     <label for="option-four" class="option" id="option-four-label"></label>
//                 </span>


//             </div>

//             <div class="next-button-container">
//                 <button onclick={()=>handleNextQuestion()}>Next Question</button>
//             </div>

//         </div>
//     </main>
   

// )	

// }