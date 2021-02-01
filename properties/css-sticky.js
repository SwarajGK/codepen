function stickyTemplate() {
  return '<div class="wrapper">' +
  '    <div class="header">HEADER</div>' +
  '      <div class="body">BODY</div>' +
  '    <div class="footer">FOOTER</div>' +
  '  </div>';
}

function stickyCss() {
  return (
    ".wrapper {" + "\n" +
    "  height: 300px;" + "\n" +
    "  overflow: auto;" + "\n" +
    "}" + "\n" +
    ".header {" + "\n" +
    "  background-color: #00f3fe;" + "\n" +
    "  padding: 20px 10px;" + "\n" +
    "  position: sticky;" + "\n" +
    "  top: 0px;" + "\n" +
    "}" + "\n" +
    ".body {" + "\n" +
    "  padding: 120px 10px;" + "\n" +
    "  background-color: #009cfc;" + "\n" +
    "}" + "\n" +
    ".footer {" + "\n" +
    "  background-color: #b0dffc;" + "\n" +
    "  padding: 30px 10px;" + "\n" +
    "}"
  );
}

function getData() {
  return {
    html: stickyTemplate(),
    css: stickyCss()
  };
}
