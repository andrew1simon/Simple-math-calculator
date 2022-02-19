let v = ""
let numberSaver = 0
let number = ""
let numberStoreA = []
let  value = ""
function display (numOrOpration) {
   if (numOrOpration != "+" && numOrOpration != "-" && numOrOpration != "/" && numOrOpration != "*" && numOrOpration != ".") {
   number += numOrOpration 
   //console.log(number)
   displayOnScreen (numOrOpration)
   }
   if (numOrOpration == "+" || numOrOpration == "-" || numOrOpration == "/" || numOrOpration == "*" || numOrOpration == ".") {
    let numberProcessed = Number(number) 
      numberStoreA.push(numberProcessed)
      //console.log(numberStoreA)
     // console.log(typeof(numberProcessed))
      number = ""
      numberStoreA.push(numOrOpration)
      displayOnScreen (numOrOpration)
   }
}
function calc () {
   //console.log(number)
   if (number != "") {
      let numberProcessed = Number(number) 
      numberStoreA.push(numberProcessed)
   }
   //console.log("typeof" , typeof(numberStoreA[numberStoreA.length-1]))
   if (typeof (numberStoreA[numberStoreA.length-1]) == 'string') {
      //console.log("error")
      displayOnScreen ("error")

   }
   if (typeof(numberStoreA[numberStoreA.length-1]) == "number") {
      //console.log("that's a number")
      calcProcess ()
   }
   
} 

function calcProcess () {
   //console.log("working...")
    // switches for making the math
   for(var i = 0; i<numberStoreA.length;i++) {
      switch(numberStoreA[i]){
      case '+':
         if (i < 2) {
          //  console.log("It's +!"); 
            numberSaver +=  Number(numberStoreA[i-1] + numberStoreA[i+1])
          //  console.log(numberSaver)
            break;
         }if (i > 2) {
         //   console.log("It's +!"); 
            numberSaver += Number(numberStoreA[i+1])
           // console.log(numberSaver)
            break;
         }
         break;
      
      case "-":
         if (i < 2) {
         //   console.log("It's -!");
            numberSaver =  Number(numberStoreA[i-1] - numberStoreA[i+1])
          //  console.log(numberSaver)
            break;
         }if (i > 2) {
          //  console.log("It's -!");
            numberSaver -= Number(numberStoreA[i+1])
          //  console.log(numberSaver)
            break;
         }
      break;
      case "/":
      if (i < 2) {
         numberSaver = Number(numberStoreA[i-1]/numberStoreA[i+1])
        // console.log (numberSaver)
         break;
      }
      if (i > 2) {
       //  console.log("It's /!");
         numberSaver /= Number(numberStoreA[i+1])
       //  console.log(numberSaver)
         break;
      }
      
      break;
      case '*':
         if (i < 2) {
           // console.log("It's *!"); 
            numberSaver +=  Number(numberStoreA[i-1] * numberStoreA[i+1])
          //  console.log(numberSaver)
            break;
         }if (i > 2) {
          //  console.log("It's *!"); 
            numberSaver *= Number(numberStoreA[i+1])
          //  console.log(numberSaver)
            break;
         }
         break;
      }
   
      }
      function displayres () {
         document.querySelector("#res-data").innerHTML = `<p>${numberSaver}</p>`
         value=""
      }
      displayres ()

}

function clearSto () {
number = ""
numberSaver = 0
numberStoreA = []
value = ""
document.querySelector("#res-data").innerHTML = ``
//console.log ("cleared")

}
function displayOnScreen (toDisplay) {
   if (toDisplay == "error") {
      value = toDisplay
   document.querySelector("#res-data").innerHTML = `<p>invalid input</p>`
   value = ""
   }else {
      value += toDisplay
      document.querySelector("#res-data").innerHTML = `<p>${value}</p>`
   }
   
  
}
