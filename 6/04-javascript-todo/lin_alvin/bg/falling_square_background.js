// Copyright Alvin Lin 2014
/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 * Script for the falling squares background animation.
 * To use this background template, instantiate a FallingSquareBackground
 * object at the end of the body and call
 * buildFallingSquareBackgroundAnimation()
 * on the object.
 * The reason we do not use an <animate> object is because the 'dur' attribute
 * that defines the animation time counts from when the webpage is loaded, so
 * animations and circles added after the first 1500ms render at their end
 * animation state.
 * This file is intended as a distributable standalone and thus does not have
 * any dependencies on my internal library.
 */

// bind() function allows setTimeout to work on the objects.
function bind(object, method) {
  return function() {
    return method.apply(object, arguments);
  };
}

function FallingSquareBackground() {
  this.canvas_ = null;
  this.width_ = 0;
  this.height_ = 0;
}

/**
 * This is an array containing all the possible colors of the squares.
 */
FallingSquareBackground.DOT_COLORS = ['red', 'blue', 'green', 'yellow',
                                      'orange', 'magenta', 'cyan'];

/**
 * This value represents the minimum side length that the generated
 * squares can be.
 */
FallingSquareBackground.MIN_SIDE_LENGTH = 50;

/**
 * This value represents the maximum side length that the generated
 * squares can be.
 */
FallingSquareBackground.MAX_SIDE_LENGTH = 150;

/**
 * This value represents the minimum animation time that the generated squares
 * can have.
 */
FallingSquareBackground.MIN_ANIMATION_TIME = 1000;

/**
 * This value represents the maximum animation time that the generated squares
 * can have.
 */
FallingSquareBackground.MAX_ANIMATION_TIME = 1500;

/**
 * Generates a square at the top of the canvas that will be a specified color
 * and side length and fall down the screen in a given animation time.
 */
FallingSquareBackground.prototype.createSquare = function(x,
                                                          color,
                                                          sideLength,
                                                          animationTime) {
  var square = document.createElementNS('http://www.w3.org/2000/svg',
                                        'rect');
  square.setAttribute('x', x);
  square.setAttribute('y', -sideLength);
  square.setAttribute('width', sideLength);
  square.setAttribute('height', sideLength);
  square.setAttribute('fill', color);
  square.setAttribute('fill-opacity', 0.5);
  this.canvas_.appendChild(square);

  var animationSteps = 50;
  var animationStepTime = animationTime / animationSteps;
  var animationTime = 0;
  var fallDistance = 0;
  var fallDistanceStep = this.height_ / animationSteps;
  var opacity = 0.5;
  var opacityStep = 0.01;
  // Sets the animation for the squares falling.
  for (var i = 0; i < animationSteps; ++i) {
    animationTime += animationStepTime;
    setTimeout(function() {
      square.setAttribute('y', fallDistance);
      square.setAttribute('fill-opacity', opacity);
      fallDistance += fallDistanceStep;
      opacity -= opacityStep;
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
FallingSquareBackground.prototype.generateRandomFallingSquare = function() {
  // Generates a random x coordinate, side length, animation time, and selects
  // a random color.
  var x = Math.floor(Math.random() * this.width_);
  var color = FallingSquareBackground.DOT_COLORS[Math.floor(Math.random() *
      FallingSquareBackground.DOT_COLORS.length)];
  var sideLength = Math.floor(Math.random() *
      (FallingSquareBackground.MAX_SIDE_LENGTH -
      FallingSquareBackground.MIN_SIDE_LENGTH)) +
      FallingSquareBackground.MIN_SIDE_LENGTH;
  var animationTime = Math.floor(Math.random() *
      (FallingSquareBackground.MAX_ANIMATION_TIME -
      FallingSquareBackground.MIN_ANIMATION_TIME)) +
      FallingSquareBackground.MIN_ANIMATION_TIME;

  // Creates the square with the generated specifications.
  this.createSquare(x, color, sideLength, animationTime);
};

/**
 * Refreshes the size of the canvas.
 * This function is meant to be called every second or so.
 */
FallingSquareBackground.prototype.setCanvasSize = function() {
  // Measure the width and height of the body element.
  this.width_ = document.body.offsetWidth;
  this.height_ = document.body.offsetHeight;

  // Set the width and height of the SVG canvas to the width and height
  // of the body (basically the entire page).
  this.canvas_.setAttribute('width', this.width_.toString()+'px');
  this.canvas_.setAttribute('height', this.height_.toString()+'px');
};

FallingSquareBackground.prototype.buildFallingSquareBackgroundAnimation = function() {
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
  setInterval(bind(this, this.generateRandomFallingSquare), 200);

  // Refresh the size of the canvas every second.
  setInterval(bind(this, this.setCanvasSize), 1000);
};
