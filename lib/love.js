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
    for(var j = 0; j < rectangle.height; j++) {
      squaresCovered.push({
        x: rectangle.leftX + i,
        y: rectangle.bottomY
      })

      squaresCovered.push({
        x: rectangle.leftX + i,
        y: rectangle.bottomY + j
      })
    }
  }

  for (var i = 0; i < rectangle.height; i++) {
    for(var j = 0; j < rectangle.width; j++) {
      squaresCovered.push({
        x: rectangle.leftX,
        y: rectangle.bottomY + i
      })

      squaresCovered.push({
        x: rectangle.leftX + j,
        y: rectangle.bottomY + i
      })
    }
  }

  return squaresCovered
}

const sharedArea = (rectangleA, rectangleB) => {
  var sharedSquares = rectangleA.map((square) => {
    rectangleB.forEach((compSquare) => {
      eval(pry.it);
      if(compSquare === square) {
        return true
      } else {
        return false
      }
    })
  })

  return sharedSquares
}

var rectangleA = area(myRectangle);
var rectangleB = area(theirRectangle);

console.log(rectangleA, rectangleB)

console.log(sharedArea(rectangleA, rectangleB));
