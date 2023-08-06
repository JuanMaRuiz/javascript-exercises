const checkCase = (pass) => {
    const regExpCase = /([a-z]{1,}[A-Z]{1,})|([A-Z]{1,}[a-z]{1,})/

    return checkRegExp(pass, regExpCase)
}

const checkNumber = (pass) => {
    const regExpNumber = /[0-9]{1,}/

    return checkRegExp(pass, regExpNumber)
}

const checkCharacter = (pass) => {
    const regExpHash = /[$#@]{1,}/

    return checkRegExp(pass, regExpHash)
}

const checkPass = (pass) => {
    const passRegExp = /[0-9]{1,}[a-z]{1,}[A-Z]{1,}/

    return checkRegExp(pass, passRegExp)
}

const checkFullPass = (pass) => {
    const regExpArr = [
            /\d{1,}/,
            /[a-z]{1,}/,
            /[a-z]{1,}/,
            /([$]{1,})|([#]{1,})|([@]{1,})/,
        ];
    // passLength = pass.length >= 6 && pass.length <= 16
    let results = [];

    for (let i = 0; i < regExpArr.length; i++) {
        results.push(checkRegExp(pass, regExpArr[i]))
    }

    return (
        results.filter(function (value) {
            return value === false
        }).length === 0
    )
}

const checkLength = (pass) => {
    return pass.length >= 6 && pass.length <= 16
}

function checkRegExp(text, regExp) {
    return regExp.test(text)
}

module.exports = {
    checkCase,
    checkNumber,
    checkCharacter,
    checkPass,
    checkFullPass,
    checkLength,
}
