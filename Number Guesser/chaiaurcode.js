let rannum = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#subt")
const userinput = document.querySelector("#guessField")
const prevguess = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const loworhigh = document.querySelector(".lowOrHi")
const results =   document.querySelector(".resultParas")

const p = document.createElement("p")
let preguess = []
let numguess = 1
let playGame = true

if(playGame){
    submit.addEventListener("click",function(e){
            e.preventDefault()
            const guess = parseInt(userinput.value)
            console.log(guess)
            validateGuess(guess)
        })
}

function validateGuess(guess){
    if (isNaN(guess)){
        alert("please enter a valid number")
        
    }

    else if (guess < 1){
        alert("please enter a greater number")
        
    }


    else if (guess > 100){
        alert("please enter a smaller number")
        
    }

    else{
        preguess.push(guess)
        if (numguess > 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number Was ${rannum}`)
            endGame()
        }

        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}
function checkGuess(guess){
    if (guess === rannum){
        displayMessage("You Are Right congrats ")
        endGame()
    }
    else if (guess < rannum){
        displayMessage("Num is too small")
    }
    else if (guess > rannum){
        displayMessage("Num is too big")
    }

}

function displayGuess(guess){
    userinput.value = ""
    prevguess.innerHTML += `${guess} ,`
    
    remaining.innerHTML = `${10 - numguess}`
    numguess++
}

function displayMessage(message){
    loworhigh.innerHTML = `<h2> ${message} </h2>`
}


function endGame(){
    userinput.value=""
    userinput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="NewGame">Start new Game</h2>`
    results.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGamebutton = document.querySelector("#NewGame")
    newGamebutton.addEventListener("click", function(e){
        rannum = parseInt(Math.random() * 100 + 1)
        preguess = []
        numguess = 1
        prevguess.innerHTML = ""
        remaining.innerHTML = `${10 - numguess} `
        userinput.removeAttribute("disabled")
        results.removeChild(p)
        playGame = true
    })
}
