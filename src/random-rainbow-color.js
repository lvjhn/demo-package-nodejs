const chance = require('chance')()

const COLORS = [
    "red",
    "orange",
    "yellow", 
    "green", 
    "blue", 
    "indigo", 
    "violet"
]

function randomRainbowColor() {
    color = chance.pickone(COLORS)
    return color
}

module.exports = randomRainbowColor