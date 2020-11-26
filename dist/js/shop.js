"use strict";

var all = document.querySelector('.all');
var anniuAll = document.querySelectorAll('.anniu');
var wrap = document.querySelector('.wrap');
var list = document.querySelectorAll('.list li');
var del = document.querySelector('.del');
var remove1 = document.querySelector('.b2'); // console.log(remove1);
// console.log();
// console.log(anniuAll);

var a = 0;
$(function () {
  wrap.onclick = function (e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;

    if (target.className === 'anniu') {
      a++;
    }

    if (a === list.length) {
      all.checked = true;
    } else {
      all.checked = false;
    }

    if (target.className === 'del') {
      target.parentNode.remove();
    }
  };
});

all.onclick = function () {
  for (var i = 0; i < anniuAll.length; i++) {
    if (this.checked) {
      for (var i = 0; i < anniuAll.length; i++) {
        anniuAll[i].checked = this.checked;
      }
    } else {
      anniuAll[i].checked = false;
    }
  }
};

remove1.onclick = function () {
  console.log(111);

  for (var i = 0; i < anniuAll.length; i++) {
    if (anniuAll[i].checked === true) {
      anniuAll[i].parentNode.remove();
    }
  }
};