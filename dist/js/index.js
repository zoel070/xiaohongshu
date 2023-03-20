"use strict";

var PAGE = {
  init: function init() {
    this.bind();
  },
  bind: function bind() {
    window.addEventListener('resize', this.resizeRem.bind(this));
    window.addEventListener('pageshow', this.resizeRem.bind(this));
  },
  resizeRem: function resizeRem() {
    var docElement = document.documentElement;
    var width = docElement.getBoundingClientRect().width;
    var rem = width / 7.5;
    docElement.style.fontSize = rem + 'px';
  }
};
PAGE.init();