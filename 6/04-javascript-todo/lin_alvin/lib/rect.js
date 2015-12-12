// Copyright Alvin Lin 2014
/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 * Generates and returns an SVG rectangle.
 * Has methods of mutability.
 */

function Rect(x, y, width, height, fill) {
  this.x_ = x;
  this.y_ = y;
  this.width_ = width;
  this.height_ = height;
  this.fill_ = fill;
  this.model_ = null;

  this.rect_ = document.createElementNS('http://www.w3.org/2000/svg',
                                        'rect');
  this.updateRect();
}

Rect.prototype.getSVG = function() {
  return this.rect_;
};

Rect.prototype.getObjectType = function() {
  return 'rect';
};

Rect.prototype.updateWithPhysics = function() {
  if (this.model_ !== null) {
    this.model_.update();
    this.setXY(this.model_.getXY());
  }
};

/**
 * This methods actually updates the attributes of the SVG Rect.
 */
Rect.prototype.updateRect = function() {
  this.rect_.setAttribute('x', this.x_);
  this.rect_.setAttribute('y', this.y_);
  this.rect_.setAttribute('width', this.width_);
  this.rect_.setAttribute('height', this.height_);
  this.rect_.setAttribute('fill', this.fill_);
  if (this.model_ !== null) {
    this.model_.setXY(this.getXY());
  }
};

/**
 * All the getter and setter methods for the rectangle's position
 * refer to its upper left corner.
 */
Rect.prototype.getX = function() {
  return this.x_;
};

Rect.prototype.setX = function(x) {
  this.x_ = x;
  this.updateRect();
};

Rect.prototype.getY = function() {
  return this.y_;
};

Rect.prototype.setY = function(y) {
  this.y_ = y;
  this.updateRect();
};

Rect.prototype.getXY = function() {
  return [this.x_, this.y_];
};

/**
 * If there is only one parameter, then we assume that it is an array
 * containing the x and y coordinate. If there are two coordinates, then
 * we assume they are the x and y coordinates respectively.
 */
Rect.prototype.setXY = function(xy, optY) {
  if (optY === undefined) {
    this.x_ = xy[0];
    this.y_ = xy[1];
  } else {
    this.x_ = xy;
    this.y_ = optY;
  }
  this.updateRect();
};

Rect.prototype.getWidth = function() {
  return this.width_;
};

Rect.prototype.setWidth = function(width) {
  this.width_ = width;
  this.updateRect();
};

Rect.prototype.getHeight = function() {
  return this.height_;
};

Rect.prototype.setHeight = function(height) {
  this.height_ = height;
  this.updateRect();
};

Rect.prototype.getFill = function() {
  return this.fill_;
};

Rect.prototype.setFill = function(fill) {
  this.fill_ = fill;
  this.updateRect();
};

Rect.prototype.addModel = function(model) {
  this.model_ = model;
};

Rect.prototype.getModel = function() {
  return this.model_;
};

/**
 * Although Rect can have a ObjectPhysicsModel, it does not yet
 * behave correctly according to the laws of physics because the
 * ObjectPhysicsModel does not factor in the width and height of
 * an object. Rect physics will only function correctly if the width
 * and height are factored in externally.
 * The get and set methods below apply only if a model exists.
 */

Rect.prototype.getVX = function() {
  if (this.model_ !== null) {
    return this.model_.getVX();
  }
};

Rect.prototype.setVX = function(vx) {
  if (this.model_ !== null) {
    this.model_.setVX(vx);
  }
};

Rect.prototype.getVY = function() {
  if (this.model_ !== null) {
    return this.model_.getVY();
  }
};

Rect.prototype.setVY = function(vy) {
  if (this.model_ !== null) {
    this.model_.setVY(vy);
  }
};

Rect.prototype.setBounce = function(bounceFactor) {
  if (this.model_ !== null) {
    this.model_.setBounce(bounceFactor);
  }
};

Rect.prototype.setBoundsX = function(boundsX, optMaxBound) {
  if (this.model_ !== null) {
    this.model_.setBoundsX(boundsX, optMaxBound);
  }
};

Rect.prototype.setBoundsY = function(boundsY, optMaxBound) {
  if (this.model_ !== null) {
    this.model_.setBoundsY(boundsY, optMaxBound);
  }
};

Rect.prototype.setFriction = function(friction) {
  if (this.model_ !== null) {
    this.model_.setFriction(friction);
  }
};
