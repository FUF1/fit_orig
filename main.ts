input.onButtonPressed(Button.A, function () {
    basic.pause(10)
    while (count <= repetitions) {
        accel_val = input.acceleration(Dimension.Strength)
        if (Math.abs(accel_val) >= target_val - tolerance && Math.abs(accel_val) <= target_val - tolerance) {
            if (accel_val < 0 && prev_val > 0 || accel_val > 0 && prev_val < 0) {
                prev_val = accel_val
                count += 1
                light2 += Math.trunc(255 / repetitions) * -1
            }
        }
        basic.setLedColor(basic.rgbw(
        light2,
        0 - light2,
        0,
        light2
        ))
        basic.showNumber(count)
        basic.pause(10)
    }
    if (count == repetitions) {
        music.playMelody("E F G B G - B - ", 350)
    }
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 A F - - - - - ", 1000)
    count = 0
    basic.pause(100)
})
let tolerance = 0
let target_val = 0
let prev_val = 0
let accel_val = 0
let light2 = 0
let repetitions = 0
let count = 0
music.playMelody("G B G B B - - - ", 350)
count = 0
repetitions = 15
light2 = 255 + Math.trunc(255 / repetitions)
accel_val = 0
prev_val = 1024
target_val = 1024
tolerance = 50
basic.forever(function () {
	
})
