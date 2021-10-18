input.onButtonPressed(Button.A, function () {
    firstTimeFlag = 0
    basic.pause(10)
    while (count <= repetitions) {
        if (firstTimeFlag == 0) {
            basic.pause(2000)
        }
        firstTimeFlag = 1
        basic.pause(100)
        accel_val = input.acceleration(Dimension.Z)
        if (accel_val < zero_cal - tolerance / 2 && prev_val > zero_cal + tolerance / 2 || accel_val > zero_cal + tolerance / 2 && prev_val < zero_cal - tolerance / 2) {
            prev_val = accel_val
            count += 1
            light2 += Math.trunc(255 / repetitions) * -1
        }
        basic.setLedColor(basic.rgbw(
        light2,
        0 - light2,
        0,
        light2
        ))
        basic.showNumber(count)
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
let firstTimeFlag = 0
let zero_cal = 0
let tolerance = 0
let prev_val = 0
let accel_val = 0
let light2 = 0
let repetitions = 0
let count = 0
music.playMelody("G B G B B - - - ", 350)
count = 0
// Modify
repetitions = 15
light2 = 255 + Math.trunc(255 / repetitions)
accel_val = 0
prev_val = 0
// Modify
let target_val = 1035
// Modify
tolerance = 5
zero_cal = -1024
basic.forever(function () {
	
})
