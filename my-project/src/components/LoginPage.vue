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
        <fieldset>
          <legend class="LegendLogin">이메일</legend>
          <input type="email" placeholder="이메일을 입력하세요.">
        </fieldset>
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
  }

.LoginIMG{
  width: 618px;
  height: 816px;
}
.LegendLogin{
  text-align: left;
}
</style>