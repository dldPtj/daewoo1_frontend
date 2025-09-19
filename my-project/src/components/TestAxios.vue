  <script >
  import api from "./api/api.js"
  export default {

    name : 'TestAxois',

    data(){
      return {
        list: [],
        resultData: null,
      }
    },
    async mounted(){
      const testResult = await api.get("/api/travel-packages/main");
      this.resultData = testResult;
      this.list = this.resultData.data.value;
    }
  }
  </script>

  <template>
    <div>
      <div v-for="item in list" :key="item">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </template>

  <style >

  </style>