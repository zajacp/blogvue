<template>

  <div id="app">
    <NavigationTop></NavigationTop>
    <p>{{ message }}</p>
  </div>
</template>

<script>

  import NavigationTop from "./page_main_parts/navigation_top";
  export default {
    components: {NavigationTop},
    data: function () {
      return {
        message: "Hello Vue!"
      }
    }
  }
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
