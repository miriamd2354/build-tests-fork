const Line = require('./ecs6-class/line')

const calculateDistance = (point1, point2) => {
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point2.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}

const calculateJunctionPoint = (line1, line2) => {
    if (line1.slope === line2.slope) {
        if (line1.n === line2.n) {
            return true
        }
        else {
            return false
        }
    }
    else {
        const x = (line1.n - line2.n) / (line2.slope - line1.slope)
        const junctionPoint = line1.getPointByX(x);
        return junctionPoint
    }
}

const isPointOnLine = (line, point) => {
    const proxyLine = new Line(line.point1, point)
    proxyLine.calculateSlope()
    if (line.slope === proxyLine.slope) {
        proxyLine.calculateNOfLineFunction()
        if (line.n === proxyLine.n2) {
            return true
        }
    }
    return false
}

module.exports = {
    calculateDistance,
    calculateJunctionPoint,
    isPointOnLine
}
