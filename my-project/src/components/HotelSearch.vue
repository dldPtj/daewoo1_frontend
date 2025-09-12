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

  <!--호텔 검색 바-->
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

  <!--호텔 검색 화면 메인 부분-->
  <div class="hotel-search-main">

    <!--호텔 필터링-->
    <div class="hotel-filters">
      <div class="filers">
        <h3>Filters</h3>
      </div>
      <!--가격 필터-->
      <div class="price-filter">

      </div>
      <div class="rating-filer">

      </div>
    </div>

    <!--필터링 된 호텔-->
    <div class="filtered-hotel">
      <header class="accommodation">
        <div class="accommodation-selection">
          <button role="tab" id="hotel-count">
            <h3>Hotels</h3>
            <span>257 places</span>
          </button>
          <button role="tab" id="motel-count">
            <h3>Motels</h3>
            <span>51 places</span>
          </button>
          <button role="tab" id="resort-count">
            <h3>Resorts</h3>
            <span>72 places</span>
          </button>
        </div>
      </header>
      <div class="accommodation-sort">
        <div class="accommodation-sort-text">
          Showing 4 of 257 places
        </div>
        <div>
          <select id="accommodation-sort-option">
            <option value="">Hotel Sorting</option>
            <option value="highest-price">Highest Price</option>
            <option value="lowest-price">Lowest Price</option>
            <option value="highest-rated">Highest Rated</option>
          </select>
        </div>
      </div>

      <!--호텔 리스트-->
      <div class="hotel-lists">
        <!--첫번째 호텔-->
        <div class="hotel-1">
          <div class="hotel-img">
            <img src="@/assets/hotel-img-1.png">
          </div>
          <!--호텔 정보-->
          <div class="hotel-info">
            <!--호텔 이름-->
            <div class="hotel-name">
              <h3 id="hotel-name-1">
                해튼 호텔
              </h3>
            </div>
            <!--호텔 위치-->
            <div class="hotel-location">
              <img src="@/assets/ion-location.png">
              <span id="address">
                Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
              </span>
            </div>
            <!--호텔 등급과 편의시설-->
            <div class="hotel-grade-amenities">
              <!--호텔 등급-->
              <div class="hotel-grade">
                <span id="grade-stars">☆☆☆☆☆</span>&nbsp;<span id="grade">5</span> Star Hotel
              </div>
              <!--편의시설-->
              <div class="hotel-amenities">
                <img src="@/assets/amenities.png"><strong>+<span id="amenities">20</span></strong>&nbsp;Amenities
              </div>
            </div>
            <!--호텔 찜하기, 보기 버튼-->
            <div class="hotel-liked-view">
              <!--호텔 찜하기 버튼-->
              <div class="hotel-liked">
                <button id="hotel-liked-btn">
                  <img src="@/assets/heart.png">
                </button>
              </div>
              <!--호텔 보기 버튼-->
              <div class="hotel-view-place">
                <button id="view-place-btn">
                  <span>View Place</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--두번째 호텔-->
        <div class="hotel-2">
          <div class="hotel-img">
            <img src="@/assets/hotel-img-2.png">
          </div>
          <div class="hotel-info">
            <div class="hotel-name">
              <h3 id="hotel-name-1">
                마제스틱 말라카 호텔
              </h3>
            </div>
            <div class="hotel-location">
              <img src="@/assets/ion-location.png">
              <span id="hotel-location">
                Kucukayasofya No. 40 Sultanahmet, Istanbul 34022
              </span>
            </div>
          </div>
        </div>

        <!--세번째 호텔-->
        <div class="hotel-3">
          <div class="hotel-img">
            <img src="@/assets/hotel-img-3.png">
          </div>
          <div class="hotel-info">
            <div class="hotel-name">
              <h3 id="hotel-name-1">
                카나델 리오 호텔
              </h3>
            </div>
            <div class="hotel-location">
              <img src="@/assets/ion-location.png">
              <span id="hotel-location">
                Kucukayasofya No. 40 Sultanahmet, Istanbul 34022
              </span>
            </div>
          </div>
        </div>

        <!--네번째 호텔-->
        <div class="hotel-4">
          <div class="hotel-img">
            <img src="@/assets/hotel-img-4.png">
          </div>
          <div class="hotel-info">
            <div class="hotel-name">
              <h3 id="hotel-name-1">
                베이뷰 호텔
              </h3>
            </div>
            <div class="hotel-location">
              <img src="@/assets/ion-location.png">
              <span id="hotel-location">
                Kucukayasofya No. 40 Sultanahmet, Istanbul 34022
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style >
.hotel-grade-amenities {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px 0 0;
}
#grade-stars {
  color: #FF8682;
}
.hotel-1 {
  display: flex;
}
.hotel-2 {
  display: flex;
}
.hotel-3 {
  display: flex;
}
.hotel-4 {
  display: flex;
}
.hotel-location {
  display: flex;
  align-items: center;
  margin: 15px auto;
}
.hotel-img {
  display: flex;
  border-radius: 20px 0 0 20px;
}
.hotel-info {
  display: flex;
  text-align: left;
  flex-direction: column;
  margin: auto 20px;
}
.hotel-lists {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}
.accommodation-sort {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px;
}
.accommodation-selection {
  border-radius: 10px;
  box-shadow: 0px 3px 10px #d3d3d3;
  padding: 30px;
}
#hotel-count {
  border: white solid 1px;
  border-right: #d3d3d3 solid 2px;
  background-color: white;
  width: 230px;
  text-align: left;
}
#motel-count {
  border: white solid 1px;
  border-right: #d3d3d3 solid 2px;
  background-color: white;
  width: 230px;
  text-align: left;
  margin: auto 20px;
}
#resort-count {
  border: white solid 1px;
  background-color: white;
  width: 230px;
  text-align: left;
}
.hotel-search-main {
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1240px;
}
.hotel-filters {
  text-align: left;
}
.hotel-search-bar {
  display: flex;
  margin: 100px auto 40px;
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