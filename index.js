(function() {
  var attribute = "data-focustype";
  var clickedel = null;
  var prevClickedel = null;
  var focusable = function(element) {
    var tabindex = element.tabIndex;
    return tabindex >= 0;
  }
  document.body.className += ' ' + 'focustype-loaded';
  document.addEventListener("mousedown", function(event) {
    clickedel = event.target;
    if (prevClickedel !== null) {
      prevClickedel.removeAttribute(attribute);
    }
    // Only on left click, right click sometimes doesn't give a mouseup event.
    if (event.which === 1 && focusable(clickedel)) {
      clickedel.setAttribute(attribute, "mouse");
    }
  });
  document.addEventListener("mouseup", function(event) {
    prevClickedel = clickedel;
    clickedel = null;
  });
  document.addEventListener("focusin", function(event) {
    // We need to check for children here as well...
    var type = (clickedel === event.target) ? "mouse" : "key";
    event.target.setAttribute(attribute, type);
    clickedel = null;
    if (prevClickedel !== null) {
      prevClickedel.removeAttribute(attribute);
    }
  });
  document.addEventListener("focusout", function(event) {
    event.target.removeAttribute(attribute);
    prevClickedel = null;
  });
})();