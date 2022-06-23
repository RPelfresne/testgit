basic.showLeds(`
    . . . # #
    . . # # .
    . . # . .
    . # # . .
    # # . . .
    `)
basic.forever(function () {
    basic.showIcon(IconNames.Skull)
    basic.pause(500)
    basic.showIcon(IconNames.Ghost)
})
