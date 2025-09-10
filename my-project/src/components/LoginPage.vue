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
      <div class= "fieldsetInput">
        <span class="FLegend">이메일</span>
        <input type="email" placeholder="이메일을 입력하세요.">
      </div>
    </div>
    <div class="LoginImages">
      <img src="../assets/LoginImg1.jpg">
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


.fieldsetInput .FLegend {
  position: absolute;
  top: -10px;
  left: 15px;
  background: white;
  padding: 0 5px;
  font-size: 13px;
  color: #666;
}

.fieldsetInput input {
  border: none; /* 내부 input은 border 제거 */
  outline: none;
  width: 200px;
}
</style>