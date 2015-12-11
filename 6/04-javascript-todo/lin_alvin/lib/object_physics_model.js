// Copyright Alvin Lin 2014
/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 * Models the physics of a physical object. Does not actually do
 * anything, merely a container for their values.
 * The velocities stored are in terms of pixels/second.
 * Likewise, the accelerations stored are in terms of pixels/second^2.
 * The bounds tell where the object should bounce, they should be less
 * that the actually bouncing borders because the bouncing only occurs
 * when this.x_ or this.y_ hit the bound. This assumes that the object
 * is a single point without width or height, so you must factor in
 * the width and height of the object externally.
 */

function ObjectPhysicsModel(x, y, vx, vy, ax, ay) {
  this.x_ = x;
  this.y_ = y;
  this.vx_ = vx;
  this.vy_ = vy;
  this.ax_ = ax;
  this.ay_ = ay;

  if (this.ax_ === null || this.ax_ === undefined) {
    this.ax_ = ObjectPhysicsModel.DEFAULT_AX;
  }
  if (this.ay_ === null || this.ay_ === undefined) {
    this.ay_ = ObjectPhysicsModel.DEFAULT_AY;
  }

  /* The variables below will be set by methods */
  this.bounceFactor_ = 1;
  this.friction_ = 0;
  this.boundsX_ = [-1000, 1000];
  this.boundsY_ = [-1000, 1000];
}

/**
 * The default downwards acceleration, similar to gravitational acceleration.
 * We will assume acceleration is constant and that our velocity increases
 * or decreases linearly.
 */
ObjectPhysicsModel.DEFAULT_AY = -200;

/**
 * The default horizontal acceleration. The object should not be accelerating
 * horizontally.
 */
ObjectPhysicsModel.DEFAULT_AX = 0;

/** Getter and setter methods */
ObjectPhysicsModel.prototype.getX = function() {
  return this.x_;
};

ObjectPhysicsModel.prototype.setX = function(x) {
  this.x_ = x;
};

ObjectPhysicsModel.prototype.getY = function() {
  return this.y_;
};

ObjectPhysicsModel.prototype.setY = function(y) {
  this.y_ = y;
};

ObjectPhysicsModel.prototype.getXY = function() {
  return [this.x_, this.y_];
};

/**
 * If there is only one parameter, then we assume that it is an array
 * containing the x and y coordinate. If there are two coordinates, then
 * we assume they are the x and y coordinates respectively.
 */
ObjectPhysicsModel.prototype.setXY = function(xy, optY) {
  if (optY === undefined) {
    this.x_ = xy[0];
    this.y_ = xy[1];
  } else {
    this.x_ = xy;
    this.y_ = optY;
  }
};

/**
 * Y-velocity is negated so that positive numbers represent an
 * upwards acceleration. Same for y-acceleration.
 */
ObjectPhysicsModel.prototype.getVX = function() {
  return this.vx_;
};

ObjectPhysicsModel.prototype.setVX = function(vx) {
  this.vx_ = vx;
};

ObjectPhysicsModel.prototype.getVY = function() {
  return -this.vy_;
};

ObjectPhysicsModel.prototype.setVY = function(vy) {
  this.vy_ = -vy;
};

ObjectPhysicsModel.prototype.getAX = function() {
  return this.ax_;
};

ObjectPhysicsModel.prototype.setAX = function(ax) {
  this.ax_ = ax;
};

ObjectPhysicsModel.prototype.getAY = function() {
  return -this.ay_;
};

ObjectPhysicsModel.prototype.setAY = function(ay) {
  this.ay_ = -ay;
};

/**
 * bounceFactor is a decimal from 0 to 1 representing the efficiency of the
 * bouncing of the ball, or how much velocity it will bounce back up with.
 * It is set at a default of one when the object is initialized.
 */
ObjectPhysicsModel.prototype.setBounce = function(bounceFactor) {
  this.bounceFactor_ = bounceFactor;
};

ObjectPhysicsModel.prototype.setBoundsX = function(boundsX, optMaxBound) {
  if (boundsX !== null && boundsX !== undefined) {
    if (optMaxBound === undefined) {
      this.boundsX_ = boundsX;
    } else {
      this.boundsX_ = [boundsX, optMaxBound];
    }
  }
};

ObjectPhysicsModel.prototype.setBoundsY = function(boundsY, optMaxBound) {
  if (boundsY !== null && boundsY !== undefined) {
    if (optMaxBound === undefined) {
      this.boundsY_ = boundsY;
    } else {
      this.boundsY_ = [boundsY, optMaxBound];
    }
  }
};

/**
 * Friction is a number in pixels / s^2 that the dots will be slowed by
 * when they bounce or hit the ground. It is set at a default of zero when
 * the object is initialized.
 */
ObjectPhysicsModel.prototype.setFriction = function(friction) {
  this.friction_ = friction;
};

/**
 * This function is intended to be called once per 10ms to update the
 * object model according to the physics.
 */
ObjectPhysicsModel.prototype.update = function() {
  this.x_ = Math.min(Math.max(
      this.boundsX_[0], this.x_ + this.vx_ / 100), this.boundsX_[1]);
  this.y_ = Math.min(Math.max(
      this.boundsY_[0], this.y_ + this.vy_ / 100), this.boundsY_[1]);

  if (this.x_ == this.boundsX_[0] || this.x_ == this.boundsX_[1]) {
    this.vx_ *= -this.bounceFactor_;
  }

  this.vx_ += this.ax_ / 100;
  this.vy_ -= this.ay_ / 100;
  if (this.y_ == this.boundsY_[1]) {
    this.vy_ *= -this.bounceFactor_;
    if (this.vx_ > 0) {
      this.vx_ -= this.friction_ / 100;
    } else if (this.vx_ < 0) {
      this.vx_ += this.friction_ / 100;
    }
  }

  if (this.y_ == this.boundsY_[0]) {
    this.vy_ *= -1;
  }
};
