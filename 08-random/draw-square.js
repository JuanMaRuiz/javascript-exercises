const drawEmptySquare = (int) => {
    if (typeof int !== 'number') {
        throw new Error('You should pass an integer');
    }
    const symbol = '+';
    const repeatVertical = int - 2;

    const horizontalLine = symbol.repeat(int);
    const vertical = (
        symbol +
        ' '.repeat(repeatVertical) +
        symbol +
        '\n'
    ).repeat(repeatVertical);
    return horizontalLine + "\n" + vertical + horizontalLine;
}

const drawFilledSquare = (n) => Array(n).fill('+'.repeat(n)).join('\n')

console.log(drawEmptySquare(10));
console.log('\n')
console.log(drawFilledSquare(10));
