<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent: HeaderComponent,
  }
}


</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main-photo {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.search-bar {
  display: flex;
  text-align: left;
  justify-content: space-around;
  background-color: white;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0px 3px 10px grey;
  position: relative;
  top: -75px;
  left: 50%;
  transform: translateX(-50%);
  width: 1232px;
  height: 150px;
  z-index: 2;
}
.search-box-text {
  margin: auto 30px;
  font-size: 20px;
}
.search-box {
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  gap: 20px;
}
.enter-destination fieldset {
  display: flex;
  justify-content: left;
  border-radius: 5px;
  margin: auto 10px;
  width: 400px;
  height: 60px;
}
.check-in fieldset {
  border-radius: 5px;
  width: 200px;
  height: 60px;
}
#checkin {
  display: flex;
  justify-content: center;
  align-items: center;
  border: white;
  background-color: white;
  margin: 5px auto;
}
.check-out fieldset {
  border-radius: 5px;
  width: 200px;
  height: 60px;
}
#checkout {
  display: flex;
  justify-content: center;
  align-items: center;
  border: white;
  background-color: white;
  margin: 5px auto;
}
.roomguests fieldset {
  border-radius: 5px;
  width: 300px;
  height: 60px;
}

.city-selection-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 200px auto 40px;
  width: 1440px;
  padding: 0 50px 0 50px;
}

.city-selection-text {
  flex-direction: column;
  text-align: left;
}
.search-bar-box {
  display: flex;
  align-items: center;
  margin: auto 20px auto 20px;
}
.calendar-icon {
  text-align: right;
}
.city-see-all {
  width: 200px;
  height: 40px;
}
.city-see-all-btn {
  border: #8ae6b2 solid 1px;
  border-radius: 8px;
  background-color: white;
  width: 70px;
  height: 45px;
}
.city-selection-imgs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.city-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  text-align: left;
  top: 1380px;
  width: 250px;
  margin: auto 25px;
}
.city-content {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 2;
  color: white;
}
.city-detail {
  max-width: 165px;
}
.hotel-price {
  display: flex;
  z-index: 2;
  color: white;
}
#bookhotel {
  width: 250px;
  height: 50px;
  font-size: 15px;
  background-color: #8ae6b2;
  border-radius: 5px;
  border: #8ae6b2 solid 1px;
}
.hotel-book-btn {
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 70px;
}
</style>

<template>
  <div>

  </div>
  <HeaderComponent />

<!--HeaderComponent 부분-->
  <div class="main-photo">
    <img src="@/assets/homepage-mainhotel.png" alt="메인호텔사진">
  </div>

<!--메인화면 부분-->
  <!--메인화면 상단 검색 바-->
  <div class="search-bar">
      <div class="search-box-text">
            <span>
                Where are you staying?
            </span>
      </div>
    <div class="search-box">
        <form class="enter-destination">
          <fieldset>
            <legend>
              &nbsp;Enter Destination&nbsp;
            </legend>
            <div class="search-bar-box">
              <img src="@/assets/ion_bed.png" alt="침대 아이콘">&nbsp;도시와 호텔을 선택하세요
            </div>
          </fieldset>
        </form>
        <form class="check-in">
          <fieldset>
            <legend>
              &nbsp;Check In&nbsp;
            </legend>
            <div class="search-bar-box">
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
            <div class="search-bar-box">
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
            <div class="search-bar-box">
              <img src="@/assets/ion_user.png" alt="유저 아이콘">&nbsp;방 개수, 인원 수를 선택하세요
            </div>
          </fieldset>
        </form>
    </div>
  </div>

  <!--도시 선택 부분-->
  <div class="city-selection-bar">
    <div class="city-selection-text">
      <h2>
        여행에 빠지다
      </h2>
      <br>
      <h4>
        특가상품으로 진행하는 여행을 예약해보세요
      </h4>
    </div>
    <div class="city-see-all">
      <button class="city-see-all-btn">See All</button>
    </div>
  </div>

  <!--도시 대표 이미지-->
  <div class="city-selection-imgs">
    <!-- 첫번째 도시-->
    <div class="first-city">
      <img src="@/assets/melbourne.png">

      <div class="city-item">
        <div class="city-content">
          <h3 class="city-title">
            멘버른
          </h3>
          <span class="city-detail"> <!--한줄(두줄)에는 공백포함 18자(40자)만 허용하기-->
            Amazing journey
          </span>
        </div>
        <div class="hotel-price">
          <h3>
            130,000원
          </h3>
        </div>
        <div class="hotel-book-btn">
          <button id="bookhotel">Book a Hotel</button>
        </div>
      </div>

    </div>


    <!--두번째 도시-->
    <div class="second-city">
      <img src="@/assets/paris.png">

      <div class="city-item">
        <div class="city-content">
          <h3 class="city-title">
            파리
          </h3>
          <span class="city-detail">
            A Paris Adventure
          </span>
        </div>
        <div class="hotel-price">
          <h3>
            140,000원
          </h3>
        </div>
        <div class="hotel-book-btn">
          <button id="bookhotel">Book a Hotel</button>
        </div>
      </div>

    </div>

    <!--세번째 도시-->
    <div class="third-city">
      <img src="@/assets/london.png">

      <div class="city-item">
        <div class="city-content">
          <h3 class="city-title">
            런던
          </h3>
          <span class="city-detail">
            London eye adventure
          </span>
        </div>
        <div class="hotel-price">
          <h3>
            150,000원
          </h3>
        </div>
        <div class="hotel-book-btn">
          <button id="bookhotel">Book a Hotel</button>
        </div>
      </div>

    </div>

    <!--네번째 도시-->
    <div class="fourth-city">
      <img src="@/assets/colombia.png">

      <div class="city-item">
        <div class="city-content">
          <h3 class="city-title">
            콜롬비아
          </h3>
          <span class="city-detail">
            Amazing streets
          </span>
        </div>
        <div class="hotel-price">
          <h3>
            130,000원
          </h3>
        </div>
        <div class="hotel-book-btn">
          <button id="bookhotel">Book a Hotel</button>
        </div>
      </div>

    </div>

  </div>


<!--투어 선택 부분-->
  <div>

  </div>
</template>