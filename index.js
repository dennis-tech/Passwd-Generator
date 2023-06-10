const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`",
"!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
document.getElementById('btnGeneratePasswd').addEventListener('click', render);
let passwdBtnLeft = document.getElementById('passwdBtnLeft');
let passwdBtnRight = document.getElementById('passwdBtnRight');
function render(){
    passwdBtnLeft.textContent = getPasswd(); // using textContent instead of innerHtml since i am sending plain text to the html  
    passwdBtnRight.textContent = getPasswd();

}
passwdBtnLeft.addEventListener('click', copyPasswdLeft);
passwdBtnRight.addEventListener('click', copyPasswdRight);
function copyPasswdLeft(){
    const copyText = passwdBtnLeft.textContent;
    navigator.clipboard.writeText(copyText);
    alert('Password copied to clipboard 🤡');
}

function copyPasswdRight(){
    const copyText = passwdBtnRight.textContent;
    navigator.clipboard.writeText(copyText);
    alert('Password copied to clipboard 🤡');
}

function getPasswd(){

    const randomPasswdGen1 = Math.floor(Math.random(1) * characters.length);
    const randomPasswdGen2 = Math.floor(Math.random(1) * characters.length);
    const randomPasswdGen3 = Math.floor(Math.random(1) * characters.length);
    const randomPasswdGen4 = Math.floor(Math.random(1) * characters.length);
    const randomPasswdGen5 = Math.floor(Math.random(1) * characters.length);
    const randomPasswdGen6 = Math.floor(Math.random(1) * characters.length);
    const randomPasswdGen7 = Math.floor(Math.random(1) * characters.length);
    const randomPasswdGen8 = Math.floor(Math.random(1) * characters.length);
    const randomPasswdGen9 = Math.floor(Math.random(1) * characters.length);
    const randomPasswdGen10 = Math.floor(Math.random(1) * characters.length);
    const randomPasswdGen11 = Math.floor(Math.random(1) * characters.length);
    const randomPasswdGen12 = Math.floor(Math.random(1) * characters.length);
    const randomPasswdGen13 = Math.floor(Math.random(1) * characters.length);
    const randomPasswdGen14 = Math.floor(Math.random(1) * characters.length);
    const randomPasswdGen15 = Math.floor(Math.random(1) * characters.length);

    let passwd1 = '';
    let passwd2 = '';
    let passwd3 = '';
    let passwd4 = '';
    let passwd5 = '';
    let passwd6= '';
    let passwd7 = '';
    let passwd8 = '';
    let passwd9 = '';
    let passwd10 = '';
    let passwd11= '';
    let passwd12= '';
    let passwd13= '';
    let passwd14= '';
    let passwd15 = '';

    let  passwdArray = [];

    for(let i = 0; i < characters.length; i++){
        passwd1 = characters[randomPasswdGen1];
    }
    for(let i = 0; i < characters.length; i++){
        passwd2 = characters[randomPasswdGen2];
    }
    for(let i = 0; i < characters.length; i++){
        passwd3 = characters[randomPasswdGen3];
    }
    for(let i = 0; i < characters.length; i++){
        passwd4 = characters[randomPasswdGen4];
    }
    for(let i = 0; i < characters.length; i++){
        passwd5 = characters[randomPasswdGen5];
    }
    for(let i = 0; i < characters.length; i++){
        passwd6 = characters[randomPasswdGen6];
    }
    for(let i = 0; i < characters.length; i++){
        passwd7 = characters[randomPasswdGen7];
    }
    for(let i = 0; i < characters.length; i++){
        passwd8 = characters[randomPasswdGen8];
    }
    for(let i = 0; i < characters.length; i++){
        passwd9 = characters[randomPasswdGen9];
    }
    for(let i = 0; i < characters.length; i++){
        passwd10 = characters[randomPasswdGen10];
    }
    for(let i = 0; i < characters.length; i++){
        passwd11 = characters[randomPasswdGen11];
    }
    for(let i = 0; i < characters.length; i++){
        passwd12 = characters[randomPasswdGen12];
    }
    for(let i = 0; i < characters.length; i++){
        passwd13 = characters[randomPasswdGen13];
    }
    for(let i = 0; i < characters.length; i++){
        passwd14 = characters[randomPasswdGen14];
    }
    for(let i = 0; i < characters.length; i++){
        passwd15 = characters[randomPasswdGen15];
    }

    passwdArray.push(passwd1, passwd2, passwd3, passwd4, passwd5, passwd6, passwd7, passwd8, passwd9, passwd10, passwd11, passwd12, passwd13, passwd14, passwd15);
    passwdArray = passwdArray.join('');
    
    return passwdArray;
    

}




