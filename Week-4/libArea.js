function areaTriangle(base, height) {
    return (base * height) / 2;
}

function areaCircle(radius) {
    return Math.PI * radius * radius;
}

function areaSquare(w,l) {
    return w * l;
}

module.exports = {
    areaTriangle,
    areaCircle,
    areaSquare
};