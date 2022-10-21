function main() {
    var rules = {
        3:"Fizz",
        5:"Buzz",
        7:"Bang",
        11:"Bong",
        13:"Fezz"
    }
    for (let x = 1; x <= 255; x++) {
        text = ''
        if ( x % 17 == 0) {
            let reversed = Object.keys(rules).reverse();
            for (let index in reversed){
                if (x % reversed[index] == 0) {
                    text += (rules[reversed[index]]);
                }
            }
        }
        else {
            for (let number in rules){
                if (x % number == 0) {
                    text += (rules[number]);
                }
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