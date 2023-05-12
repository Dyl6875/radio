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
radio.setGroup(68)
