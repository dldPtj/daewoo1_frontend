<script >
import HeaderComponent from "@/common/components/HeaderComponent.vue";
import FooterComponent from "@/common/components/FooterComponent.vue";
import ProfileComponent from "@/common/components/ProfileComponent.vue";
import ReservationComponent from "@/common/components/ReservationComponent.vue"
export default {
  components: {
    HeaderComponent: HeaderComponent,
    FooterComponent: FooterComponent,
    ProfileComponent: ProfileComponent,
    ReservationComponent: ReservationComponent,
  }
}
</script>

<template>
  <header-component/>
  <profile-component/>
  <!--  프로필 아래 메뉴 선택 버튼 -->
  <div class="ChangeAccountMenu">
    <button type="button" class="NOselectAcPage">계정</button>
    <a class="OtherLine"></a>
    <button type="button" class="selectAcPage">내역</button>
    <a class="OtherLine"></a>
    <button type="button" class="NOselectAcPage">결제수단</button>
  </div>

  <div id="ReservationMain">
    <div id="ReservationSpace-btw">
      <h1>예약 내역</h1>
      <div>
        <select id="ReservationDropDownStyle">
          <option value="Upcoming"><b>Upcoming</b></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
    </div>
    <div id="ReservationSub">
      <img src="../assets/ion_bed.png" id ="bedImage" > <h3>객실</h3>
    </div>
    <ReservationComponent />
  </div>


  <FooterComponent/>
</template>

<style>

#ReservationDropDownStyle{
  margin-top: 20px;
  display: flex;
  position: relative;
  border: white solid 1px;
  font-size: 15px;
  font-weight: bold;
  height: 20px;
  width: 100px;
}

#ReservationSpace-btw{
  display: flex;
  justify-content: space-between;
}
#ReservationMain{
  text-align: left;
  width: 1232px;
  margin: 40px auto 119px;
}
#ReservationSub{
  display: flex;
  position: relative;
  margin: auto 0;
  width: 1232px;
  height: 56px;
  box-shadow: 0px 2px 5px #d3d3d3;
}
#ReservationSub h3 {
  margin: auto 0;
}
#bedImage{
  margin: auto 0 auto 25px;
  width: 21px;
  height: 16px;
}
</style>