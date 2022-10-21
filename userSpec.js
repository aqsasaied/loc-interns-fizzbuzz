const readline = require('readline-sync');
var rules = new Object();
function main() {
    console.log("Enter the maxinum number: ");
    var maxNum = readline.prompt();
    var cont = 'y';
    while (cont == 'y'){
        console.log("Enter the number you would like to create a rule for: ");
        var number = readline.prompt();
        console.log("Enter the rule for that number: ");
        var rule = readline.prompt();
        rules[number] = rule;
        console.log("would you like to add another rule (y/n): ");
        var cont = readline.prompt();
    }
    for (let x = 1; x <= maxNum; x++) {
        text = '';
        for (let number in rules){
            if (x % number == 0) {
                text += (rules[number]);
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