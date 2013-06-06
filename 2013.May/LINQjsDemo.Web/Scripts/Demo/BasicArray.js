/// <reference path="../linq.js" />

var BasicArray = {
    Numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    OddNumbers: function () {
        var linqNumbers = Enumerable.from(this.Numbers);

        var oddNumbers = linqNumbers
            .where(function (x) { return x % 2 == 1 })
            .toArray();

        alert(oddNumbers.join("\n"));
    },
    OddNumbersLambda: function () {
        var linqNumbers = Enumerable.from(this.Numbers);

        var oddNumbers = linqNumbers
            .where("$ % 2 == 1")
            .toArray();

        alert(oddNumbers.join("\n"));
    },
    Backwards: function() {
        var linqNumbers = Enumerable.from(this.Numbers);
        var reverse = linqNumbers.orderByDescending("$").toArray();
        alert(reverse.join("\n"));
    },
    EvenNumbersRange: function () {
        var range = Enumerable.range(1, 10);

        var evenNumbers = range
            .where("$ % 2 == 0")
            .toArray();

        alert(evenNumbers.join("\n"));
    },
    Union: function () {
        var range = Enumerable.rangeTo(10, 20);

        var linqNumbers = Enumerable.from(this.Numbers);
        var union = linqNumbers
            .union(range)
            .toArray();

        alert(union.join("\n"));
    }
};