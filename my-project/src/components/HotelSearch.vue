<script >
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from  "@/components/FooterComponent.vue"


export default {
  components: {
    HeaderComponent: HeaderComponent,
    FooterComponent: FooterComponent,
  }
}
</script>

<template>
  <HeaderComponent />
  <div class="outer-container">
    <div class="inner-container">
    </div>
  </div>
  <FooterComponent />
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