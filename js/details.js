





		var minBox = document.querySelector('.list-left');
		var mask = document.querySelector('.mask');
		var maxBox = document.querySelector('.maxBox');
		var maxImg = document.querySelector('.maxBox img');
		var allImg = document.querySelectorAll('.imgAll1 img');
		var minimg = document.querySelector('.list-left img')
		
		// console.log(allImg);
		
		for (var i = 0; i < allImg.length; i++) {
			allImg[i].index = i
			allImg[i].onmouseover = function () {
				for (var j = 0; j < allImg.length; j++) {
					// console.log(222);
					//清除之前选项卡的样式
					allImg[j].className = 'imgAll1'
				}
				//给当前选项卡添加样式
				allImg[this.index].className = 'xuan'
				// 划过改变小图的地址
				minimg.src = allImg[this.index].src
				maxImg.src = allImg[this.index].src
			}
		
		}
		
		console.log(minBox);
		//鼠标移动，mask 跟随移动
		minBox.onmousemove = function (ev) {
			
			var e = ev || event;
			//计算mask的定位坐标
			var maskLeft = e.clientX - offset(minBox).left - mask.clientWidth / 2
			var maskTop = e.pageY - offset(minBox).top - mask.clientHeight / 2
			//限制mask移动范围
		
			if (maskLeft < 0) {
				maskLeft = 0
			}
			if (maskLeft >= (minBox.clientWidth - mask.clientWidth)) {
				maskLeft = minBox.clientWidth - mask.clientWidth
			}
			if (maskTop <= 0) {
				maskTop = 0;
			}
			if (maskTop >= (minBox.clientHeight - mask.clientHeight)) {
				maskTop = minBox.clientHeight - mask.clientHeight
			}
			mask.style.left = maskLeft + 'px'
			mask.style.top = maskTop + 'px'
			var scaleX = maskLeft / (minBox.clientWidth - mask.clientWidth)
			var scaleY = maskTop / (minBox.clientHeight - mask.clientHeight)
		
			//大图也跟随移动
		
			maxImg.style.left = -scaleX * (maxImg.clientWidth - maxBox.clientWidth) + 'px'
			maxImg.style.top = -scaleY * (maxImg.clientHeight - maxBox.clientHeight) + 'px'
				}
				minBox.onmouseenter = function () {
					mask.style.display = 'block'
					maxBox.style.display = 'block'
				}
				minBox.onmouseleave = function () {
					mask.style.display = 'none'
					maxBox.style.display = 'none'
				}



// var seach = location.search
// var id = seach.split('=')[1]
// // console.log(id);
// var main_xia = document.querySelector('.main-xia')
// ajax({
// 	url: './php/register.php',
// 	// data: 'id=' + id,
// 	dataType:'json',
// 	type:'get',
// 	success: function (data) {
// 		 //var data = JSON.parse(data)
// 		 console.log(data);
// 		var str = '';
// 		data.forEach(item => {
// 			str += `
						
// 						<div class="list-left">
// 						  <img
// 							 src="${item.img}"
// 							 alt=""
// 						  />
// 						  <div class="mask"></div>
// 						</div>
// 						<div class="maxBox">
// 						  <img
// 							 src="${item.img}"
// 							 alt=""
// 						  />
// 						</div>
// 						<div class="list-right">
// 						  <h3>${item.title}
// 						  </h3>
// 						  <div class="desc-gou">${item.miaoshu}
// 						  </div>
// 						  <div class="huodong">
// 							 <span class="hd-labal">活动价</span>
// 							 <span class="hd-jiage">${item.jiage}</span>
// 						  </div>
// 						  <div class="xianzhi">
// 							 <span class="xz-labal">限制</span>
// 							 <span class="xz-jieshi">特价商品不可与优惠券叠加使用</span>
// 						  </div>
// 						  <div class="gou-num">
// 							 <div class="gou-name">数量</div>
// 							 <div class="field f-left">
// 								<button class="btn1">-</button>
// 								<span>2</span>
// 								<button class="btn2">+</button>
// 							 </div>
// 						  </div>
// 						  <div class="btnss">
// 							 <a href="goodsCart.html" class="goumai-btn">立即购买</a>
// 							 <a href="goodsCart.html" class="jiaru-btn">加入购物车</a>
// 						  </div>
// 						</div>
// 					    `
// 				main_xia.innerHTML = str
// 		})
// 	}
// })


