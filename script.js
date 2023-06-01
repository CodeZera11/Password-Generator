// Variables

const PwEl = document.getElementById("pw")
const copyEl = document.getElementById("copy")
const lenEl = document.getElementById("length")
const upperEl = document.getElementById("upper")
const lowerEl = document.getElementById("lower")
const numberEl = document.getElementById("number")
const symbolEl = document.getElementById("symbol")
const generateEl = document.getElementById("generate")
const upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_+=|/";




// Functions

const getLowerCase = ()=>{
  return lowerLetters[Math.floor(Math.random()*lowerLetters.length)]
}

const getUpperCase = ()=>{
  return upperLetters[Math.floor(Math.random()*upperLetters.length)]
}

const getNumber = ()=>{
  return numbers[Math.floor(Math.random()*numbers.length)]
}

const getSymbol = ()=>{
  return symbols[Math.floor(Math.random()*symbols.length)]
}


const generatePassword = ()=>{
  const len = lenEl.value;
  let password = "";
  for(let i = 0; i < len; i++){
    let x = generateX()
    password += x;
  }
  PwEl.innerText = password;
}

const generateX = ()=>{
  const xs = []
  if(lowerEl.checked){
    xs.push(getLowerCase());
  }
  if(upperEl.checked){
    xs.push(getUpperCase());
  }
  if(numberEl.checked){
    xs.push(getNumber());
  }
  if(symbolEl.checked){
    xs.push(getSymbol());
  }

  if(xs.length === 0){
    return ""
  }
  return xs[Math.floor(Math.random()*xs.length)];
}




// Main Logic

// Generate Password
generateEl.addEventListener("click", generatePassword);

// Copy Password
copyEl.addEventListener("click", ()=>{
  const textarea = document.createElement("textarea")
  const password = PwEl.innerText;
  if(!password){
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Your password is copied to clipboard!")
})