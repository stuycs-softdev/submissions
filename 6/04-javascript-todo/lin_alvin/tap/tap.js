// Copyright Alvin Lin 2014
/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 * Script for the tap game. Unconventional as fuck because I don't use a
 * game loop. Tap is a game in which red, blue, green, and yellow circles
 * move in a wave across red, blue, green, and yellow stripes and the player
 * must click on the circle when it is above its corresponding color. The
 * player loses when they click a dot on the wrong color or allow it to reach
 * the other side.
 */

function Tap(canvas, tapOverlayEl, scoreEl, highScoreEl) {
  this.canvas_ = canvas;
  this.width_ = canvas.offsetWidth;
  this.height_ = canvas.offsetHeight;
  this.overlayEl_ = tapOverlayEl;
  this.scoreEl_ = scoreEl;
  this.highScoreEl_ = highScoreEl;

  this.score_ = 0;
  this.highscore_ = 0;
  this.ballgencount_ = 0;
  this.gameLoop_ = null;

  // Do not remove this.lost_, it deletes the dots from the canvas if
  // the player has lost and there are other dots on the canvas.
  this.lost_ = true;
}

/**
 * Constant values for the generation of the dots and their movement.
 */
Tap.X = -100;
Tap.Y = 200;
Tap.RADIUS = 40;
Tap.AMPLITUDE = 150;

/**
 * Ranges for the randomly generated parameters of the dots.
 * A color is selected randomly from Tap.COLORS
 * and a wavelength and speed are randomly generated inside
 * these ranges.
 */
Tap.COLORS = [Colors.TAP_RED, Colors.TAP_BLUE,
              Colors.TAP_GREEN, Colors.TAP_YELLOW];
Tap.MIN_WAVELENGTH = 40;
Tap.MAX_WAVELENGTH = 80;
Tap.MIN_SPEED = 3000;
Tap.MAX_SPEED = 4000;

/**
 * The name of the key corresponding to this game's highscore value
 * that is stored in the site's cookies.
 */
Tap.COOKIE_KEY = 'tapHighScore';

Tap.prototype.buildGameStart = function() {
  // Build the background of the canvas.
  var backgroundHeight = this.height_ / 4;

  var red = new Rect(
      0, 0, this.width_,
      backgroundHeight, Colors.TAP_BG_RED);
  var blue = new Rect(
      0, this.height_ / 4, this.width_,
      backgroundHeight, Colors.TAP_BG_BLUE);
  var green = new Rect(
      0, this.height_ / 2, this.width_,
      backgroundHeight, Colors.TAP_BG_GREEN);
  var yellow = new Rect(
      0, 3 * this.height_ / 4, this.width_,
      backgroundHeight, Colors.TAP_BG_YELLOW);

  this.canvas_.appendChild(red.getSVG());
  this.canvas_.appendChild(blue.getSVG());
  this.canvas_.appendChild(green.getSVG());
  this.canvas_.appendChild(yellow.getSVG());

  // Set up the score and highscore elements.
  this.scoreEl_.innerHTML = 'Score: 0';
  this.highscore_ = getValueInCookie(Tap.COOKIE_KEY);
  if (this.highscore_ === null) {
    this.highscore_ = 0;
  }
  this.highScoreEl_.innerHTML = 'High score: ' + this.highscore_;

  // Bind the startGame() method to the overlay.
  this.overlayEl_.onclick = bind(this, this.startGame);
}

/**
 * Generates a dot with the given parameters and sets its onclick method
 * so that it will disappear when clicked. Game logic is also handled
 * in this function, if the dot reaches the end, or if it is clicked on
 * the wrong color, then the game will end (dots will stop generating).
 */
Tap.prototype.createDot = function(x, y, radius,
                                 wavelength,
                                 amplitude,
                                 color,
                                 speed) {
  var dot = new Circle(x, y, radius, color);
  this.canvas_.appendChild(dot.getSVG());
  this.ballgencount_++;

  dot.getSVG().onmousedown = bind(this, function() {
    var dotColorBounds = {
      RED : [0, 110],
      BLUE : [90, 210],
      GREEN : [190, 310],
      YELLOW : [290, 400]
    };
    if ((dot.getFill() == Colors.TAP_RED &&
        dot.getXY()[1] > dotColorBounds.RED[0] &&
        dot.getXY()[1] < dotColorBounds.RED[1])
        ||
        (dot.getFill() == Colors.TAP_BLUE &&
        dot.getXY()[1] > dotColorBounds.BLUE[0] &&
        dot.getXY()[1] < dotColorBounds.BLUE[1])
        ||
        (dot.getFill() == Colors.TAP_GREEN &&
        dot.getXY()[1] > dotColorBounds.GREEN[0] &&
        dot.getXY()[1] < dotColorBounds.GREEN[1])
        ||
        (dot.getFill() == Colors.TAP_YELLOW &&
        dot.getXY()[1] > dotColorBounds.YELLOW[0] &&
        dot.getXY()[1] < dotColorBounds.YELLOW[1])) {
      if (!this.lost_) {
        this.score_++;
        this.scoreEl_.innerHTML = 'Score: ' + this.score_;
      }
    } else {
      this.endGame();
    }
    this.canvas_.removeChild(dot.getSVG());
  });

  var animationSteps = this.width_ + radius;
  var animationStepTime = speed / animationSteps;
  var animationTime = 0;
  var x = 0;

  // Sets the animation for the dots expanding.
  for (var i = 0; i < animationSteps; ++i) {
    animationTime += animationStepTime;
    setTimeout(bind(this, function() {
      dot.setXY(x++, y - (amplitude * Math.sin(x / wavelength)));
      if (this.lost_ && isChildOf(this.canvas_, dot.getSVG())) {
        this.canvas_.removeChild(dot.getSVG());
      }
    }), animationTime);
  }

  // Removes the dots from the canvas when the animation finishes unless
  // they already have been removed. If they have not already been removed,
  // it means the player failed to click it in time and they lost.
  setTimeout(bind(this, function() {
    if (isChildOf(this.canvas_, dot.getSVG())) {
      this.canvas_.removeChild(dot.getSVG());
      this.endGame();
    }
  }), animationTime);
};

Tap.prototype.createRandomDot = function() {
  var x = Tap.X;
  var y = Tap.Y;
  var radius = Tap.RADIUS;
  var wavelength = Math.floor(Math.random() *
      (Tap.MAX_WAVELENGTH -
      Tap.MIN_WAVELENGTH)) +
      Tap.MIN_WAVELENGTH;
  if (Math.random() > 0.5) {
    var amplitude = Tap.AMPLITUDE;
  } else {
    var amplitude = -Tap.AMPLITUDE;
  }
  var color = Tap.COLORS[Math.floor(Math.random() * Tap.COLORS.length)];
  var speed = Math.floor(Math.random() *
      (Tap.MAX_SPEED - Tap.MIN_SPEED)) +
      Tap.MIN_SPEED;

  this.createDot(x, y, radius, wavelength, amplitude, color, speed);

  // Additional 15% chance that an extra dot will be generated if and only
  // if a double ball was not generated last time.
  if (Math.random() < 0.15 && this.ballgencount_ > 1) {
    this.createRandomDot();
    this.ballgencount_ = 0;
  }
};

Tap.prototype.startGame = function() {
  // Reset the score and score display element.
  this.score_ = 0;
  this.scoreEl_.innerHTML = 'Score: 0';

  // Start the game loop.
  if (this.lost_) {
    this.gameLoop_ = setInterval(bind(this, this.createRandomDot), 1000);
  }
  this.lost_ = false;

  // Hide the overlay.
  this.overlayEl_.style.zIndex = -1;
};

Tap.prototype.endGame = function() {
  // Set the cookie to record the highscore.
  if (this.highscore_ < this.score_) {
    setValueInCookie(Tap.COOKIE_KEY, this.score_);
    this.highscore_ = this.score_;
    this.highScoreEl_.innerHTML = 'High score: ' + this.score_;
  }

  // Stop the game loop.
  this.lost_ = true;
  clearInterval(this.gameLoop_);

  // Bring back the overlay.
  this.overlayEl_.style.lineHeight = '100px';
  this.overlayEl_.style.zIndex = 1;
  this.overlayEl_.innerHTML = 'You lost!<br />Try again';
};
