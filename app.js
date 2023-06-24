const dateOfBirth = document.querySelector(".date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const outputEl= document.querySelector(".output")

outputEl.style.display="none";


function compareValues(sum,luckyNumber){
  if(sum%luckyNumber===0){
outputEl.innerText= "Your birthday is lucky 🥳"

    console.log("Your birthday is lucky 🥳")
  } else {
    outputEl.innerText= "Your birthday is not lucky  ☹️"
    console.log("Your birthday is not lucky  ☹️")
  }
}



const checkBdayIslucky=()=> {
  outputEl.style.display="block";
  
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);

if(sum && dob)

    compareValues(sum,luckyNumber.value)
else
outputEl.innerText=" Please enter both the fields 😡"

  }

  function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum=0;
for(let index = 0; index < dob.length; index++){
  sum = sum + Number(dob.charAt(index));
}
return sum;
  }
  
  
  checkButton.addEventListener("click", checkBdayIslucky)
  
