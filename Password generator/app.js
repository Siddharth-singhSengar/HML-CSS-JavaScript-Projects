const UpperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const LowerSet = "abcdefghijklmnopqrstuvwxyz"
const Numbers = "1234567890"
const symbolSet = "!@#$%^&*()_+/"

const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("Upper-case")
const lowerInput = document.getElementById("Lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")


const getrandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}

const generatePassword = (password = "") => {
    if(upperInput.checked){
        password += getrandomData(UpperSet)
    }
    if(lowerInput.checked){
        password += getrandomData(LowerSet)
    }
    if(numberInput.checked){
        password += getrandomData(Numbers)
    }
    if(symbolInput.checked){
        password += getrandomData(symbolSet)
    }
    if(password.length < totalChar.value){
        return generatePassword(password)      //using recursive functio call so that we can meet nuber of charecters we want in password
    }

    passBox.innerText = password.slice(0,totalChar.value)  // trim password to get only required num of charac
}

generatePassword()

document.getElementById("btn").addEventListener("click",function(){
    generatePassword();
})

