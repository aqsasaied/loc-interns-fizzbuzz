const readline = require('readline-sync');
function main() {
    console.log("Enter the maxinum number: ")
    var maxNum = readline.prompt();
    for (let x = 1; x <= maxNum; x++) {
        text = '';
        if ( x % 17 == 0) {
            if (x % 13 == 0) {
                text += 'Fezz';
            }
            if (x % 11 == 0) {
                text += 'Bong';
            }
            if (x % 7 == 0) {
                text += 'Bang';
            }
            if (x % 5 == 0) {
                text += 'Buzz';
            }
            if (x % 3 == 0) {
                text += 'Fizz';
            }
        }
        else {
            if (x % 3 == 0) {
                text += 'Fizz';
            }
            if (x % 5 == 0) {
                text += 'Buzz';
            }
            if (x % 7 == 0) {
                text += 'Bang';
            }
            if (x % 11 == 0) {
                text += 'Bong';
            }
            if (x % 13 == 0) {
                text += 'Fezz';
            }
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