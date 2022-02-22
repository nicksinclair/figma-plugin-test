function degToRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

function radToDeg(rad: number): number {
  return rad / (Math.PI / 180);
}

module.exports = [degToRad, radToDeg];
