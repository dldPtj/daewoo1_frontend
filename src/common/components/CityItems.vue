<script>
  export default {
    name: "CityItems",
    props: {
      cityInfo: {
        type: Object,
        default: () => ({}),
      },
    },
  };
</script>

<template>
  <!-- 첫번째 도시-->
  <div class="first-city">
    <img src="./melbourne.png">

    <div class="city-item">
      <div class="city-content">
        <h3 class="city-title">
          {{ cityInfo.cityName }}
        </h3>
        <span class="city-detail"> <!--한줄(두줄)에는 공백포함 18자(40자)만 허용하기-->
            {{ cityInfo.title }}
          </span>
      </div>
      <div class="homepage-hotel-price">
        <h3>
          {{ cityInfo.price }}원
        </h3>
      </div>
      <div class="hotel-book-btn">
        <button id="bookhotel">Book a Hotel</button>
      </div>
    </div>

  </div>
</template>

<style>
.city-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  text-align: left;
  top: 1250px;
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
  overflow: hidden;
  text-overflow: ellipsis;
}
.homepage-hotel-price {
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