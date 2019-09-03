const reverseString = function(string) {

    let arrayString = string.split("");
    let reversedString = arrayString.reverse();

    let finalString = reversedString.join("");

    return finalString;
}

module.exports = reverseString
