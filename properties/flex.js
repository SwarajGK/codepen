function flexTemplate() {
  return (
    '<div class="header">Header</div>' +
    '  <div id="main">' +
    '    <div class="article">Article</div>' +
    '    <div class="nav">Nav</div>' +
    '    <div class="aside">Aside</div>' +
    "  </div>" +
    '<div class="footer">Footer</div>'
  );
}

function flexCss() {
  return (
    "body {" +
    "\n" +
    "  display: flex;" +
    "\n" +
    "  min-height: 100vh;" +
    "\n" +
    "  flex-direction: column;" +
    "\n" +
    "  margin: 0;" +
    "\n" +
    "}" +
    "\n" +
    "#main {" +
    "\n" +
    "  display: flex;" +
    "\n" +
    "  flex: 1;" +
    "\n" +
    "}" +
    "\n" +
    ".article {" +
    "\n" +
    "  flex: 1;" +
    "\n" +
    "  order: 1;" +
    "\n" +
    "}" +
    "\n" +
    ".nav," +
    "\n" +
    ".aside {" +
    "\n" +
    "  flex: 0 0 20vw;" +
    "\n" +
    "}" +
    "\n" +
    ".nav {" +
    "\n" +
    "  background: #00f3fe;" +
    "\n" +
    "  order: 3;" +
    "\n" +
    "}" +
    "\n" +
    ".aside {" +
    "\n" +
    "  background: #004f80;" +
    "\n" +
    "  order: 2;" +
    "\n" +
    "}" +
    "\n" +
    ".header," +
    "\n" +
    ".footer {" +
    "\n" +
    "  background: #009cfc;" +
    "\n" +
    "  height: 20vh;" +
    "\n" +
    "}" +
    "\n" +
    ".header," +
    "\n" +
    ".footer," +
    "\n" +
    ".article," +
    "\n" +
    ".nav," +
    "\n" +
    ".aside {" +
    "\n" +
    "  padding: 1em;" +
    "\n" +
    "}"
  );
}

function getData() {
  return {
    html: flexTemplate(),
    css: flexCss()
  };
}
