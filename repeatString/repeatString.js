const repeatString = function(string, num) {
    
    let str = string;

    if (num == 0) {
        str = '';
    }
    else if (num < 0) {
        str = 'ERROR';
    }
    else {
            for (let i = 0; i < num - 1; i++) {
            
            str += string;
        }
    }

    return str;
}

module.exports = repeatString