
const hasSumNumbers = (numbers, sumTarget) => {
    const numbersMap = new Map();

    return numbers.some((value, index) => {
        if (numbersMap.has(sumTarget - value)) {
            return true;
        }
        numbersMap.set(value, index);
        return false;
    });
}

export default hasSumNumbers;
