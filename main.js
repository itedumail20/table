
function printMultiplicationTable() {

    var number = prompt("Enter a number:");


    number = parseInt(number);


    if (!isNaN(number)) {

        console.log("Multiplication table for " + number + ":");
        for (var i = 1; i <= 10; i++) {
            console.log(number + " * " + i + " = " + (number * i));
        }
    } else {

        console.log("Invalid input. Please enter a valid number.");
    }
}


printMultiplicationTable();
