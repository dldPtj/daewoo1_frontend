<script >
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";
export default {
  components: {
    HeaderComponent: HeaderComponent,
    FooterComponent: FooterComponent,
    ProfileComponent: ProfileComponent,
  }
}
</script>

<template>
  <header-component/>
  <profile-component/>


  <FooterComponent/>
</template>

<style>

</style>