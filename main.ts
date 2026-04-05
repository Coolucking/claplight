let tag = 0
basic.forever(function () {
    if (100 < input.soundLevel()) {
        basic.pause(500)
        if (tag == 0) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            tag = 1
        } else {
            basic.clearScreen()
            tag = 0
        }
    }
})
