"use strict";

var minBox = document.querySelector('.list-left');
var mask = document.querySelector('.mask');
var maxBox = document.querySelector('.maxBox');
var maxImg = document.querySelector('.maxBox img');
var allImg = document.querySelectorAll('.imgAll1 img');
var minimg = document.querySelector('.list-left img'); // console.log(allImg);

for (var i = 0; i < allImg.length; i++) {
  allImg[i].index = i;

  allImg[i].onmouseover = function () {
    for (var j = 0; j < allImg.length; j++) {
      // console.log(222);
      //清除之前选项卡的样式
      allImg[j].className = 'imgAll1';
    } //给当前选项卡添加样式


    allImg[this.index].className = 'xuan'; // 划过改变小图的地址

    minimg.src = allImg[this.index].src;
    maxImg.src = allImg[this.index].src;
  };
} //鼠标移动，mask 跟随移动


minBox.onmousemove = function (ev) {
  var e = ev || event; //计算mask的定位坐标

  var maskLeft = e.clientX - offset(minBox).left - mask.clientWidth / 2;
  var maskTop = e.pageY - offset(minBox).top - mask.clientHeight / 2; //限制mask移动范围

  if (maskLeft < 0) {
    maskLeft = 0;
  }

  if (maskLeft >= minBox.clientWidth - mask.clientWidth) {
    maskLeft = minBox.clientWidth - mask.clientWidth;
  }

  if (maskTop <= 0) {
    maskTop = 0;
  }

  if (maskTop >= minBox.clientHeight - mask.clientHeight) {
    maskTop = minBox.clientHeight - mask.clientHeight;
  }

  mask.style.left = maskLeft + 'px';
  mask.style.top = maskTop + 'px';
  var scaleX = maskLeft / (minBox.clientWidth - mask.clientWidth);
  var scaleY = maskTop / (minBox.clientHeight - mask.clientHeight); //大图也跟随移动

  maxImg.style.left = -scaleX * (maxImg.clientWidth - maxBox.clientWidth) + 'px';
  maxImg.style.top = -scaleY * (maxImg.clientHeight - maxBox.clientHeight) + 'px';
};

minBox.onmouseenter = function () {
  mask.style.display = 'block';
  maxBox.style.display = 'block';
};

minBox.onmouseleave = function () {
  mask.style.display = 'none';
  maxBox.style.display = 'none';
};