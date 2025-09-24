<script >
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";
export default {
  components: {
    HeaderComponent: HeaderComponent,
    FooterComponent: FooterComponent,
    ProfileComponent: ProfileComponent,
  }
}
</script>

<template>
  <header-component/>
  <profile-component/>
  <!--  프로필 아래 메뉴 선택 버튼 -->
  <div class="ChangeAccountMenu">
    <button type="button" class="NOselectAcPage">계정</button>
    <a></a>
    <button type="button" class="selectAcPage">내역</button>
    <a></a>
    <button type="button" class="NOselectAcPage">결제수단</button>
  </div>

  <div id="ReservationMain">
    <h1>예약 내역</h1>
    <div id="ReservationSub">
      <h3>객실</h3>
    </div>
  </div>
  <FooterComponent/>
</template>

<style>
#ReservationMain{
  text-align: left;
  width: 1232px;
  height: 593px;
  margin: 40px auto 119px;
}
#ReservationSub{
  display: flex;
  position: relative;
  margin: auto 0;
  width: 1232px;
  height: 56px;
  border: #FF8682 solid 1px;
}
</style>