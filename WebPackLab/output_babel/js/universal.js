"use strict";

require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
var _app = require("/src/app/app.js");
require("bootstrap");
(0, _app.startApp)();
try {
  InjectBootstrapProgress();
} catch (e) {
  console.log("progress bar not found");
}
var references = document.getElementsByTagName('a');
for (var i = 0; i < references.length; i++) {
  var element = references[i];
  var url = element.href;
  element.href = url.replace(/src/g, "dist");
}
var encode = document.createElement('meta');
encode.charset = 'utf8';
document.head.appendChild(encode);
function InjectBootstrapProgress() {
  var progress = document.getElementsByTagName('progress');
  var prog = progress[0];
  var value = prog.value;
  prog.remove();
  var bootwrap = document.createElement('div');
  bootwrap.className = 'progress';
  var bootbar = document.createElement('div');
  bootbar.className = 'progress-bar progress-bar-striped progress-bar-animated';
  bootbar.setAttribute("role", "progressbar");
  bootbar.setAttribute("aria-valuenow", "".concat(value));
  bootbar.setAttribute("aria-valuemin", 0);
  bootbar.setAttribute("aria-valuemax", 100);
  bootbar.setAttribute("style", "width: ".concat(value, "%"));
  bootbar.innerHTML = "".concat(value, "%");
  bootbar.style.color = "black";
  bootwrap.style.width = "20%";
  bootwrap.style.marginBottom = "20px";
  bootwrap.appendChild(bootbar);
  document.getElementsByTagName("footer")[0].appendChild(bootwrap);
}