<script>
  import NavbarComp  from "./components/NavbarComp.vue";
  export default {
    name: "App",
    components: {
      NavbarComp,
    },
    created(){
      console.log(document.querySelector("h1"));
    },

    mounted() {
      console.log(document.querySelector("h1"));
      
    },
  }
</script>

<template>
    <h1>Hello Dom! </h1>
    <NavbarComp></NavbarComp>

  <router-view></router-view>
</template>

<style scoped>

</style>
