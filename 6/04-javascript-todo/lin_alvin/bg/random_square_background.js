// Copyright Alvin Lin 2014
/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 * Script for the falling squares background animation.
 * To use this background template, instantiate a RandomSquareBackground
 * object at the end of the body and call
 * buildRandomSquareBackgroundAnimation()
 * on the object.
 * The reason we do not use an <animate> object is because the 'dur' attribute
 * that defines the animation time counts from when the webpage is loaded, so
 * animations and circles added after the first 1500ms render at their end
 * animation state and disappear immediately.
 * This file is intended as a distributable standalone and thus does not have
 * any dependencies on my internal library.
 */

// bind() function allows setTimeout to work on the objects.
function bind(object, method) {
  return function() {
    return method.apply(object, arguments);
  };
}

function RandomSquareBackground() {}

/**
 * This is an array containing all the possible colors of the squares.
 */
RandomSquareBackground.DOT_COLORS = ['red', 'blue', 'green', 'yellow',
                                     'orange', 'magenta', 'cyan'];

/**
 * This value represents the minimum side length that the generated
 * squares can be.
 */
RandomSquareBackground.MIN_SIDE_LENGTH = 50;

/**
 * This value represents the maximum side length that the generated squares
 * can be.
 */
RandomSquareBackground.MAX_SIDE_LENGTH = 200;

/**
 * This value represents the minimum animation time that the generated squares
 * can have.
 */
RandomSquareBackground.MIN_ANIMATION_TIME = 500;

/**
 * This value represents the maximum animation time that the generated squares
 * can have.
 */
RandomSquareBackground.MAX_ANIMATION_TIME = 1500;

/**
 * Generates a square at a specified coordinate that will be a specified color
 * and expand to a maximum side length from zero in a given animation time.
 */
RandomSquareBackground.prototype.createSquare = function(x, y,
                                                          color,
                                                          maxSideLength,
                                                          animationTime) {
  var square = document.createElementNS('http://www.w3.org/2000/svg',
                                        'rect');
  square.setAttribute('x', x);
  square.setAttribute('y', y);
  square.setAttribute('width', 0);
  square.setAttribute('height', 0);
  square.setAttribute('fill', color);
  square.setAttribute('fill-opacity', 0.5);
  this.canvas_.appendChild(square);

  var animationSteps = Math.floor(maxSideLength / 2);
  var animationStepTime = animationTime / animationSteps;
  var animationTime = 0;
  var sideLength = 0;
  var sideLengthStepIncrease = maxSideLength / animationSteps;

  // Sets the animation for the squares expanding.
  for (var i = 0; i < animationSteps; ++i) {
    animationTime += animationStepTime;
    setTimeout(function() {
      var newSideLength = sideLength++;
      square.setAttribute('x', x - sideLength / 2);
      square.setAttribute('y', y - sideLength / 2);
      square.setAttribute('width', newSideLength);
      square.setAttribute('height', newSideLength);
    }, animationTime);
  }

  // Sets the animation for the squares contracting.
  for (var i = 0; i < animationSteps; ++i) {
    animationTime += animationStepTime;
    setTimeout(function() {
      var newSideLength = sideLength--;
      square.setAttribute('x', x - sideLength / 2);
      square.setAttribute('y', y - sideLength / 2);
      square.setAttribute('width', newSideLength);
      square.setAttribute('height', newSideLength);
    }, animationTime);
  }

  // Removes the square from the canvas when the animation finishes.
  setTimeout(bind(this, function() {
    this.canvas_.removeChild(square);
  }), animationTime);
};

/**
 * Generates a square with randomized parameters.
 */
RandomSquareBackground.prototype.generateRandomSquare = function() {
  // Generates random coordinates, side length, animation time, and selects a
  // random color.
  var x = Math.floor(Math.random() * this.width_);
  var y = Math.floor(Math.random() * this.height_);
  var color = RandomSquareBackground.DOT_COLORS[Math.floor(Math.random() *
      RandomSquareBackground.DOT_COLORS.length)];
  var radius = Math.floor(Math.random() *
      (RandomSquareBackground.MAX_SIDE_LENGTH -
      RandomSquareBackground.MIN_SIDE_LENGTH)) +
      RandomSquareBackground.MIN_SIDE_LENGTH;
  var animationTime = Math.floor(Math.random() *
      (RandomSquareBackground.MAX_ANIMATION_TIME -
      RandomSquareBackground.MIN_ANIMATION_TIME)) +
      RandomSquareBackground.MIN_ANIMATION_TIME;

  // Creates the square with the generated specifications.
  this.createSquare(x, y, color, radius, animationTime);
};

/**
 * Refreshes the size of the canvas.
 * This function is meant to be called every second or so.
 */
RandomSquareBackground.prototype.setCanvasSize = function() {
  // Measure the width and height of the body element.
  this.width_ = document.body.offsetWidth;
  this.height_ = document.body.offsetHeight;

  // Set the width and height of the SVG canvas to the width and height
  // of the body (basically the entire page).
  this.canvas_.setAttribute('width', this.width_.toString()+'px');
  this.canvas_.setAttribute('height', this.height_.toString()+'px');
};

RandomSquareBackground.prototype.buildRandomSquareBackgroundAnimation = function() {
  // Create the canvas.
  this.canvas_ = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  this.canvas_.setAttribute('id', 'background');
  this.canvas_.style.position = 'absolute';
  this.canvas_.style.top = 0;
  this.canvas_.style.right = 0;
  this.canvas_.style.bottom = 0;
  this.canvas_.style.left = 0;
  this.canvas_.style.zIndex = -100;
  document.body.zIndex = -101;
  document.body.appendChild(this.canvas_);
  this.setCanvasSize();

  // Set the animation.
  setInterval(bind(this, this.generateRandomSquare), 200);

  // Refresh the size of the canvas every second.
  setInterval(bind(this, this.setCanvasSize), 1000);
};
