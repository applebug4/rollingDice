const dice1 = document.createElement("p");
const dice2 = document.createElement("p");
const sum = document.createElement("p");

function rollDice()
        {
            roll1 = Math.floor(Math.random() * 6) + 1;
            roll2 = Math.floor(Math.random() * 6) + 1;
            dice1.innerHTML = roll1;
            dice2.innerHTML = roll2;
            combined = roll1 + roll2;
            sum.innerHTML = ("Sum: " + combined);
        }

        document.body.appendChild(dice1);
        document.body.appendChild(dice2);
        document.body.appendChild(sum);

        const rollButton = document.getElementById("roll");
        rollButton.addEventListener("click", rollDice);
