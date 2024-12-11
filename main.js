function rectangle(a, b, x, y) {
  // checkear si el panel cabe en el rectángulo
  if (!(a <= x && b <= y)) {
    if (!(a <= y && b <= x)) {
      return 0;
    }
    // invertir el techo
    let tmp = y;
    y = x;
    x = tmp;
  }

  // calcular cuantos paneles caben
  const nX = Math.floor(x / a);
  const nY = Math.floor(y / b);
  const n = nX * nY;

  if (x == a * nX && y == b * nY) {
    return n;
  }

  // calcular cuantos paneles caben en el rectangulo que sobra
  if (x == a * nX) {
    return n + rectangle(a, b, x, y - b * nY);
  } else if (y == b * nY) {
    return n + rectangle(a, b, x - a * nX, y);
  }

  return n;
}

function triangleiso(a, b, x, h) {
  if (!(a <= x && b <= h)) {
    return 0;
  }

  return (
    rectangle(a, b, x / 2, h / 2) +
    triangleiso(a, b, x / 2, h / 2) +
    triangleiso(a, b, x / 4, h / 2) +
    triangleiso(a, b, x / 4, h / 2)
  );
}

console.log("Paneles 1x2 y techo 3x5 => ", rectangle(1, 2, 3, 5));
console.log("Paneles 1x2 y techo 2x4 => ", rectangle(1, 2, 2, 4));
console.log("Paneles 2x2 y techo 1x10 => ", rectangle(2, 2, 1, 10));

console.log("\nPaneles 2x2 y triangulo 5x10 => ", triangleiso(1, 1, 8, 4));
