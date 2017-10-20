//Returns a factorial of a number
function factorialize(num) {
    if (num <= 1) {
        num = 1;
    }
    else {
        num *= factorialize(num - 1);
    }
    return num;
}

factorialize(5);