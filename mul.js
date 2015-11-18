"use strict";

function genTable(n){
  var i, j;
  var html = "";
  for (i = 1; i <= n; ++i){
    html += '<tr>\n'
    for (j = 1; j <= n; ++j){
      html += '<td>' + (i * j) + '</td>\n';
    }
    html += '</tr>\n'
  }

  return html;
}

function insertTable(){
  var table_el = document.getElementById('table');
  var N = Number(document.getElementById('N').value)
  var html = genTable(N);
  table_el.innerHTML= html;
}

var el = document.getElementById('add');
el.addEventListener('click', insertTable);