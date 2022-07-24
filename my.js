var location1 = 2;
var location2 = 3;
var location3 = 4;

var guess;
var guesses = 0;
var hits = 0;

var isSunk = false;
var ship = [];

while(!isSunk) {
    guess = prompt("Жду твой выстрел! (введи цифру от 0 до 6)");
        if(guess < 0 || guess > 6){
            alert("Такого номера нет на поле! Введи цифру от 0 до 6");
        }else{
            guesses += 1;
                if(guess == location1 || guess == location2 || guess == location3){
                    if(ship.includes(guess)){
                        alert("Эта часть корабля уже уничтожена!");
                    }else{
                        alert("Точное попадание!");
                        hits += 1;
                        if(hits == 3){
                            isSunk = true;
                            alert("Ты победил в игре!");
                        }
                        ship.push(guess);
                    }
                }

        }
}

var status = "Ты выстрелил " + guesses + " раз для того, что бы потопить корабль. Твой показатель точности: " + (3 / guesses);
alert(status)