const removeFromArray = function() {

    let array = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        (array.indexOf(arguments[i]) != -1) ? array.splice(array.indexOf(arguments[i]), 1) : "";
    }

    return array;

}

module.exports = removeFromArray
