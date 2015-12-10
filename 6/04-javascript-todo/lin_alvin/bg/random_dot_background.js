// Copyright Alvin Lin 2014
/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 * Script for the randomly appearing dots background animation.
 * Uses setTimeout() to control dot animation.
 * To use this background template, instantiate a RandomDotBackground
 * object at the end of the body and call buildRandomDotBackgroundAnimation()
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

function RandomDotBackground() {}

/**
 * This is an array containing all the possible colors of the dots.
 */
RandomDotBackground.DOT_COLORS = ['red', 'blue', 'green', 'yellow', 'orange',
                                  'magenta', 'cyan'];

/**
 * This value represents the maximum radius that the generated dots can be.
 */
RandomDotBackground.MIN_RADIUS = 25;

/**
 * This value represents the maximum radius that the generated dots can be.
 */
RandomDotBackground.MAX_RADIUS = 100;

/**
 * This value represents the minimum animation time that the generated dots
 * can have.
 */
RandomDotBackground.MIN_ANIMATION_TIME = 500;

/**
 * This value represents the maximum animation time that the generated dots
 * can have.
 */
RandomDotBackground.MAX_ANIMATION_TIME = 1500;

/**
 * Generates a dot at a specified coordinate that will be a specified color
 * and expand to a maximum radius from zero in a given animation time.
 */
RandomDotBackground.prototype.createDot = function(x, y,
                                                   color,
                                                   maxRadius,
                                                   animationTime) {
  var circle = document.createElementNS('http://www.w3.org/2000/svg',
                                        'circle');
  circle.setAttribute('cx', x);
  circle.setAttribute('cy', y);
  circle.setAttribute('r', 0);
  circle.setAttribute('fill', color);
  circle.setAttribute('fill-opacity', 0.4);
  this.canvas_.appendChild(circle);

  var animationSteps = Math.floor(maxRadius / 2);
  var animationStepTime = animationTime / animationSteps;
  var animationTime = 0;
  var radius = 0;
  var radiusStepIncrease = maxRadius / animationSteps;

  // Sets the animation for the dots expanding.
  for (var i = 0; i < animationSteps; ++i) {
    animationTime += animationStepTime;
    setTimeout(function() {
      circle.setAttribute('r', radius++);
    }, animationTime);
  }

  // Sets the animation for the dots contracting.
  for (var i = 0; i < animationSteps; ++i) {
    animationTime += animationStepTime;
    setTimeout(function() {
      circle.setAttribute('r', radius--);
    }, animationTime);
  }

  // Removes the dots from the canvas when the animation finishes.
  setTimeout(bind(this, function() {
    this.canvas_.removeChild(circle);
  }), animationTime);
};

/**
 * Generates a dot with randomized parameters.
 */
RandomDotBackground.prototype.generateRandomDot = function() {
  // Generates random coordinates, radii, animation time, and selects a
  // random color.
  var x = Math.floor(Math.random() * this.width_);
  var y = Math.floor(Math.random() * this.height_);
  var color = RandomDotBackground.DOT_COLORS[Math.floor(Math.random() *
      RandomDotBackground.DOT_COLORS.length)];
  var radius = Math.floor(Math.random() *
      (RandomDotBackground.MAX_RADIUS - RandomDotBackground.MIN_RADIUS)) +
      RandomDotBackground.MIN_RADIUS;
  var animationTime = Math.floor(Math.random() *
      (RandomDotBackground.MAX_ANIMATION_TIME -
      RandomDotBackground.MIN_ANIMATION_TIME)) +
      RandomDotBackground.MIN_ANIMATION_TIME;

  // Creates the dot with the generated specifications.
  this.createDot(x, y, color, radius, animationTime);
};

/**
 * Refreshes the size of the canvas.
 * This function is meant to be called every second or so.
 */
RandomDotBackground.prototype.setCanvasSize = function() {
  // Measure the width and height of the body element.
  this.width_ = document.body.offsetWidth;
  this.height_ = document.body.offsetHeight;

  // Set the width and height of the SVG canvas to the width and height
  // of the body (basically the entire page).
  this.canvas_.setAttribute('width', this.width_.toString()+'px');
  this.canvas_.setAttribute('height', this.height_.toString()+'px');
};

RandomDotBackground.prototype.buildRandomDotBackgroundAnimation = function() {
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
  setInterval(bind(this, this.generateRandomDot), 100);

  // Refresh the size of the canvas every second.
  setInterval(bind(this, this.setCanvasSize), 1000);
};
