<template>

  <div id="app">
    <NavigationTop></NavigationTop>
    <p>{{ message }}</p>
    <Footer></Footer>
  </div>
</template>

<script>

  import NavigationTop from "./page_main_parts/navigation_top";
	import Footer from "./page_main_parts/footer";
  export default {
    components: {NavigationTop, Footer},
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
