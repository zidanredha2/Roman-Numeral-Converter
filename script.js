
const input =document.getElementById("number")
const button= document.getElementById("convert-btn")
const output= document.getElementById("output")
function convert(){
  if (input.value === ''){
    output.textContent = "Please enter a valid number"
    output.classList.toggle("show")
    return
  } else if (input.value <= 0){
    output.textContent = "Please enter a number greater than or equal to 1"
    output.classList.toggle("show")
    return
  } else if (input.value >= 4000){
    output.textContent = "Please enter a number less than or equal to 3999"
    output.classList.toggle("show")
    return
  }
  const values = {
  'M':1000,
  'CM':900,
  'D':500,
  'CD':400,
  'C':100,
  'XC':90,
  'L':50,
  'XL':40,
  'X':10,
  'IX':9,
  'V':5,
  'IV':4,
  'I':1
  };
  let number = input.value;
  let roman = '';
  for(const key in values){
    const numberValue = values[key];
    while(numberValue <= number){
      number -= numberValue;
      roman += key
    }
  }
  output.textContent = roman;
  output.classList.toggle("show")
  return
}
button.addEventListener("click", convert)
document.body.addEventListener("keydown", (event)=>{
    if (event.key === "Enter"){
        convert()
        return
    }
})