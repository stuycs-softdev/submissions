// Copyright Alvin Lin 2014
/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 * Script for the background animation with dots scrolling from the left to
 * the right in a sine wave motion.
 * Uses setTimeout() to control dot animation.
 * To use this background template, instantiate a LTRSineDotBackground
 * object at the end of the body and call buildLTRSineDotBackgroundAnimation()
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

function LTRSineDotBackground() {}

/**
 * This is an array containing all the possible colors of the dots.
 */
LTRSineDotBackground.DOT_COLORS = ['red', 'blue', 'green', 'yellow', 'orange',
                                   'magenta', 'cyan'];

/**
 * This value represents the maximum radius that the generated dots can be.
 */
LTRSineDotBackground.MIN_RADIUS = 25;

/**
 * This value represents the maximum radius that the generated dots can be.
 */
LTRSineDotBackground.MAX_RADIUS = 50;

/**
 * This value represents the maximum wavelength that the generated dots can
 * move to.
 */
LTRSineDotBackground.MIN_WAVELENGTH = 100;

/**
 * This value represents the maximum wavelength that the generated dots can
 * move to.
 */
LTRSineDotBackground.MAX_WAVELENGTH = 150;

/**
 * This value represents the maximum amplitude that the generated dots can
 * move to.
 */
LTRSineDotBackground.MIN_AMPLITUDE = 50;

/**
 * This value represents the maximum amplitude that the generated dots can
 * move to.
 */
LTRSineDotBackground.MAX_AMPLITUDE = 200;

/**
 * This value represents the minimum animation time that the generated dots
 * can have.
 */
LTRSineDotBackground.MIN_ANIMATION_TIME = 2000;

/**
 * This value represents the maximum animation time that the generated dots
 * can have.
 */
LTRSineDotBackground.MAX_ANIMATION_TIME = 2500;

/**
 * Generates a dot that will be a specified color
 * and radius and move from the left of the screen at the given y
 * coordinate to the right of the screen in a sine wave pattern.
 */
LTRSineDotBackground.prototype.createLTRSineDot = function(y,
                                                           color,
                                                           radius,
                                                           wavelength,
                                                           amplitude,
                                                           animationTime) {
  var circle = document.createElementNS('http://www.w3.org/2000/svg',
                                        'circle');
  circle.setAttribute('cx', -radius);
  circle.setAttribute('cy', y);
  circle.setAttribute('r', radius);
  circle.setAttribute('fill', color);
  circle.setAttribute('fill-opacity', 0.5);
  this.canvas_.appendChild(circle);

  var animationSteps = this.width_ + radius;
  var animationStepTime = animationTime / animationSteps;
  var animationTime = 0;
  var x = 0;

  // Sets the animation for the dots moving in their sine wave.
  for (var i = 0; i < animationSteps; ++i) {
    animationTime += animationStepTime;
    setTimeout(function() {
      circle.setAttribute('cx', x++);
      circle.setAttribute('cy', y + amplitude * Math.sin(x / wavelength));
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
LTRSineDotBackground.prototype.generateRandomLTRSineDot = function() {
  // Generates random coordinates, radii, animation time, and selects a
  // random color.
  var y = Math.floor(Math.random() * this.height_);
  var color = LTRSineDotBackground.DOT_COLORS[Math.floor(Math.random() *
      LTRSineDotBackground.DOT_COLORS.length)];
  var radius = Math.floor(Math.random() *
      (LTRSineDotBackground.MAX_RADIUS - LTRSineDotBackground.MIN_RADIUS)) +
      LTRSineDotBackground.MIN_RADIUS;
  var wavelength = Math.floor(Math.random() *
      (LTRSineDotBackground.MAX_WAVELENGTH -
      LTRSineDotBackground.MIN_WAVELENGTH)) +
      LTRSineDotBackground.MIN_WAVELENGTH;
  var amplitude = Math.floor(Math.random() *
      (LTRSineDotBackground.MAX_AMPLITUDE -
      LTRSineDotBackground.MIN_AMPLITUDE)) +
      LTRSineDotBackground.MIN_AMPLITUDE;
  if (Math.random() > 0.5) {
    amplitude *= -1;
  }
  var animationTime = Math.floor(Math.random() *
      (LTRSineDotBackground.MAX_ANIMATION_TIME -
      LTRSineDotBackground.MIN_ANIMATION_TIME)) +
      LTRSineDotBackground.MIN_ANIMATION_TIME;

  // Creates the dot with the generated specifications.
  this.createLTRSineDot(y, color, radius, wavelength, amplitude, animationTime);
};

/**
 * Refreshes the size of the canvas.
 * This function is meant to be called every second or so.
 */
LTRSineDotBackground.prototype.setCanvasSize = function() {
  // Measure the width and height of the body element.
  this.width_ = document.body.offsetWidth;
  this.height_ = document.body.offsetHeight;

  // Set the width and height of the SVG canvas to the width and height
  // of the body (basically the entire page).
  this.canvas_.setAttribute('width', this.width_.toString()+'px');
  this.canvas_.setAttribute('height', this.height_.toString()+'px');
};

LTRSineDotBackground.prototype.buildLTRSineDotBackgroundAnimation = function() {
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
  setInterval(bind(this, this.generateRandomLTRSineDot), 200);

  // Refresh the size of the canvas every second.
  setInterval(bind(this, this.setCanvasSize), 1000);
};
