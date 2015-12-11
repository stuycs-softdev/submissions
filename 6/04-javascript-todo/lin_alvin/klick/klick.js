// Copyright Alvin Lin 2014
/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 * Script for the klick game. Klick is a game in which the player controls
 * a red ball that always moves towards the player's cursor. The ball will
 * jump towards the player's cursor whenever the player clicks. Other colored
 * balls will bounce across the screen, and the player must avoid touch all
 * other balls.
 * TODO: consider renaming Klick
 */

function Klick(canvas, klickOverlayEl, scoreEl, highScoreEl) {
  this.canvas_ = canvas;
  this.width_ = canvas.offsetWidth;
  this.height_ = canvas.offsetHeight;
  this.overlayEl_ = klickOverlayEl;
  this.scoreEl_ = scoreEl;
  this.highScoreEl_ = highScoreEl;

  // Necessary global variables.
  this.score_ = 0;
  this.highscore_ = 0;
  this.gameLoop_ = null;
  this.gameLoop2_ = null;

  // This array will hold all the balls that the player does not control.
  this.obstacleBalls_ = [];

  // this.lost_ prevents the canvas and game from breaking if the user
  // doubleclicks the overlay.
  this.lost_ = true;
}

/**
 * Values for the generation of the player dot.
 */
Klick.PLAYER_DOT_RADIUS = 10;
Klick.PLAYER_DOT_COLOR = Colors.KLICK_RED;
Klick.PLAYER_DOT_INITIAL_X = 200;
Klick.PLAYER_DOT_INITIAL_Y = 350;
Klick.PLAYER_DOT_XBOUNDS = [7.5, 592.5];
Klick.PLAYER_DOT_YBOUNDS = [7.5, 390];

/**
 * Ranges for the randomly generated parameters of the obstacle dots.
 * A color is selected randomly from Klick.COLORS and other parameters
 * are generated inside the specifed range.
 */
Klick.OBSTACLE_DOT_POSSIBLE_X = [-10, 610];
Klick.OBSTACLE_DOT_MIN_Y = 100;
Klick.OBSTACLE_DOT_MAX_Y = 300;
Klick.OBSTACLE_DOT_MIN_VX = 100;
Klick.OBSTACLE_DOT_MAX_VX = 150;
Klick.OBSTACLE_DOT_MIN_VY = 100;
Klick.OBSTACLE_DOT_MAX_VY = 200;
Klick.OBSTACLE_DOT_MIN_RADIUS = 10;
Klick.OBSTACLE_DOT_MAX_RADIUS = 20;

/**
 * The name of the key corresponding to this game's highscore value
 * that is stored in the site's cookies.
 */
Klick.COOKIE_KEY = 'klickHighScore';

Klick.prototype.buildGameStart = function() {
  // Necessary SVG elements and the physics model of the moving
  // circle.
  this.playerdot_ = new Circle(0, 0,
                               Klick.PLAYER_DOT_RADIUS,
                               Klick.PLAYER_DOT_COLOR);
  this.playerdot_.setModel(new ObjectPhysicsModel(0, 0, 0, 0, null, null));
  this.playerdot_.setAY(0);
  this.playerdot_.setBounce(1.0);
  this.playerdot_.setBoundsX(Klick.PLAYER_DOT_XBOUNDS);
  this.playerdot_.setBoundsY(Klick.PLAYER_DOT_YBOUNDS);

  // Create the background.
  this.background_ = new Rect(
      0, 0, this.width_, this.height_, Colors.KLICK_BG);
  this.canvas_.appendChild(this.background_.getSVG());

  // Set up the score and highscore elements.
  this.scoreEl_.innerHTML = 'Score: 0';
  this.highscore_ = getValueInCookie(Klick.COOKIE_KEY);
  if (this.highscore_ === null) {
    this.highscore_ = 0;
  }
  this.highScoreEl_.innerHTML = 'High score: ' + this.highscore_;

  // Bind the startGame() method to the overlay.
  this.overlayEl_.onclick = bind(this, this.startGame);
};

Klick.prototype.onMouseMove = function(event) {
  var mouseX = event.pageX - this.canvas_.parentElement.offsetLeft;
  var mouseY = event.pageY - this.canvas_.parentElement.offsetTop;
  this.playerdot_.setVY(this.playerdot_.getY() - mouseY);
  this.playerdot_.setVX(mouseX - this.playerdot_.getX());
};

Klick.prototype.createObstacleDot = function(x, y,
                                             vx, vy,
                                             radius,
                                             bounceFactor,
                                             fill) {
  var obstacleBall = new Circle(x, y, radius, fill);
  obstacleBall.setModel(new ObjectPhysicsModel(
      x, y, vx, vy, 0, 0));
  obstacleBall.setBounce(bounceFactor);
  obstacleBall.setBoundsY(radius, this.height_ - radius);
  this.obstacleBalls_.push(obstacleBall);
  this.canvas_.appendChild(obstacleBall.getSVG());
};

Klick.prototype.createRandomObstacleDot = function() {
  var x = Klick.OBSTACLE_DOT_POSSIBLE_X[
      Math.floor(Math.random() * Klick.OBSTACLE_DOT_POSSIBLE_X.length)];
  var y = Math.floor(Math.random() *
      (Klick.OBSTACLE_DOT_MAX_Y - Klick.OBSTACLE_DOT_MIN_Y)) +
      Klick.OBSTACLE_DOT_MIN_Y;
  var vx = Math.floor(Math.random() *
      (Klick.OBSTACLE_DOT_MAX_VX - Klick.OBSTACLE_DOT_MIN_VX)) +
      Klick.OBSTACLE_DOT_MIN_VX;
  var vy = Math.floor(Math.random() *
      (Klick.OBSTACLE_DOT_MAX_VY - Klick.OBSTACLE_DOT_MIN_VY)) +
      Klick.OBSTACLE_DOT_MIN_VY;
  if (x == 610) {
    vx *= -1;
  }
  var fill = Colors.KLICK_BLUE;
  if (Math.random() > 0.5) {
    vy *= -1;
    fill = Colors.KLICK_GREEN;
  }
  var radius = Math.floor(Math.random() *
      (Klick.OBSTACLE_DOT_MAX_RADIUS - Klick.OBSTACLE_DOT_MIN_RADIUS)) +
      Klick.OBSTACLE_DOT_MIN_RADIUS;
  var bounceFactor = Math.random() * 0.25 + 0.75;

  this.createObstacleDot(x, y, vx, vy, radius, bounceFactor, fill);
};

Klick.prototype.updateObstacleDots = function() {
  for (var i = 0; i < this.obstacleBalls_.length; ++i) {
    this.obstacleBalls_[i].updateWithPhysics();
    if (this.obstacleBalls_[i].getX() < -20 ||
        this.obstacleBalls_[i].getX() > 620) {
      if (isChildOf(this.canvas_, this.obstacleBalls_[i].getSVG())) {
        this.canvas_.removeChild(this.obstacleBalls_[i].getSVG());
        this.obstacleBalls_.splice(i, 1);
        this.score_++;
        this.scoreEl_.innerHTML = 'Score: ' + this.score_;
      }
    } else if (Maf.absDistance(
        this.obstacleBalls_[i].getXY(), this.playerdot_.getXY()) <
        this.obstacleBalls_[i].getRadius() + this.playerdot_.getRadius()) {
      this.endGame();
    }
  }
};

Klick.prototype.startGame = function() {
  // Reset the global variables and the score.
  this.score_ = 0;
  this.scoreEl_.innerHTML = 'Score: 0';

  // Add the player ball if it does not yet exist.
  // Every time the game starts we will reset its velocity and
  // position.
  this.playerdot_.setXY(Klick.PLAYER_DOT_INITIAL_X,
                        Klick.PLAYER_DOT_INITIAL_Y);
  this.playerdot_.setVX(0);
  this.playerdot_.setVY(0);
  if (!isChildOf(this.canvas_, this.playerdot_.getSVG())) {
    this.canvas_.appendChild(this.playerdot_.getSVG());
  }

  // Clear all the obstacle balls from the canvas.
  for (var i = 0; i < this.obstacleBalls_.length; ++i) {
    this.canvas_.removeChild(this.obstacleBalls_[i].getSVG());
  }
  this.obstacleBalls_ = [];

  // Hide the overlay.
  this.overlayEl_.style.zIndex = -1;

  // Bind onMouseMove() to the canvas.
  this.canvas_.onmousemove = bind(this, function(event) {
    this.onMouseMove(event);
  });

  // Start the game loops. We will use two independent game loops, one
  // for updating the player ball's position and position of the obstacle
  // balls, and the other for creating obstacle dots.
  if (this.lost_) {
    this.gameLoop_ = setInterval(bind(this, function() {
      this.playerdot_.updateWithPhysics();
      this.updateObstacleDots();
    }), 1);
    this.gameLoop2_ = setInterval(
        bind(this, this.createRandomObstacleDot), 400);
  }

  this.lost_ = false;
};

Klick.prototype.endGame = function() {
  // Set the cookie to record the highscore.
  if (this.highscore_ < this.score_) {
    setValueInCookie(Klick.COOKIE_KEY, this.score_);
    this.highscore_ = this.score_;
    this.highScoreEl_.innerHTML = 'High score: ' + this.score_;
  }

  // Stop the game loops.
  clearInterval(this.gameLoop_);
  clearInterval(this.gameLoop2_);
  this.lost_ = true;

  // Bring back the overlay.
  this.overlayEl_.style.lineHeight = '100px';
  this.overlayEl_.style.zIndex = 1;
  this.overlayEl_.innerHTML = 'You lost!<br />Try again';
};
