module.exports.palindrome = function (str) {
    if (typeof str !== 'string') {
        throw new Error(`You should pass a string but passed ${typeof str}`);
    }
    const sanitizedStr = str
        .toLowerCase()
        .replaceAll(new RegExp(/\W|_|\s/, 'gi'), '');

    return sanitizedStr === sanitizedStr.split('').reverse().join('');
}
