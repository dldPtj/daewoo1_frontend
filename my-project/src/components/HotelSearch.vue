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
  <div class="outer-container">
    <div class="inner-container">
    </div>
  </div>
</template>

<style >
.outer-container {
  display: flex;
  justify-content: center;
}
.inner-container {
  border: #FF8682 solid 1px;
  width: 1232px;
  height: 305px;
}
</style>