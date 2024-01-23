// const questions = [
//     {
//     "ques": "Which of the following is a client site language?",
//     "a": "Java",
//     "b": "C",
//     "c": "Python",
//     "d": "JavaScript",
//     "correct": "d",
// },
// {
//     "ques": "What does HTML stand for?",
//     "a": "Hypertext Markup Language",
//     "b": "Cascading Style Sheet",
//     "c": "Jason Object Notation",
//     "d": "Helicopters Terminals Motorboats Lamborginis",
//     "correct": "a",
// },
// {
//     "ques": "What year was JavaScript launched?",
//     "a": "1996",
//     "b": "1995",
//     "c": "1994",
//     "d": "none of the above",
//     "correct": "b",
// },
// {
//     "ques": "What does CSS stands for?",
//     "a": "Hypertext Markup Language",
//     "b": "Cascading Style Sheet",
//     "c": "Jason Object Notation",
//     "d": "Helicopters Terminals Motorboats Lamborginis",
//     "correct": "b",
// }
// ]

// let index = 0, correct=0, incorrect=0
// let total = questions.length
// const quesBox = document.getElementById("quesBox")
// const optionsInput = document.querySelectorAll(".options")

// const loadQuestion = () => {
//     if(index==total){
//         return endQuiz()
//     }

//     reset()
//     const data = questions[index];

//     quesBox.innerText = `${index+1}) ${data.ques}`;
//     optionsInput[0].nextElementSibling.innerText = data.a ;
//     optionsInput[1].nextElementSibling.innerText = data.b ;
//     optionsInput[2].nextElementSibling.innerText = data.c ;
//     optionsInput[3].nextElementSibling.innerText = data.d ;
// }


// document.querySelector("#submit").addEventListener("click",function(){
//     const data = questions[index]
//     const ans = getAnswer()
//     if(ans==data.correct){
//         correct++
//     }
//     else{
//         incorrect++
//     }
//     index++;
//     loadQuestion()
// })

// const getAnswer = ()=>{
//     let ans;
//     optionsInput.forEach((input) =>{
//         if(input.checked){
//             ans=input.value
//         }
//     }
//     )
//     return ans;
// }

// const reset = () =>{
//     optionsInput.forEach((input) => {
//         input.checked = false;
//     })
// }

// const endQuiz = () =>{
//     document.getElementById("box").innerHTML = `
//     <h3>Thanks for Playing </h3>
//     You Scored ${correct} out of ${total}</h2>
//     `

// }


// loadQuestion()


const questions = [
    {
    
    "ques": "Which of the following is a client site language?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "ques": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Cascading Style Sheet",
    "c": "Jason Object Notation",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "ques": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},
{
    "ques": "What does CSS stands for?",
    "a": "Hypertext Markup Language",
    "b": "Cascading Style Sheet",
    "c": "Jason Object Notation",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "b",
}
]

let index = 0 , correct= 0 , incorrect=0;
let total = questions.length;
const quesBox = document.getElementById("quesBox");
const allInputs = document.querySelectorAll(".options");


const loadQuestion = () => {
    if(index==total){
       return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index+1}) ${data.ques}` ;
    
    allInputs[0].nextElementSibling.innerText = data.a ; 

    allInputs[1].nextElementSibling.innerText = data.b ; 
    allInputs[2].nextElementSibling.innerText = data.c ; 
    allInputs[3].nextElementSibling.innerText = data.d ; 
    

}

document.querySelector("#submit").addEventListener("click",function(){
    const data = questions[index];
    const ans = getAns();
    if(ans == data.correct){
        correct++;
    }
    
    else{
        incorrect++;
    }
    index++;
    loadQuestion()

})


const getAns = ()=>{
    let ans;
    allInputs.forEach((input)=>{
        if(input.checked){
            ans = input.value;
        }
    })
    return ans;
}

const reset = () => {
    allInputs.forEach((input)=>{
        input.checked=false;
    })
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
        <h3>Thanks for Playing </h3>
       You Scored ${correct} out of ${total}</h2>`

}

loadQuestion()



