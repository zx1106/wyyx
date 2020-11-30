var list_mainBox = document.querySelector('.list_main')

console.log(list_mainBox);
ajax({
  url: './php/list.php',
  success: function (data) {
    // console.log(data);
    var data = JSON.parse(data)
    var str = '';
    data.forEach(item => {
      // console.log(item);
      str += `
    <div class="list_mainBox">
    <a href="./details.html?id=${item.id}">

    <img src="${item.img}" alt="">
    <div class="list_mainBox_text">
    <p>${item.title}</p>
    <span>￥<i>${item.jiage}</i></span>
    <em>加入购物车</em>
    <hr>
    <b>${item.miaoshu}</b>
    </div>
      </a>
    

  </div>
    
    `
      list_mainBox.innerHTML = str
    })
  }
})


