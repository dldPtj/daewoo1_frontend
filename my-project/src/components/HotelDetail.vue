<script>
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
  <div class="hoteldetail-page">
    <div>
    <HeaderComponent />
    </div>

    <!--나라 > 도시 > 호텔 이름-->
    <div class="country-city-hotelname">
      <span class="hd-country">Turkey</span>&nbsp;>&nbsp;<span class="hd-city">Istanbul</span>&nbsp;>&nbsp;<span class="hd-hotelname">해튼호텔</span>
    </div>

    <!--호텔 디테일 정보-->
    <div class="hoteldetail-info">
      <!--호텔 디테일 왼쪽 (호텔 이름, 등급, 위치, 리뷰 평점 및 개수)-->
      <div class="hotel-detail-left">
        <div class="hotel-namegrade">
          <span id="hotel-detail-name">해튼호텔</span>&nbsp;&nbsp;&nbsp;<span id="grade-stars">☆☆☆☆☆</span>&nbsp;<span id="grade">5</span> Star Hotel
        </div>
        <!--호텔 위치-->
        <div class="hoteldetail-location">
          <img src="@/assets/ion-location.png">
          <span id="address">
            <small>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</small>
          </span>
        </div>

        <!--호텔 리뷰 평점 및 개수-->
        <div class="hoteldetail-rating-count">
          <!--호텔 리뷰 평점-->
          <div class="hotel-review-avg">
            <span id="review-rating">4.2</span>
          </div>
          <!--호텔 만족도-->
          <div class="hoteldetail-satisfaction">
            <b><span id="satisfaction">Very Good</span></b>
          </div>
          <!--호텔 평점 개수-->
          <div class="hoteldetail-review-count">
            <span id="review-count">371</span>reviews
          </div>
        </div>

      </div>

      <!--호텔 디테일 오른쪽 (찜, 공유, 가격, 예약)-->
      <div class="hotel-detail-right">
        <div class="hoteldetail-price">
          ₩<span id="hoteldetail-price">240,000</span>/night
        </div>
        <div class="hoteldetail-btns">
          <div class="hoteldetail-heart">
            <button id="hoteldetail-favorite-btn">
              <img src="@/assets/emptyheart.png">
            </button>
          </div>
          <div class="hoteldetail-share">
            <button id="hoteldetail-share-btn">
              <img src="@/assets/share.png">
            </button>
          </div>
          <div class="hoteldetail-book">
            <button id="hoteldetail-book-btn">
              Book now
            </button>
          </div>
        </div>

      </div>

    </div>

    <!--호텔 이미지-->
    <div class="hotel-detail-img">
      <div class="hoteldetail-img-main">
        <img src="@/assets/hoteldetail-main-img.png">
      </div>
      <div class="hoteldetail-imgs">
        <div class="hoteldetail-imgs-up">
          <div class="hoteldetail-img-1">
            <img src="@/assets/hoteldetail-img-1.png">
          </div>
          <div class="hoteldetail-img-2">
            <img src="../assets/hoteldetail-img-2.png">
          </div>
        </div>
        <div class="hoteldetail-imgs-down">
          <div class="hoteldetail-img-3">
            <img src="../assets/hoteldetail-img-3.png">
          </div>
          <div class="hoteldetail-img-4">
            <img src="@/assets/hoteldetail-img-4.png">
          </div>
        </div>
      </div>
    </div>

    <!--호텔 개요-->
    <div class="hotel-overview">
      <div class="hotel-overview-title">
        <h3>Overview</h3>
      </div>
      <div class="hotel-overview-text">
        반다르 힐리르 지역에 위치한 대형 호텔로 쇼핑몰과 관광지가 가까워 접근성이 뛰어납니다. 실외 수영장, 스파, 피트니스 센터, 그리고 가족 단위 여행객을 위한 키즈 풀까지 갖추고 있어 편리하고 실속 있는 여행을 원하는 분들에게 적합합니다. 넓은 객실과 모던한 시설은 물론, 비즈니스 센터와 회의실도 완비되어 있어 단체 관광이나 기업 연수에도 어울립니다.
      </div>
      <div class="hotel-overview-boxes">
        <div class="hotelrating-avg-now">
          <div class="rating">
            <h1>4.2</h1>
          </div>
          <!--호텔 만족도-->
          <div class="hoteldetail-overview-satisfaction">
            <h2 id="satisfaction">Very Good</h2>
          </div>
          <!--호텔 리뷰 개수-->
          <div class="hoteldetail-review-count">
            <span id="review-count">371</span>reviews
          </div>
        </div>

        <div class="hotelfeatures">
          <div class="stars-img">
            <img src="@/assets/stars.png">
          </div>
          <div class="hotel-feature">
            <span id="feature-1">Near park</span>
          </div>
        </div>
        <div class="hotelfeatures">
          <div class="stars-img">
            <img src="@/assets/stars.png">
          </div>
          <div class="hotel-feature">
            <span id="feature-2">Near nightlife</span>
          </div>
        </div>
        <div class="hotelfeatures">
          <div class="stars-img">
            <img src="@/assets/stars.png">
          </div>
          <div class="hotel-feature">
            <span id="feature-3">Near theater</span>
          </div>
        </div>
        <div class="hotelfeatures">
          <div class="stars-img">
            <img src="@/assets/stars.png">
          </div>
          <div class="hotel-feature">
            <span id="feature-4">Clean Hotel</span>
          </div>
        </div>
      </div>
    </div>
    <!--호텔 잔여 객실-->
    <div class="hotel-leftrooms">
      <div class="hotel-leftrooms-title">
        <h3>잔여 객실</h3>
      </div>
      <!--잔여 객실 리스트-->

      <!--첫번째 객실-->
      <div class="leftroom">
        <!--객실 리스트 왼쪽 편(객실이미지, 객실타입 및 침대개수)-->
        <div class="leftroom-sec">
          <!--객실 이미지-->
          <div class="leftroom-img">
            <img src="@/assets/leftroom-1.png">
          </div>
          <!--객실 타입-->
          <div class="leftroom-type">
            <span id="roomtype">Superior room</span> - <span id="room-view"></span> - <span id="bed-counts">1 double bed or 2 twin beds</span>
          </div>
        </div>

        <!--객실 리스트 오른쪽 편(객실가격, 객실예약버튼)-->
        <div class="leftroom-sec">
          <div class="room-price">
            ₩<span id="room-price">240,000</span><small>/night</small>
          </div>
          <div class="room-book">
            <button id="room-book-btn">Book now</button>
          </div>
        </div>
      </div>

      <!--두번째 객실-->
      <div class="leftroom">
        <!--객실 리스트 왼쪽 편(객실이미지, 객실타입 및 침대개수)-->
        <div class="leftroom-sec">
          <!--객실 이미지-->
          <div class="leftroom-img">
            <img src="@/assets/leftroom-2.png">
          </div>
          <!--객실 타입-->
          <div class="leftroom-type">
            <span id="roomtype">Superior room</span> - <span id="room-view">City view</span> - <span id="bed-counts">1 double bed or 2 twin beds</span>
          </div>
        </div>

        <!--객실 리스트 오른쪽 편(객실가격, 객실예약버튼)-->
        <div class="leftroom-sec">
          <div class="room-price">
            ₩<span id="room-price">240,000</span><small>/night</small>
          </div>
          <div class="room-book">
            <button id="room-book-btn">Book now</button>
          </div>
        </div>
      </div>

      <!--세번째 객실-->
      <div class="leftroom">
        <!--객실 리스트 왼쪽 편(객실이미지, 객실타입 및 침대개수)-->
        <div class="leftroom-sec">
          <!--객실 이미지-->
          <div class="leftroom-img">
            <img src="@/assets/leftroom-3.png">
          </div>
          <!--객실 타입-->
          <div class="leftroom-type">
            <span id="roomtype">Superior room</span> - <span id="room-view">City view</span> - <span id="bed-counts">1 double bed or 2 twin beds</span>
          </div>
        </div>

        <!--객실 리스트 오른쪽 편(객실가격, 객실예약버튼)-->
        <div class="leftroom-sec">
          <div class="room-price">
            ₩<span id="room-price">240,000</span><small>/night</small>
          </div>
          <div class="room-book">
            <button id="room-book-btn">Book now</button>
          </div>
        </div>
      </div>

      <!--네번째 객실-->
      <div class="leftroom">
        <!--객실 리스트 왼쪽 편(객실이미지, 객실타입 및 침대개수)-->
        <div class="leftroom-sec">
          <!--객실 이미지-->
          <div class="leftroom-img">
            <img src="@/assets/leftroom-4.png">
          </div>
          <!--객실 타입-->
          <div class="leftroom-type">
            <span id="roomtype">Superior room</span> - <span id="room-view">City view</span> - <span id="bed-counts">1 double bed or 2 twin beds</span>
          </div>
        </div>

        <!--객실 리스트 오른쪽 편(객실가격, 객실예약버튼)-->
        <div class="leftroom-sec">
          <div class="room-price">
            ₩<span id="room-price">240,000</span><small>/night</small>
          </div>
          <div class="room-book">
            <button id="room-book-btn">Book now</button>
          </div>
        </div>
      </div>
    </div>

    <!--호텔 위치 지도-->
    <div class="hotel-map">
      <div class="hotel-map-top">
        <div class="hotel-map-title">
          <h1>
          지도보기
          </h1>
        </div>
        <div class="googlemaps-btn">
          <button id="googlemaps-btn">
            View on google maps
          </button>
        </div>
      </div>

      <!--지도-->
      <div class="map">

      </div>

      <!--주소-->
      <div class="hoteldetail-address">
        <img src="@/assets/ion-location.png"><span id="address">Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</span>
      </div>
    </div>

    <!--호텔 편의시설-->
    <div class="hotel-detail-amenities">
      <div>
        <h3>Amenitites</h3>
      </div>
      <div class="amenities-lists">
        <div class="amenities-lists-1column">

        </div>
        <div class="amenities-lists-2column">

        </div>
      </div>
    </div>
    <!--호텔 리뷰-->
    <div class="hotel-reviews">
      <div class="hotel-reviews-top">
        <div>
          <h3>Reviews</h3>
        </div>
        <div class="write-review">
          <button id="write-review-btn">Give your review</button>
        </div>
      </div>

      <div class="reviews-rating-avg">

      </div>
    </div>

    <div>
      <FooterComponent />
    </div>
  </div>
</template>

<style>
#room-book-btn {
  border: #8ae6b2 solid 1px;
  border-radius: 5px;
  background-color: #8ae6b2;
  width: 150px;
  height: 50px;
}
.room-book {
  margin: 0 0 0 50px;
}
.room-price {
  font-size: 30px;
  margin: auto;
}
.leftroom-type {
  margin: auto 15px;
}
.leftroom {
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  padding: 10px;
  border-bottom: #D9D9D9 solid 1px;
}
.leftroom-sec {
  display: flex;
}
.hotel-leftrooms-title {
  margin: 30px 0 20px 10px;
  text-align: left;
  width: 1250px;
}
.hotel-leftrooms {
  margin: auto;
  max-width: 1250px;
  flex-direction: column;
}
.hotelfeatures {
  border: #8ae6b2 solid 1px;
  border-radius: 10px;
  margin: 0 0 0 20px;
  padding: 15px;
  width: 150px;
}
.hotel-feature {
  margin: 55px 0 0 0;
  text-align: left;
}
.hoteldetail-overview-satisfaction {
  margin-top: 30px;
}
.hotel-overview-boxes {
  display: flex;
  text-align: left;
  margin: 20px auto;
  padding-bottom: 50px;
  border-bottom: #D9D9D9 solid 1px;
}
.hotelrating-avg-now {
  border: #8ae6b2 solid 1px;
  border-radius: 10px;
  background-color: #8ae6b2;
  padding: 15px;
}
.hotel-overview-text {
  text-align: left;
  margin: 20px auto;
}
.hotel-overview-title {
  margin: 50px 0 10px 0;
  text-align: left;
}
.hotel-overview {
  margin: auto;
  max-width: 1240px;
}
.hoteldetail-img-3 {
  border-top-right-radius: 5px;
}
.hoteldetail-img-4 {
  border-bottom-right-radius: 5px;
}
.hoteldetail-img-main {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.hoteldetail-imgs {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: auto 10px;
}
.hotel-detail-img {
  display: flex;
  width: 1250px;
  margin: 20px auto;
  padding-bottom: 70px;
  border-bottom: #D9D9D9 solid 1px;
}
.hoteldetail-price {
  font-size: 20px;
  font-weight: bold;
  color: #FF8682;
  text-align: right;
}
#hoteldetail-book-btn {
  background-color: #8ae6b2;
  border-radius: 5px;
  border: #8ae6b2 solid 1px;
  width: 150px;
  height: 45px;
}
#hoteldetail-share-btn {
  background-color: white;
  border: #8ae6b2 solid 1px;
  border-radius: 5px;
  width: 45px;
  height: 45px;
}
#hoteldetail-favorite-btn {
  background-color: white;
  border: #8ae6b2 solid 1px;
  border-radius: 5px;
  width: 45px;
  height: 45px;
}
.hoteldetail-btns {
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 10px;
  margin: 10px auto;
}
.hoteldetail-satisfaction {
  padding: 5px;
}
.hoteldetail-rating-count {
  display: flex;
  align-items: center;
  margin: 10px auto 10px;
}
.hotel-namegrade {
  display: flex;
  align-items: center;
  margin: 10px auto;
}
.hoteldetail-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1250px;
  margin: 10px auto;
}
.hoteldetail-page {
  display: flex;
  flex-direction: column;
}
.country-city-hotelname {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 1050px 0 0;
}
.hd-country{
  color: #FF8682;
}
.hd-city {
  color: #FF8682;
}
</style>