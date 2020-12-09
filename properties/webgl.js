function webglTemplate() {
  return (
    '<p>A very simple WebGL program that still shows some color and'+
    '    user interaction.</p> '+
    '<p>You can repeatedly click the empty canvas or the button below'+
    '    to change color.</p>'+
    '<canvas id="canvas-view">Your browser does not seem to support'+
    '    HTML5 canvas.</canvas>'+
    '<button id="color-switcher">Press here to switch color</button>'
  );
}

function webglCss() {
  return (
    'body {'+ '\n' +
    '  text-align : center;'+ '\n' +
    '}'+ '\n' +
    'canvas {'+ '\n' +
    '  display : block;'+ '\n' +
    '  width : 280px;'+ '\n' +
    '  height : 210px;'+ '\n' +
    '  margin : auto;'+ '\n' +
    '  padding : 0;'+ '\n' +
    '  border : none;'+ '\n' +
    '  background-color : black;'+ '\n' +
    '}'+ '\n' +
    'button {'+ '\n' +
    '  display : inline-block;'+ '\n' +
    '  font-size : inherit;'+ '\n' +
    '  margin : auto;'+ '\n' +
    '  padding : 0.6em;'+ '\n' +
    '}'
  );
}

function webglJs() {
  return (
    'window.addEventListener("load", function setupWebGL (evt) {'+ '\n' +
    '  "use strict"'+ '\n' +
    ''+ '\n' +
    '  // Cleaning after ourselves. The event handler removes'+ '\n' +
    '  // itself, because it only needs to run once.'+ '\n' +
    '  window.removeEventListener(evt.type, setupWebGL, false);'+ '\n' +
    ''+ '\n' +
    '  // Adding the same click event handler to both canvas and'+ '\n' +
    '  // button.'+ '\n' +
    '  var canvas = document.querySelector("#canvas-view");'+ '\n' +
    '  var button = document.querySelector("#color-switcher");'+ '\n' +
    '  canvas.addEventListener("click", switchColor, false);'+ '\n' +
    '  button.addEventListener("click", switchColor, false);'+ '\n' +
    ''+ '\n' +
    '  // A variable to hold the WebGLRenderingContext.'+ '\n' +
    '  var gl;'+ '\n' +
    ''+ '\n' +
    '  // The click event handler.'+ '\n' +
    '  function switchColor () {'+ '\n' +
    '    // Referring to the externally defined gl variable.'+ '\n' +
    '    // If undefined, try to obtain the WebGLRenderingContext.'+ '\n' +
    '    // If failed, alert user of failure.'+ '\n' +
    '    // Otherwise, initialize the drawing buffer (the viewport).'+ '\n' +
    '    if (!gl) {'+ '\n' +
    '      gl = canvas.getContext("webgl")'+ '\n' +
    '        || canvas.getContext("experimental-webgl");'+ '\n' +
    '      if (!gl) {'+ '\n' +
    '        alert("Failed to get WebGL context. Your browser or device may not support WebGL.");'+ '\n' +
    '        return;'+ '\n' +
    '      }'+ '\n' +
    '      gl.viewport(0, 0,'+ '\n' +
    '        gl.drawingBufferWidth, gl.drawingBufferHeight);'+ '\n' +
    '    }'+ '\n' +
    '    // Get a random color value using a helper function.'+ '\n' +
    '    var color = getRandomColor();'+ '\n' +
    '    // Set the clear color to the random color.'+ '\n' +
    '    gl.clearColor(color[0], color[1], color[2], 1.0);'+ '\n' +
    '    // Clear the context with the newly set color. This is'+ '\n' +
    '    // the function call that actually does the drawing.'+ '\n' +
    '    gl.clear(gl.COLOR_BUFFER_BIT);'+ '\n' +
    '  }'+ '\n' +
    ''+ '\n' +
    '  // Random color helper function.'+ '\n' +
    '  function getRandomColor() {'+ '\n' +
    '    return [Math.random(), Math.random(), Math.random()];'+ '\n' +
    '  }'+ '\n' +
    ''+ '\n' +
    '}, false);'
  );
}

function getData() {
  return {
    html: webglTemplate(),
    css: webglCss(),
    js: webglJs()
  };
}