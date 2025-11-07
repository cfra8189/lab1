
// TASK 1
function formatFullName(firstName, lastName) {
    let fullName = `${lastName.charAt(0).toUpperCase()+lastName.slice(1)}, ${firstName.charAt(0).toUpperCase()+firstName.slice(1)}`

    console.log(fullName)
}



// TASK 2
function calculateTotalCost(price, quantity, taxRate, discount){
    totalCost = (price * quantity) * (1 + taxRate);
    totalCostDiscount = (price * quantity) * (1 + taxRate) - discount;
    

    if(price === " "){
        console.log("Invalid input.")
    }

    if(quantity === " "){
        console.log("Invalid input.")
    }
    
    if(taxRate === " "){
        console.log("Invalid input.")
    }

    if(!discount){
console.log(totalCost)
    }else{
        console.log(totalCostDiscount)
    }
    
}

// TASK 3
// let age = 36;
// let isEmployed = true;

function checkEligibility(age, isEmployed) {
    if (age >= 18 && isEmployed){
        console.log('You are eligible.')
    } else if(age >= 18 || isEmployed){
        console.log("You are conditionally eligible.")
    }else {
        console.log('You are not eligible.')
    }
}