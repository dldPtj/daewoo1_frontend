<template>
  <div>
<!--    단일 객체일 경우에는 v-if 배열일 경우에는 v-for를 쓴다-->
    <div v-for="item in list" :key="item">
      <span>{{ item.id }}</span>
      <span>{{ item.title }}</span>
      <span>{{ item.cityName }}</span>
    </div>

<!--    mainData에 title이 있다면 true 없다면 false-->
    <div v-if="mainData?.title"> 
      <span>{{ mainData.id }}</span>
      <span>{{ mainData.title }}</span>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import { aTeamApi } from './util/axios';

export default {
  name: 'TestAxios',

  data() {
    return {
      list: [],
      resultData: null,
      mainData: {},
    }
  },

  async mounted() {
    const result = await aTeamApi.get('/api/travel-packages/popular');
    this.resultData = result;
    this.list = this.resultData.data.data; //data의 첫번째는 서버 전체의 응답을 의미하고 두번째 data는 그 안의 data키를 빼온거임.
    console.log(this.list);

    const result2 = await  aTeamApi.get('/api/travel-packages/main');
    this.mainData = result2.data.data;
    console.log(this.mainData);
  }
}
</script>

<style scoped>
</style>