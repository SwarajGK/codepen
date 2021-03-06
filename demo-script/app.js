var html = document.getElementById('html'),
  css = document.getElementById('css'),
  js = document.getElementById('js'),
  runButton = document.getElementById('run'),
  code = document.getElementById('code').contentWindow.document;

function updateCode(htmlText, cssText, jsText, property) {
  code.open();
  if (property === 'svg') {
    html.value = htmlText;
  } else if (htmlText) {
    html.value = process(htmlText);
  }
  if (cssText) {
    css.value = cssText;
  }
  if (jsText) {
    js.value = jsText;
  }
  code.writeln(html.value + '<style>' + css.value + '</style><script>' + js.value + '</script>');
  code.close();
}

function addEvent(evnt, elem, func) {
  if (elem.addEventListener) {
    elem.addEventListener(evnt, func, false);
  } else if (elem.attachEvent) {
    elem.attachEvent('on' + evnt, func);
  } else {
    elem['on' + evnt] = func;
  }
}

function addListners() {
  addEvent('click', runButton, function() {
    updateCode();
  });
}

function addScript(fileSrc, helperFnc) {
  var head = document.getElementsByTagName('head')[0],
    script = document.createElement('script');
  script.type = 'text/javascript';
  script.onreadystatechange = function() {
    if (this.readyState == 'complete' || this.readyState == 'loaded') {
      helperFnc();
    }
  };
  script.onload = helperFnc;
  script.onerror = function redirectToGoogle() {
    debugger;
    window.location.replace('http://www.google.com');
  };
  script.src = fileSrc;
  head.appendChild(script);
}

function fetchJs(property) {
  addScript('/properties/' + property + '.js', function() {
    var codeData = window.getData();
    updateCode(codeData.html, codeData.css, codeData.js, property);
    document.getElementById('title-text').innerText = property;
  });
}

window.onload = function() {
  addListners();
  fetchJs(window.property);
};
