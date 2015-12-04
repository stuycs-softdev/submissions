// Copyright Alvin Lin 2014
/**
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 * Some basic functions used throughout the website, necessary
 * for overall function or shortening of code.
 */

// bind() function allows setTimeout to work on non-static objects.
function bind(object, method) {
  return function() {
    return method.apply(object, arguments);
  };
}

// isChildOf takes two parameters, both of which are elements.
// It returns true if the second element is a direct child of the
// first element.
function isChildOf(parent, child) {
  var children = parent.childNodes;
  for (var i = 0; i < children.length; ++i) {
    if (children[i] == child) {
      return true;
    }
  }
  return false;
};

// getCookieExpirationDate() returns string to append to the cookie
// that will set the expiration date to a year from the current time.
function getCookieExpirationDate() {
  var date = new Date();
  var expirationDate = date.getTime() + 1000 * 3600 * 24 * 365;
  date.setTime(expirationDate);

  return ';path=/;expires=' + date.toUTCString() + ';';
};

// eraseCookie() erases the current cookie by setting its expiration
// date to a time before now.
function eraseCookie() {
  var date = new Date();
  var expirationDate = date.getTime() - 1;
  date.setTime(expirationDate);
  document.cookie = ';path=/;expires=' + date.toUTCString() + ';';
};

// setValueInCookie() stores the current cookie values in memory, then
// erases the cookie and rewrites it with the specified change to the
// specified key. The key-value data pairs are stored and parsed with JSON.
function setValueInCookie(key, value) {
  var keyvalues = {
      'tapHighScore' : getValueInCookie('tapHighScore'),
      'klickHighScore' : getValueInCookie('klickHighScore'),
      'repelHighScore' : getValueInCookie('repelHighScore'),
      'hugCount' : getValueInCookie('hugCount')};
  keyvalues[key] = value;
  var cookieString = 'siteData=' + JSON.stringify(keyvalues) +
      getCookieExpirationDate();

  eraseCookie();
  document.cookie = cookieString;
};

// getValueInCookie() returns the value associated with the given key
// stored in the cookie.
function getValueInCookie(key) {
  if (document.cookie == '') {
    return 0;
  }
  var siteData = document.cookie.split('=')[1];
  siteData = siteData.substr(0, siteData.length);
  var keyvalues = JSON.parse(siteData);
  return keyvalues[key];
};
