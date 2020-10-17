// document.getElementById('user_id').value='nihao';

// document.getElementsByClassName

document.querySelector('#btn_login');

// btn js dom 对象
// onclick 事件
// function 行为

btn.onclick=function(){
    var id=document.querySelector('user_id').value;
    var pwd=document.querySelector('user_password').value;
    alert(id, pwd);
}