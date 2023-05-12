radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.onReceivedValue(function (name, value) {
    basic.showNumber(value)
    basic.showString(name)
})
basic.forever(function () {
    radio.setGroup(68)
})
basic.forever(function () {
    radio.sendString("zebi")
    radio.sendNumber(86)
})
