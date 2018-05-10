pry = require("pryjs")

const myRectangle = {
  leftX: 1,
  bottomY: 1,
  width: 6,
  height: 3,
}

const theirRectangle = {
  leftX: 5,
  bottomY: 2,
  width: 3,
  height: 6,
}

const area = (rectangle) => {
  let squaresCovered = [];

  for (var i = 0; i < rectangle.width; i++) {
    squaresCovered.push({
      x: rectangle.leftX + i,
      y: rectangle.bottomY
    })
  }

  for (var i = 1; i < rectangle.height; i++) {
    squaresCovered.push({
      x: rectangle.leftX,
      y: rectangle.bottomY + i
    })
  }

  return squaresCovered
}

const sharedArea = (rectangleA, rectangleB) => {
  let areaOfRecA = area(rectangleA);
  let areaOfRecB = area(rectangleB);

}

console.log(area(myRectangle));
