let tool = 0
input.onGesture(Gesture.Shake, function () {
    tool = randint(0, 10)
    if (tool == 0) {
        basic.showIcon(IconNames.Heart)
    } else if (tool == 1) {
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showIcon(IconNames.Angry)
    }
})
basic.forever(function () {
	
})
