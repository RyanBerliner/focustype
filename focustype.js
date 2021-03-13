/*!
  * focustype v0.1.1 (https://ryanberliner.com/focustype/)
  * Copyright 2019 Ryan Berliner
  * Licensed under MIT (https://github.com/RyanBerliner/focustype/blob/master/LICENSE)
  */

(function(window, document, undefined) {
  if (window === undefined || document === undefined) return;

  var attribute = "data-focustype";
  var bodyClass = "focustype-activated";
  var clickedel = null;
  var prevClickedel = null;
  var hitkey = false; // Set to true for 10ms after a key hit. This is enough time 
                      // for focus to jump.
  var hitkeytimeout = null;

  var focusable = function(element) {
    var tabindex = element.tabIndex;
    return tabindex >= 0;
  }

  var mousedown = function(event) {
    clickedel = event.target;
    if (prevClickedel !== null) {
      prevClickedel.removeAttribute(attribute);
    }
    // Only on left click, right click sometimes doesn't give a mouseup event.
    if (event.button === 0 && focusable(clickedel)) {
      clickedel.setAttribute(attribute, "mouse");
    }
  }

  var mouseup = function(event) {
    prevClickedel = clickedel;
    clickedel = null;
  }

  var focusin = function(event) {
    var type = "unknown";
    if (clickedel === event.target || event.target.contains(clickedel)) {
      type = "mouse";
    } else if (hitkey) {
      type = "key";
    }
    event.target.setAttribute(attribute, type);
    clickedel = null;
    if (prevClickedel !== null) {
      prevClickedel.removeAttribute(attribute);
    }
  }

  var focusout = function(event) {
    event.target.removeAttribute(attribute);
    prevClickedel = null;
  }

  var keydown = function(event) {
    if (hitkeytimeout != null) {
      clearTimeout(hitkeytimeout);
    }
    hitkey = true;
    hitkeytimeout = setTimeout(function() {
      hitkey = false;
    }, 10);
  }

  var on = function() {
    document.body.classList.add(bodyClass);
    document.addEventListener("mousedown", mousedown);
    document.addEventListener("mouseup", mouseup);
    document.addEventListener("focusin", focusin);
    document.addEventListener("focusout", focusout);
    document.addEventListener("keydown", keydown);
  }

  on();

  window.FocusType = {
    on: on,
    isOn: function() {
      return document.body.classList.contains(bodyClass)
    },
    off: function() {
      document.body.classList.remove(bodyClass);
      document.removeEventListener("mousedown", mousedown);
      document.removeEventListener("mouseup", mouseup);
      document.removeEventListener("focusin", focusin);
      document.removeEventListener("focusout", focusout);
      document.removeEventListener("keydown", keydown);
    },
  };
})(window, document, undefined);