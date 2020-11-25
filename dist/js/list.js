"use strict";

var list_mainBox = document.querySelector('.list_main');
console.log(list_mainBox);
ajax({
  url: './php/list.php',
  success: function success(data) {
    console.log(data);
    var data = JSON.parse(data);
    var str = '';
    data.forEach(function (item) {
      console.log(item);
      str += "\n    <div class=\"list_mainBox\">\n        <img src=\"".concat(item.img, "\" alt=\"\">\n        <div class=\"list_mainBox_text\">\n        <p>").concat(item.title, "</p>\n        <span>\uFFE5<i>").concat(item.jiage, "</i></span>\n        <hr>\n        <b>").concat(item.miaoshu, "</b>\n      </div>\n  </div>\n    \n    ");
      list_mainBox.innerHTML = str;
    });
  }
});