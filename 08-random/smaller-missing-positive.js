const smallerMissingPositive = (nums) => {
    if (!Array.isArray(nums)) {
        throw new Error('Param is not an Array');
    }

    if (nums.length === 0) {
        return 1;
    }

    const positiveValues = nums.filter(num => num > 0);
    return Math.min(...positiveValues) - 1;
}

module.exports = smallerMissingPositive;
