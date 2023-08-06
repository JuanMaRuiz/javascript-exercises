const wrapping = (gifts) => {
    const papper = '*'
    return gifts.map(gift => {
        const papperGift = gift.length + 2;
        return `${papper.repeat(papperGift)}\n*${gift}*\n${papper.repeat(
            papperGift,
        )}`;
    })
};


module.exports = wrapping;
