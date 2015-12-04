// Copyright Alvin Lin 2014
/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 * Some basic functions for math used throughout the website.
 */

function Maf() {}

Maf.absDistance = function(p1, p2) {
  return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
};

Maf.slope = function(p1, p2) {
  if (p2[0] - p1[0] == 0) {
    return null;
  }
  return (p2[1] - p1[1]) / (p2[0] - p1[0]);
};

Maf.james = function() {
  return 'julia';
};
