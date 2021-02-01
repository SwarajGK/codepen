function backdropFilterTemplate() {
  return (
    '<div class="wrapper">'+
    '    <div class="content">'+
    '      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literatures.'+
    '    </div>'+
    '</div>'
  );
}

function backdropFilterCss() {
  return (
    '.wrapper {'+ '\n' +
    '  height: 350px;'+ '\n' +
    '  width: 600px;'+ '\n' +
    '  background-image: url(\'https://www.browserstack.com/images/web-performance/hero-banner-variation.svg\');'+ '\n' +
    '  background-size: cover;'+ '\n' +
    '  margin: 0 auto;'+ '\n' +
    '}'+ '\n' +
    ''+ '\n' +
    '.content {'+ '\n' +
    '  width: 300px;'+ '\n' +
    '  margin: 0 auto;'+ '\n' +
    '  filter: blur(5px);'+ '\n' +
    '}'
  );
}

function getData() {
  return {
    html: backdropFilterTemplate(),
    css: backdropFilterCss()
  }
}