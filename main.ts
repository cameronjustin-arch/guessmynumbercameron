let random_number = randint(1, 6)
let user_number = game.askForNumber("Pick a number between 1 and 6 ")
forever(function () {
    if (random_number == user_number) {
        game.splash("You guessed the number correctly!")
    } else {
        game.splash("You did not guess the number correctly!", "The correct number is " + random_number)
    }
})
