

function formatFullName(firstName, lastName) {
    let fullName = `${lastName.charAt(0).toUpperCase()+lastName.slice(1)}, ${firstName.charAt(0).toUpperCase()+firstName.slice(1)}`

    console.log(fullName)
}