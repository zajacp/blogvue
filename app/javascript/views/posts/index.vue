<template>
  <div id="posts-index" class="container">
    <table>
      <tr v-for="post in posts">
        <td>{{post.title}}</td>
        <td>{{post.content}}</td>
        <td>{{post.navigation}}</td>
        <td>{{post.postDate}}</td>
      </tr>
    </table>

  </div>
</template>

<script>
	export default {
		data: function () {
			return {
         posts: []
			}
		},
    mounted: function(){
			let _this = this
      console.log(_this)
			this.axios.get("/posts")
        .then(function(response){
          response.data.forEach(function(object, index){
						_this.posts.push(object)
          })

        })
        .catch(function(error){
        	console.log(error)
        })

    }

	}
</script>

<style scoped>
tr{
  border: 1px solid black;
}
</style>