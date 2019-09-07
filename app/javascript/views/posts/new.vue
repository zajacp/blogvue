<template>
  <div id="posts-new" class="container">
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" placeholder="title" v-model="title">
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <textarea class="form-control" id="content"  v-model="content">{{content}}</textarea>
      </div>
      <div class="form-group">
        <label for="postDate">Date</label>
        <input type="date" class="form-control" id="postDate" placeholder="title" v-model="postDate">
      </div>
      <div class="form-group">
        <label for="Link">Link</label>
        <input type="text" class="form-control" id="navigation" placeholder="navigation" v-model="navigation">
      </div>
      <button @click.prevent="create" class="btn btn-primary">Create</button>
    </form>

  </div>
</template>

<script>
	export default {
		data: function () {
			return {
        title: '',
        content: '',
        postDate: '',
        navigation: ''
			}
		},
    methods: {
			create: function(){
				this.axios.post('/posts', {
					title: this.title,
          content: this.content,
          postDate: this.postDate,
          navigation: this.navigation
        }).then(function(response){
        	console.log("ok")
        	console.log(response)
        }).catch(function(error){
        	console.log("error")
        	console.log(error)
        })
      }

    }

	}
</script>

<style scoped>

</style>