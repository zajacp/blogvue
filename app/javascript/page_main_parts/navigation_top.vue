<template>
<div id="nav">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <template v-for="link in navigationLinks">
          <b-nav-item :to="'/' + link"> {{link}}</b-nav-item>
        </template>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>Post</em></template>
          <b-dropdown-item :to="'/posts'">Index</b-dropdown-item>
          <b-dropdown-item :to="'/posts/new'">New</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
	export default {
		data: function () {
			return {
		    navigationLinks: [
		    	'first',
          'second',
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
