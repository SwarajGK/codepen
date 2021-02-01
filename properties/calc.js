function calcTemplate() {
  return (
    '<div class="content-px">' +
    '\n' +
    '  This is the px sample cotent.' +
    '\n' +
    '</div>' +
    '<div class="content-percentage">' +
    '\n' +
    '  This is percentage sample content' +
    '\n' +
    '</div>' +
    '<div class="content-mix">' +
    '\n' +
    '  This is mix sample content' +
    '\n' +
    '</div>'
  );
}

function calcCss() {
  return (
    'div {' +
    '\n' +
    '  background-color: #009cfc;' +
    '\n' +
    '  color: white;' +
    '\n' +
    '  margin-bottom: 20px;' +
    '\n' +
    '}' +
    '\n' +
    '' +
    '\n' +
    '.content-px {' +
    '\n' +
    '  width: calc(100px - 50px);' +
    '\n' +
    '  ' +
    '\n' +
    '}' +
    '\n' +
    '' +
    '\n' +
    '.content-percentage {' +
    '\n' +
    '  width: calc(100% - 25%);' +
    '\n' +
    '}' +
    '\n' +
    '' +
    '\n' +
    '.content-mix {' +
    '\n' +
    '  width: calc(100% - 80px);' +
    '\n' +
    '}'
  );
}

// eslint-disable-next-line no-unused-vars
function getData() {
  return {
    html: calcTemplate(),
    css: calcCss()
  };
}
