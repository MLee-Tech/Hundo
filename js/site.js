//Get the values from the UI
//Controller Function
function getValues(){
    //get values from the UI
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;


    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    
    //Validate Inputs
    if (Number.isInteger(startValue) && Number.isInteger(endValue) ) {
        
        //call generateNumbers function
        let numbers = generateNumbers(startValue, endValue);

        //call displayNumbers function
        displayNumbers(numbers);
    }
    else{
        alert("Please Enter Valid Numbers");
    }
   
    
}

//Generate numbers from startValue to endValue
//Logic Function
function generateNumbers(sValue, eValue){
    let numbers = [];

    for (let index = sValue; index <= eValue; index++) {
        numbers.push(index);        
    }

    return numbers;
}

//Display the numbers with even numbers in BOLD
//View Function


function displayNumbers(numbers){
    
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        
        let number = numbers[index];

        if(Number.isInteger(number / 2)){
            templateRows += `<tr><td><strong>${number}</strong></td></tr>`; 

        }else{
            templateRows += `<tr><td>${number}</td></tr>`; 
        }

    }

    document.getElementById("results").innerHTML = templateRows;

}