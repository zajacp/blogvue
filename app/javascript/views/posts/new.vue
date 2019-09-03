<template>
  <div id="new-post" class="container">
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" placeholder="title" v-model="title">
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <textarea class="form-control" id="content">{{content}}</textarea>
      </div>
      <div class="form-group">
        <label for="postDate">Date</label>
        <input type="date" class="form-control" id="postDate" placeholder="title" v-model="postDate">
      </div>
      <div class="form-group">
        <label for="Link">Link</label>
        <input type="text" class="form-control" id="link" placeholder="link" v-model="link">
      </div>
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
        link: ''
			}
		}
	}
</script>

<style scoped>

</style>