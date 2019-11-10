(function() {
  var attribute = "data-focustype";
  var clickedel = null;
  document.body.className += ' ' + 'focustype-loaded';
  document.addEventListener("mousedown", function(event) {
    clickedel = event.target;
  });
  document.addEventListener("mouseup", function(event) {
    clickedel = null;
  });
  document.addEventListener("focusin", function(event) {
    var type = (clickedel === event.target) ? "mouse" : "key";
    event.target.setAttribute(attribute, type);
    clickedel = null;
  });
  document.addEventListener("focusout", function(event) {
    event.target.removeAttribute(attribute);
  });
})();