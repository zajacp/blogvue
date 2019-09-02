<template>
  <div id="nav">
    <span v-for="link in navigationLinks">
      {{link}}
    </span>
  </div>
</template>

<script>
	export default {
		data: function () {
			return {
		    navigationLinks: [
		    	'nav1',
          'nav2',
          'nav3'
        ]
			}
		}
	}
</script>

<style scoped>
  span {
    font-size: 2em;
    padding-left: 5px;
    padding-right: 5px;
  }
</style>
