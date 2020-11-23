//轮播图
var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
      delay: 3000, //3秒切换一次
  },
  //分页器
  pagination: {
      el: '.swiper-pagination',
      //点击分页器可以切换图片
      clickable: true,

  },
  //左右切换按钮
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  //一直循环切换
  loop: true,
  loopAdditionalSlides: 3,


});



// //如果你开启了clickable， 还可以鼠标划过按钮切换到指定的图片
// for (i = 0; i < mySwiper.pagination.bullets.length; i++) {
//     mySwiper.pagination.bullets[i].onmouseover = function() {
//         this.click();
//     };
// }

// //鼠标移入停止播放
// mySwiper.el.onmouseover = function() {
//     mySwiper.autoplay.stop();
// }

// //鼠标离开开始自动切换
// mySwiper.el.onmouseout = function() {
//     mySwiper.autoplay.start();
// }

// 时间倒计时

fn1()
        function fn1() {
            //现在时间
            var dt1 = new Date()
                //活动开始时间
            var dt2 = new Date('2021,1,27,24:00:00')
                //时间差
            var dt = parseInt((dt2 - dt1) / 1000)
                //活动到点关闭定时器，放别的地方不进入判断
            if (dt <= -1) {
                document.querySelector("p").innerHTML = "活动已结束"
                clearInterval(set1)
                return;
            }
            //天数
            var day = Math.floor(dt / (60 * 60 * 24))
            if (day < 10) {
                day = '0' + day
            }
            //小时数
            var h = parseInt((dt - day * 60 * 60 * 24) / 3600)
            if (h < 10) {
                h = '0' + h
            }
            //分钟
            var fz = parseInt((dt - day * 60 * 60 * 24 - h * 3600) / 60)
            if (fz < 10) {
                fz = '0' + fz
            }
            //秒数
            var ss = parseInt((dt - day * 60 * 60 * 24 - h * 3600 - fz * 60))
            if (ss < 10) {
                ss = '0' + ss
            }


            //获取ID的标签，往ID里面加入h的内容 innerHTML是可以解析标签 把H的值付给他
            // document.querySelector("#day").innerHTML = day
            document.querySelector('#xs').innerHTML = h
            document.querySelector('#fz1').innerHTML = fz
            document.querySelector('#m').innerHTML = ss
        }
        
        //间隔定时器，设置间隔时间
        var set1 = setInterval(fn1, 1000)