// Copyright Alvin Lin 2014
/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 * Generates and returns an SVG circle.
 * Has methods of mutability.
 */

function Circle(x, y, radius, fill) {
  this.x_ = x;
  this.y_ = y;
  this.radius_ = radius;
  this.fill_ = fill;
  this.model_ = null;

  this.circle_ = document.createElementNS('http://www.w3.org/2000/svg',
                                          'circle');
  this.updateCircle();
}

Circle.prototype.getSVG = function() {
  return this.circle_;
};

Circle.prototype.getObjectType = function() {
  return 'circle';
};

/**
 * Updates the PhysicalObjectModel and the circle.
 * Therefore, this must be called every ms.
 */
Circle.prototype.updateWithPhysics = function() {
  if (this.model_ !== null) {
    this.model_.update();
    this.setXY(this.model_.getXY());
  }
};

/**
 * This method actually sets the new attributes of the SVG circle.
 */
Circle.prototype.updateCircle = function() {
  this.circle_.setAttribute('cx', this.x_);
  this.circle_.setAttribute('cy', this.y_);
  this.circle_.setAttribute('r', this.radius_);
  this.circle_.setAttribute('fill', this.fill_);
  if (this.model_ !== null) {
    this.model_.setXY(this.getXY());
  }
};

Circle.prototype.getX = function() {
  return this.x_;
};

Circle.prototype.setX = function(x) {
  this.x_ = x;
  this.updateCircle();
};

Circle.prototype.getY = function() {
  return this.y_;
};

Circle.prototype.setY = function(y) {
  this.y_ = y;
  this.updateCircle();
};

Circle.prototype.getXY = function() {
  return [this.x_, this.y_];
};

/**
 * If there is only one parameter, then we assume that it is an array
 * containing the x and y coordinate. If there are two coordinates, then
 * we assume they are the x and y coordinates respectively.
 */
Circle.prototype.setXY = function(xy, optY) {
  if (optY === undefined) {
    this.x_ = xy[0];
    this.y_ = xy[1];
  } else {
    this.x_ = xy;
    this.y_ = optY;
  }
  this.updateCircle();
};

Circle.prototype.getRadius = function() {
  return this.radius_;
};

Circle.prototype.setRadius = function(radius) {
  this.radius_ = radius;
  this.updateCircle();
};

Circle.prototype.getFill = function() {
  return this.fill_;
};

Circle.prototype.setFill = function(fill) {
  this.fill_ = fill;
  this.updateCircle();
};

Circle.prototype.setModel = function(model) {
  this.model_ = model;
};

Circle.prototype.getModel = function() {
  return this.model_;
};

/* Get and set methods that apply only if a model exists */

Circle.prototype.getVX = function() {
  if (this.model_ !== null) {
    return this.model_.getVX();
  }
};

Circle.prototype.setVX = function(vx) {
  if (this.model_ !== null) {
    this.model_.setVX(vx);
  }
};

Circle.prototype.getVY = function() {
  if (this.model_ !== null) {
    return this.model_.getVY();
  }
};

Circle.prototype.setVY = function(vy) {
  if (this.model_ !== null) {
    this.model_.setVY(vy);
  }
};

Circle.prototype.getAX = function() {
  if (this.model_ !== null) {
    return this.model_.getAX();
  }
};

Circle.prototype.setAX = function(ax) {
  if (this.model_ !== null) {
    this.model_.setAX(ax);
  }
};

Circle.prototype.getAY = function() {
  if (this.model_ !== null) {
    return this.model_.getAY();
  }
};

Circle.prototype.setAY = function(ay) {
  if (this.model_ !== null) {
    this.model_.setAY(ay);
  }
};

Circle.prototype.setBounce = function(bounceFactor) {
  if (this.model_ !== null) {
    this.model_.setBounce(bounceFactor);
  }
};

Circle.prototype.setBoundsX = function(boundsX, optMaxBound) {
  if (this.model_ !== null) {
    this.model_.setBoundsX(boundsX, optMaxBound);
  }
};

Circle.prototype.setBoundsY = function(boundsY, optMaxBound) {
  if (this.model_ !== null) {
    this.model_.setBoundsY(boundsY, optMaxBound);
  }
};

Circle.prototype.setFriction = function(friction) {
  if (this.model_ !== null) {
    this.model_.setFriction(friction);
  }
};
