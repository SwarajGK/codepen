function process(str) {
  var div = document.createElement("div");
  div.innerHTML = str;

  return format(div, 0).innerHTML;
}

function format(node, level) {
  var indentBefore = new Array(level++ + 1).join("  "),
    indentAfter = new Array(level - 1).join("  "),
    textNode;
  for (var i = 0; i < node.children.length; i++) {
    var lineStart = '\n';
    if (level === 1 && i === 0) {
      lineStart = '';
    }
    textNode = document.createTextNode(lineStart + indentBefore);
    node.insertBefore(textNode, node.children[i]);

    format(node.children[i], level);

    if (node.lastElementChild == node.children[i]) {
      textNode = document.createTextNode("\n" + indentAfter);
      node.appendChild(textNode);
    }
  }
  return node;
}

function substring(value, start, end) {
  var trimString = '';
  end = typeof end === 'string' ? end : value.length;
  for (var i = 0; i < value.length; i++) {
    if (i >= start && i < end) {
      trimString += value.charAt(i);
    }
  }
  return trimString;
}


function split(value, splitter) {
  var splittedValues = [];
  var currentValue = "";
  for (var i = 0; i < value.length; i++) {
    if (value.charAt(i) === splitter) {
      splittedValues.push(currentValue);
      currentValue = "";
    } else {
      currentValue = currentValue + value.charAt(i);
    }
  }
  splittedValues.push(currentValue);
  return splittedValues;
}

function getQuerystring(key) {
  var search = window.location.search;
  var query = '';
  for (var j = 0; j < search.length; j++) {
    if (j !== 0) {
      query = query + search.charAt(j);
    }
  }
  var vars = split(query, "&");
  for (var i = 0; i < vars.length; i++) {
    var pair = split(vars[i], '=');
    if (pair[0] == key) {
      return pair[1];
    }
  }
}
