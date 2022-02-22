"use strict";
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}
function radToDeg(rad) {
    return rad / (Math.PI / 180);
}
module.exports = [degToRad, radToDeg];
