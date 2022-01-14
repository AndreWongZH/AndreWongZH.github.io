// load tag canvas library
window.onload = function () {
  try {
    TagCanvas.textColour = '#43dde6';
    TagCanvas.noSelect = true;
    TagCanvas.wheelZoom = false;
    TagCanvas.textHeight = 35;
    TagCanvas.Start('myCanvas', 'tags');
  } catch (e) {
    document.getElementById('myCanvasContainer').style.display = 'none';
  }
};