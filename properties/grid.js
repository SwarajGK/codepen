function gridTemplate() {
  return (
    "<div class='grid-container'>" +
    "<div class='test'></div><div class='test'></div><div class='test'></div><div class='test'></div><div class='test'></div><div class='test'></div><div class='test'></div><div class='test'></div><div class='test'></div>" +
    "</div>"
  );
}

function gridCss() {
  return '.grid-container {'+ '\n' +
  '  display: grid;'+ '\n' +
  '  grid-template-columns: 100px 50px 100px;'+ '\n' +
  '  grid-template-rows: 80px auto 80px;'+ '\n' +
  '  column-gap: 10px;'+ '\n' +
  '  row-gap: 15px;'+ '\n' +
  '  align-items: center;'+ '\n' +
  '  justify-content: center;'+ '\n' +
  '  justify-items: center;'+ '\n' +
  '}'+ '\n' +
  '.test {'+ '\n' +
  '  width: 50px;'+ '\n' +
  '  height: 50px;'+ '\n' +
  '  background-color: red;'+ '\n' +
  '}';
}

function getData() {
  return {
    html: gridTemplate(),
    css: gridCss()
  };
}
