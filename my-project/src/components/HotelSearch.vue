<script >
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent: HeaderComponent,
  }
}
</script>

<template>
  <HeaderComponent />

  <div class="hotel-search-bar">

    <div class="hotel-search-box">
      <form class="enter-destination">
        <fieldset>
          <legend>
            &nbsp;Enter Destination&nbsp;
          </legend>
          <div class="hotel-search-bar-box">
            <img src="@/assets/ion_bed.png" alt="침대 아이콘">&nbsp;도시와 호텔을 선택하세요
          </div>
        </fieldset>
      </form>
      <form class="check-in">
        <fieldset>
          <legend>
            &nbsp;Check In&nbsp;
          </legend>
          <div class="hotel-search-bar-box">
            <button id="checkin" onclick="showCalendar()">
              날짜를 선택하세요&nbsp;&nbsp;<img class="calendar-icon" src="@/assets/calendar.png" alt="달력 아이콘">
            </button>
          </div>
        </fieldset>
      </form>
      <form class="check-out">
        <fieldset>
          <legend>
            &nbsp;Check Out&nbsp;
          </legend>
          <div class="hotel-search-bar-box">
            <button id="checkout" onclick="showCalendar()">
              날짜를 선택하세요&nbsp;&nbsp;<img class="calendar-icon" src="@/assets/calendar.png" alt="달력 아이콘">
            </button>
          </div>
        </fieldset>
      </form>
      <form class="roomguests">
        <fieldset>
          <legend>
            &nbsp;Room & Guests&nbsp;
          </legend>
          <div class="hotel-search-bar-box">
            <img src="@/assets/ion_user.png" alt="유저 아이콘">&nbsp;방 개수, 인원 수를 선택하세요
          </div>
        </fieldset>
      </form>
      <div class="hotel-search-btn">
        <button id="hotel-search-btn">
          <img src="@/assets/search.png">
        </button>
      </div>
    </div>

  </div>
</template>

<style >
.hotel-search-bar {
  display: flex;
  margin: 100px auto;
  padding: 10px;
  border: white solid 1px;
  box-shadow: 0px 3px 10px #d3d3d3;
  border-radius: 20px;
  max-width: 1240px;
}
.hotel-search-box {
  display: flex;
  margin: 20px auto;
  gap: 10px;
  text-align: left;
}
.hotel-search-bar-box {
  display: flex;
  align-items: center;
  margin: auto 10px;
}
.hotel-search-btn{
  display: flex;
  align-items: center;
  margin: 6px auto;
}
#hotel-search-btn {
  border: #8ae6b2 solid 1px;
  border-radius: 5px;
  background-color: #8ae6b2;
  width: 55px;
  height: 55px;
}
</style>