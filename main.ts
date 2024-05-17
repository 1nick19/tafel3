let getal = 0
basic.forever(function () {
    if (getal <= 12) {
        getal += 3
        basic.pause(1000)
    } else {
        getal = 0
    }
})
