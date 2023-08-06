

module.exports.findLongestWord = function (str) {
    const strToArr = str.split(' ')

    const elementsLength = strToArr.map(function (element) {
        return element.length
    })

    const orderArr = elementsLength.sort(function (a, b) {
        return a - b
    })

    return orderArr[orderArr.length - 1]
}
