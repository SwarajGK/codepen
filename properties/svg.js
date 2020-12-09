function svgTemplate() {
  return (
    '<svg height="100" width="100">'+
    '  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red"></circle>'+
    '  Sorry, your browser does not support inline SVG.  '+
    '</svg>'
  )
}

function getData() {
  return {
    html: svgTemplate()
  };
}
