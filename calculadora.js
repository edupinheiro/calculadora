var add = function(value1, value2){
    return value1 + value2;
}

var subtr = function(value1, value2){
    return value1 - value2;
}

var times = function(value1, value2){
    return value1 * value2;
}

var dividedBy = function(value1, value2){
    return value1 / value2;
}

var main = function(){
    var value1 = 0;
    var value2 = 0;
    var operation = 0;
    value1 = prompt("Insert the 1st number:", "value 1");
    value2 = prompt("Insert the 2nd number:", "valu2 1");
    operation = prompt("Set the required operation (1 - addition, 2 - subtraction, 3 - multiplication, 4 - division):", "");
    
    switch (operation) {
        case "1":
           alert("Result: " + add(value1, value2));
           break;
        case "2":
            alert("Result: " + subtr(value1, value2));
            break;
        case "3":
            alert("Result: " + times(value1, value2));
            break;
        case "4":
            alert("Result: " + dividedBy(value1, value2));
            break;
        default:
            alert("The operation you choose is not valid.");
            break;
    }

}
main();