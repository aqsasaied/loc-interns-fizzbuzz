// Function to check if multiple of 3 
function isMultiple3(number) {
    if (number % 3 == 0) {
        return(true);
    }
    else {
        return (false);
    }
}

// Function to check if multiple of 5
function isMultiple5(number) {
    if (number % 5 == 0) {
        return(true);
    }
    else {
        return (false);
    }
}

// Main function
function main() {
    for (let x = 1; x <= 100; x++) {
        text = ''
        if (isMultiple3(x)) {
            text += 'Fizz';
        }
        if (isMultiple5(x)) {
            text += 'Buzz';
        }
        if (text != '') {
            console.log(text);
        }
        else {
            console.log(x);
        }
    }
}

main();