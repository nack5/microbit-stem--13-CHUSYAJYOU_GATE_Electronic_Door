basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.servoWritePin(AnalogPin.P0, 100)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.pause(1000)
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
