"use strict";

// 手机登录邮箱登录切换
var loginEmail = document.querySelector('.header_email');
var loginPhone = document.querySelector('.header_phone');
var email_main = document.querySelector('.email_main');
var phone_main = document.querySelector('.phone_main');

loginEmail.onclick = function () {
  phone_main.style.display = 'none';
  email_main.style.display = 'block';
};

loginPhone.onclick = function () {
  phone_main.style.display = 'block';
  email_main.style.display = 'none';
}; // 手机登录


var phone_btn = document.querySelector('.phone_btn');

phone_btn.onclick = function () {
  var phone_user = document.querySelector('.phone_user').value;
  console.log(111);

  if (!phone_user) {
    alert('不能为空');
    return;
  }

  var reg = /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/;

  if (reg.test(phone_user)) {
    alert('登录成功');
  } else {
    alert('输入有误');
  }
}; // 邮箱登录


var email_login = document.querySelector('.email_login');

email_login.onclick = function () {
  console.log(222);
  var email_user = document.querySelector('.email_user').value;
  var email_pass = document.querySelector('.email_pass').value;

  if (!email_user && !email_pass) {
    alert('不能为空');
    return;
  }

  var Email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;

  if (Email.test(email_user)) {
    alert('登录成功');
  } else {
    alert('邮箱账号有误');
  }
};