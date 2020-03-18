$(function() {
    var $user = $('#user'),
        $telephone = $('#telephone'),
        $password = $('#password'),
        $code = $('#code'),
        $acquire = $('#acquire'),
        $register = $('#register');
    // 得到焦点
    $user.focus(function(){
      $('#user-validation-message').html('设置后不可更改，中英文均可，最长14个英文或7个汉字');
    });
    $password.focus(function(){
        $('#password-validation-message').html('长度为8~14个字符，字母/数字以及标点符号至少两种，不允许有中文、空格');            
      });
    //用户名校验
    var user = false;
    $user.focusout(function(){
      var msg = $('#user-validation-message');
      if($user.val() === ''){
        msg.html('不能为空!');           
        return false;                 
      }
      if(/[^\w\u4e00-\u9fa5]|^\d+$/.test($user.val())){
        msg.html('用户名仅支持中英文、数字和下划线，且不能为纯数字'); 
        return false;                       
      }
      msg.html('');
      user = true;
    });
    //电话校验
    var telephone = false;
    $telephone.focusout(function(){
      var msg = $('#telephone-validation-message');
      if($telephone.val() === ''){
        msg.html('不能为空!');
        return false;       
      }
      if(!/^1[3456789]\d{9}$/.test($telephone.val())){
        msg.html('手机号码格式不正确');
        return false;                  
      }
      msg.html('');
        telephone = true;
    });   
    //密码
    var password=false;
    $password.focusout(function(){
      var msg = $('#password-validation-message');
      if($password.val() === ''){
        msg.html('不能为空!');
        return false;        
      }
      if(!(/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/).test($password.val())){
        msg.html('长度为8~14个字符，字母/数字以及标点符号至少两种，不允许有中文、空格');
        return false;                     
      }
      msg.html('');
      password = true;              
    })
    //验证码
    var code=false;
    $code.focusout(function(){
      var msg = $('#code-validation-message');
      if($code.val() === ''){
        msg.html('不能为空!');
        return false;      
      }
      msg.html('');
      code = true;
    })
    //验证码倒计时
    var time,i=60;
    $acquire.click(function(){
        i--;
        $acquire.attr("disabled","disabled");
        time=window.setInterval(function(){
            $acquire.val("发送中 ("+i+" s)");
            if(i===0){
                window.clearInterval(time);
                $acquire.val("重新发送");
                $acquire.removeAttr("disabled");
                e=60;
            }
        },1000)
    })
    //注册成功
    $register.click(function(){
      if(user&& password && telephone && code){
        alert('注册成功!');
      }
    }) 
  })


