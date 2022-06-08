let standardPasswordLen = 16

function generateRandomPassword() {
    for (let i=0; i< 4; i++){
        document.querySelector(".pass-"+(i+1)).textContent = getRandomPassword()
    }
}


function getRandomPassword() {
    let tempPassword = ""
    let possibleKeyValues = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 0,1,2,3,4,5,6,7,8,9, "!","@", "$", "&", "*", "_", "-"] 

    for(let i=0; i< standardPasswordLen; i++){  
        tempPassword += possibleKeyValues[getRandonNumber()]
    }
    return tempPassword
}


function getRandonNumber() {
    let min = 0
    let max = 68
    return Math.floor(Math.random() * (max-min+1) )   
}