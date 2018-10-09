"use strict";

let game = {
    startPosition: prompt (`Введите стартовую позицию, состояющую из заглавной латинской буквы и цифры, например, "D4".`),

    nextPosition: prompt (`Введите позицию ячейки, на которую хотите перейти, состояющую из заглавной латинской буквы и цифры, например, "E5". Движение должно быть строго по диагонали.`),

    symbols: {
        "A": 40,
        "B": 41,
        "C": 42,
        "D": 43,
        "E": 44,
        "F": 45,
        "G": 46,
        "H": 47,
    },

    numbers: {
        "1": 0,
        "2": 1,
        "3": 2,
        "4": 3,
        "5": 4,
        "6": 5,
        "7": 6,
        "8": 7,
    },

    render: function () {
        let symbolSliceStart = this.startPosition.slice(0, 1);
        let numSliceStart = this.startPosition.slice(1);
        let symbolSliceNext = this.nextPosition.slice(0, 1);
        let numSliceNext = this.nextPosition.slice(1);

        for (let i in this.symbols) {
            if (symbolSliceStart === i) {
                symbolSliceStart = this.symbols[i];
            } if (symbolSliceNext === i) {
                symbolSliceNext = this.symbols[i];
            }
        }

        for (let i in this.numbers) {
            if (numSliceStart === i) {
                numSliceStart = this.numbers[i];
            } if (numSliceNext === i) {
                numSliceNext = this.numbers[i];
            }
        }

        if (Math.abs(symbolSliceStart - symbolSliceNext)
            === Math.abs(numSliceStart - numSliceNext)) {
            console.log(true);
        } else {
            console.log("Cлоны так не ходят, это не диагональ =( Повторите попытку.")
        }
    },
}

game.render(); 