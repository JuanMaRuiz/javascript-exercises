

module.exports.firstReverse = function (str) {
    let reversedStr = str.split('').reverse()
    reversedStr = reversedStr.join('')

    return reversedStr
}
