const sumAll = function(num1, num2) {

    let finalNumber = 0;    

    if((typeof num1 === 'number' && typeof num2 === 'number') && (num1 > 0 && num2 > 0)) {
        if(num1 < num2) {
            for(let i = num1; i <= num2; i++) {
                finalNumber += i;
            }
        }
        else if (num1 > num2) {
            for(let i = num2; i <= num1; i++) {
                finalNumber += i;
            }
        }

        return finalNumber;
    }
    else {
        return 'ERROR';
    }    

}

module.exports = sumAll
