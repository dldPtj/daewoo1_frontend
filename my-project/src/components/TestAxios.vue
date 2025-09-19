<template>
  <div>
    <div v-for="item in list" :key="item">
      <span>{{ item.id }}</span>
      <span>{{ item.title }}</span>
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
    }
  },

  async mounted() {
    const result = await aTeamApi.get('/api/travel-packages/popular');
    this.resultData = result;
    this.list = this.resultData.data.data; //data의 첫번째는 서버 전체의 응답을 의미하고 두번째 data는 그 안의 data키를 빼온거임.
    console.log(this.list);
  }
}
</script>

<style scoped>
</style>