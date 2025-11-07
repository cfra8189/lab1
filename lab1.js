

function formatFullName(firstName, lastName) {
    let fullName = `${lastName.charAt(0).toUpperCase()+lastName.slice(1)}, ${firstName.charAt(0).toUpperCase()+firstName.slice(1)}`

    console.log(fullName)
}


function calculateTotalCost(price, quantity, taxRate){
    totalCost = (price * quantity) * (1 + taxRate)

    if(price === " "){
        console.log("Invalid input.")
    }

    if(quantity === " "){
        console.log("Invalid input.")
    }
    
    if(taxRate === " "){
        console.log("Invalid input.")
    }

    console.log(totalCost)
}
