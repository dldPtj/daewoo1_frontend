<script >
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    HeaderComponent: HeaderComponent,
    FooterComponent: FooterComponent,
  }
}
</script>

<template>
  <HeaderComponent/>
  <div id ="accountImgMain">
    <img src="../assets/AcoountCoverDefault.jpg" id="CoverImg">
    <button type="button" id = "accountImgUpload"><img src="../assets/AcoountUploadImgIcon.png"><a>upload new cover</a></button>
  </div>
  <div id = "accountProfile">
    <div id = "accountProfileMain">
      <div id="AccountProfileImg">
        <div id="ProfileImgModify"><img src="../assets/Pencil.png"></div>
      </div>
      <div id ="AccountProfileMainT">
        <h3>프로필 이름</h3>
        <a>mjc123@mjc816.com</a>
      </div>
    </div>
  </div>
  <div class="ChangeAccountMenu">
    <button type="button" class="selectAcPage">계정</button>
    <a></a>
    <button type="button" class="selectAcPage">내역</button>
    <a></a>
    <button type="button" class="selectAcPage">결제수단</button>
  </div>

  <div id = "AccountPage">
    <h1>Account</h1>
   <div id = "ACListStyle">
    <div class = "AccountList">
      <div class="AccountListBox">
        <div class="ACDataBox">
          <a>Name</a>
          <div class="ACInsertData">
            이름이름이름
          </div>
        </div>
        <button type="button"><img src="../assets/AccountBtnImg.png">change</button>
      </div>
    </div>
    <div class = "AccountList">
      <div class="AccountListBox">
        <div class="ACDataBox">
          <a>Email</a>
          <div class="ACInsertData">
            이메이메
          </div>
        </div>
        <button type="button"><img src="../assets/AccountBtnImg.png">change</button>
      </div>
    </div>
    <div class = "AccountList">
      <div class="AccountListBox">
        <div class="ACDataBox">
          <a>Password</a>
          <div class="ACInsertData" id="ACPWData">
            <input type="password" value="sdsd" readonly>
          </div>
        </div>
        <button type="button"><img src="../assets/AccountBtnImg.png">change</button>
      </div>
    </div>
    <div class = "AccountList">
      <div class="AccountListBox">
        <div class="ACDataBox">
          <a>Phone number</a>
          <div class="ACInsertData">
            010-1234-1234
          </div>
        </div>
        <button type="button"><img src="../assets/AccountBtnImg.png">change</button>
      </div>
    </div>
    <div class = "AccountList">
      <div class="AccountListBox">
        <div class="ACDataBox">
          <a>Address</a>
          <div class="ACInsertData">
            경기도 부천시 어디구 어디동
          </div>
        </div>
        <button type="button"><img src="../assets/AccountBtnImg.png">change</button>
      </div>
    </div>
    <div class = "AccountList">
      <div class="AccountListBox">
        <div class="ACDataBox">
          <a>Date of birth</a>
          <div class="ACInsertData">
            2002-09-12
          </div>
        </div>
        <button type="button"><img src="../assets/AccountBtnImg.png">change</button>
      </div>
    </div>
   </div>
  </div>
  <FooterComponent/>
</template>

<style >

* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
#ACListStyle{
  box-shadow: 0px 2px 5px #d3d3d3;
  padding-bottom: 1px;
}
.ACDataBox{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.ACInsertData{
  font-weight: bold;
  font-size: 20px;
}
.ACInsertData input {
  border: none;
}
.ACInsertData input:focus{
  outline: none;
}
.ACDataBox a{
  font-size: 16px;
  color: gray;
}
.AccountListBox{
  display: flex;
  margin: auto;
  justify-content: space-between;
  width: 1184px;
  height: 52px;
}
.AccountListBox button{
  width: 140px;
  height: 48px;
  background-color: white;
  border: #8DD3BB solid 1px;
  text-align: center;
}
.AccountListBox button img{
  margin-bottom: -2px;
  margin-right: 4px;
}
.AccountList{
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 32px;
}
#AccountPage{
  text-align: left;
  width: 1232px;
  height: 593px;
  margin: 40px auto 119px;
}
#AccountPage h1{
  margin-bottom: 48px;
}
.selectAcPage{
  text-align: left;
  font-weight: bold;
  margin: 0 180px 0 18px;
  width: 215px;
  height: 100%;
  border: none;
  background-color: white;
  border-bottom: #8DD3BB solid 4px;
}
.ChangeAccountMenu {
  box-shadow: 0px 2px 5px #d3d3d3;
  display: flex;
  position: relative;
  margin: 32px auto 0;
  width: 1232px;
  height: 80px;
  justify-content: center;
}
.ChangeAccountMenu a{
  width: 48px;
  height: 0;
  transform: rotate(-90deg);
  border: #D7E2EE solid 1px;
  margin: 35px -15px;
}
#ProfileImgModify{
  display: flex;
  width: 44px;
  height: 44px;
  border-radius: 44px;
  background-color: #FF8682;
  margin: 111px 0 0 111px;
}
#ProfileImgModify img {
  margin: auto;
  width: 18px;
  height: 18px;

}
#AccountProfileMainT h3 {
  display: flex;
  position: relative;
  justify-content: center;
  margin-bottom: 8px;
}
#AccountProfileImg{
  width: 160px;
  height: 160px;
  background-color: gray;
  border: #FF8682 solid 4px;
  border-radius: 160px;
  margin: 0 auto 24px;
}
#accountProfile{
  display: flex;
  position: relative;
  margin: -75px auto 0 ;
  width: 1232px;
  height: 241px;

}
#accountProfileMain{
  margin: 0 auto;
  width: 204px;
  height: 241px;
}
#accountImgMain{
  display: flex;
  position: relative;
  justify-content: space-between;
  margin: 105px auto 0px;
  width: 1232px;
  overflow: hidden;
}
#CoverImg{
  display: flex;
  object-fit: cover;
  width: 1232px;
  height: 350px;
}
#accountImgUpload{
  display: flex;
  position: absolute;
  width: 180px;
  height: 48px;
  margin: 276px 26px 26px 1026px;
  background-color: #8DD3BB;
  border: none;
}
#accountImgUpload a{
  display: flex;
  position: relative;
  align-items: center;
  margin: 0 auto 0 2px;
}

#accountImgUpload img {
  display: flex;
  position: relative;
  align-items: center;
  margin: auto 0 auto auto;
  width: 16px;
  height: 13px;
}
</style>