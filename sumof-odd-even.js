function sumOddAndEven(numbers) {
    let sumEven = 0;
    let sumOdd = 0;

    numbers.forEach(num => {
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    });

    return [sumEven, sumOdd];
}