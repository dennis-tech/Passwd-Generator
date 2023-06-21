const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`",
"!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwdBtnLeft = document.getElementById('passwdBtnLeft');
let passwdBtnRight = document.getElementById('passwdBtnRight');

document.getElementById('btnGeneratePasswd').addEventListener('click', renderPasswords);

// to copy the password to clipboard
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

// to generate the password
function renderPasswords(){
    let firstPasswd = [];
    let secondPasswd = [];
    for (i = 0; i < 15; i++) {
        let randomPasswd1 = characters[Math.floor(characters.length * Math.random())];
        let randomPasswd2 = characters[Math.floor(characters.length * Math.random())];
        
        firstPasswd.push(randomPasswd1);
        secondPasswd.push(randomPasswd2);
        
}
        
        passwdBtnLeft.innerHTML = firstPasswd.join('');
        passwdBtnRight.innerHTML = secondPasswd.join('');

}
