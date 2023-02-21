<script>
  import NavbarComp  from "./components/NavbarComp.vue";
  export default {
    name: "App",
    components: {
      NavbarComp,
    }
  }
</script>

<template>

    <NavbarComp></NavbarComp>

  <router-view></router-view>
</template>

<style scoped>

</style>
