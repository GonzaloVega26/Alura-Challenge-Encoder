            /*------DOM ELEMENTS------*/
const encryptBox = document.getElementById("encrypt-box");
const decryptBox = document.getElementById("decrypt-box");

const actionBtn = document.getElementById("action-btn");
const copyBtnLeft = document.getElementById("copy-btn-left");
const copyBtnRight = document.getElementById("copy-btn-right");

const changeBtn = document.getElementById("change-btn");

const popupTextLeft = document.getElementById("popup-text-left")
const popupTextRight = document.getElementById("popup-text-right")

actionBtn.addEventListener("click", ()=>{
    takeAction(actionBtn.value)
})



copyBtnLeft.addEventListener("click", ()=>{
    if(encryptBox.value){
        displayCopyMessage(popupTextLeft,"Text Copied!")
        navigator.clipboard.writeText(encryptBox.value); //Copy text to clipboard
    }else{
        displayCopyMessage(popupTextLeft,"No Text To copy")
    }
})

copyBtnRight.addEventListener("click", ()=>{
    if(decryptBox.value){
        displayCopyMessage(popupTextRight,"Text Copied!")
        navigator.clipboard.writeText(decryptBox.value); //Copy text to clipboard
    }else{
        displayCopyMessage(popupTextRight,"No Text To copy")
    }
})

function displayCopyMessage(popupText,message){
    popupText.innerText = message
    popupText.style.visibility = "visible"
    setTimeout(() => {
        popupText.style.visibility = "hidden"
        
    }, 1000);
}

changeBtn.addEventListener("click",()=>{
    changeVisuals(actionBtn.value)
})

function changeVisuals(btnValue){

    if(btnValue === "encrypt"){
        //Changes value and text of Action button
        actionBtn.innerText = "Decrypt"
        actionBtn.value = "decrypt"
        encryptBox.placeholder = "Wating for text To Decrypt"
        decryptBox.placeholder = "Insert text to decrypt"

        activateTextBox(decryptBox, "decrypt-box")

        deactivateTextBox(encryptBox, "encrypt-box")

    }else{
        actionBtn.innerText = "Encrypt"
        actionBtn.value = "encrypt"
        encryptBox.placeholder = "Insert text to encrypt"
        decryptBox.placeholder = "Wating for text To encrypt"

        activateTextBox(encryptBox, "encrypt-box")

        deactivateTextBox(decryptBox, "decrypt-box")
    }
}

function deactivateTextBox(textBox, className){
    //Makes text box inactive: adding a background, and making it read only
    textBox.classList.add(className)
    textBox.value = ""
    textBox.readOnly = true
    
}

function activateTextBox(textBox, className){
    //Makes text box active: removing it's background, and making it writable
    textBox.classList.remove(className)
    textBox.value = ""
    textBox.readOnly = false
   
}
function takeAction(btnValue){
    if(btnValue === "encrypt"){

        if(encryptBox.value){
            decryptBox.value = encrypt(encryptBox.value.toLowerCase())
        decryptBox.classList.remove("decrypt-box")
        }else{
            alert("Enter text to encrypt")
        }

    }else{

        if(decryptBox.value){
            encryptBox.value = decrypt(decryptBox.value.toLowerCase())
            encryptBox.classList.remove("encrypt-box") 
        }else{
            alert("Enter text to decrypt")
        }
    }
}


function encrypt(text){
    /*
        e => enter
        i => imes
        a => ai
        o => ober
        u => ufat
    */

    let ecriptedText = "";
    for(let i = 0; i < text.length; i++){
        let letter = text[i];
        switch(letter){
            case "a": ecriptedText += "ai"
            break;
            case "e": ecriptedText += "enter"
            break;
            case "i": ecriptedText += "imes"
            break;
            case "o": ecriptedText += "ober"
            break;
            case "u": ecriptedText += "ufat"
            break;
            default:  ecriptedText += letter
        }
    }
    return ecriptedText;
}

function decrypt(text){
    text = text.replaceAll("ai", "a")
    text = text.replaceAll("enter", "e")
    text = text.replaceAll("imes", "i")
    text = text.replaceAll("ober", "o")
    text = text.replaceAll("ufat", "u")

    return text
}