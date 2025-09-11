<script>
</script>

<template>
  <div id = "LoginMain">
    <div class="LoginBox">
      <div class="LoginText">
        <h1>Login</h1>
        <br>
        로그인해주세요
      </div>
      <fieldset class="fieldLogin">
          <legend class="LegendLogin">이메일</legend>
          <input type="email" placeholder="이메일을 입력하세요." class="LTextBox">
        </fieldset>
      <fieldset class="fieldLogin">
        <legend class="LegendLogin">Password</legend>
        <input type="password" placeholder="비밀번호를 입력하세요." class="LTextBox">
        <div id = "eye-offBox">
          <img src="../assets/eye-off.png" id ="eye-off" alt="눈 감는 사진">
        </div>
      </fieldset>
      <div id = "PwdLine">
        <span>
        <input type="checkbox"> 비밀번호 기억하기
        </span>
        <router-link to="/">Forgot Password</router-link>
      </div>
        <button type="button" id="LoginBtn">Login</button>
      <div id = "SignUpLink">
        <router-link to="/">회원가입</router-link>
      </div>
      <div>
        Or link with
      </div>
      <div id ="LoginIconBoxes">
        <button type="button" id ="fBtn"><img src="../assets/facebookLogin.png"></button>
        <button type="button" id = "GBtn"><img src="../assets/googleLogin.png"></button>
        <button type="button" id = "ABtn"><img src="../assets/appleLogin.png"></button>
      </div>
    </div>
      <div class="LoginImages">
      <img src="../assets/LoginImg1.jpg" class="LoginIMG">
    </div>
  </div>
</template>

<style>
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
  #LoginMain{
    display: flex;
  }

  .LoginBox{
    width: 512px;
    height: 593px;
    margin: 0 104px;
    border: #FF8682 solid 1px;
  }
  .LoginText{
    text-align: left;
    margin-bottom: 48px;
  }

.LoginIMG{
  width: 618px;
  height: 816px;
}
.LegendLogin{
  text-align: left;
}
.fieldLogin{
  margin-bottom: 24px;
  width: 512px;
  height: 56px;
}
#PwdLine{
  margin-bottom: 40px;
}
#LoginBtn{
  margin-bottom: 16px;
}
#SignUpLink{
  margin-bottom: 40px;
}
#LoginIconBoxes{
  margin-top: 40px;
}
#fBtn{
  margin-right: 16px;
}
#GBtn{
  margin-right: 16px;
}
.LTextBox{
 margin: auto auto  ;
}
#eye-off{
  width: 22.5px;
  height: 15px;
}
#eye-offBox{
  width: 48px;
  height: 48px;
  float: right;
  display: flex;
  justify-content: center;
}
</style>