export default function tyresPressure() {
    return {
        frontLeft: getRandomPressure(),
        frontRight: getRandomPressure(),
        rearLeft: getRandomPressure(),
        rearRight: getRandomPressure(),
    }
}

function getRandomPressure() {
    return (Math.random() * (2.7 - 2.5) + 2.5).toFixed(2)
}