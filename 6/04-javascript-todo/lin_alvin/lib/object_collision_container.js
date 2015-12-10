// Copyright Alvin Lin 2014
/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 * A container class for all physical objects that must interact
 * with each other. The physical objects must have their own
 * ObjectPhysicsModel. This class will handle object collisions
 * by calling methods from their ObjectPhysicsModel.
 */

function ObjectCollisionContainer() {
  this.objects_ = [];
}

/** Adds an ObjectPhysicsModel to the array for updating. */
ObjectCollisionContainer.prototype.addObject = function(object) {
  this.objects_.push(object);
};

ObjectCollisionContainer.prototype.removeObject = function(object) {
  var index = this.objects_.indexOf(object);
  if (index != -1) {
    this.objects_.splice(index, 1);
  }
};

ObjectCollisionContainer.prototype.getObjects = function() {
  return this.objects_;
};
