<template>
  <div v-for="post in posts" :key="post.id">
    <div>
      <p>{{ post.title }}</p>
      <p>post id: {{ post.id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetPosts",
  props: {
    msg: String,
  },

  data() {
    const state = {
      posts: [],
    };
    return state;
  },

  mounted() {
    this.fetchGetList();
  },

  methods: {
    fetchGetList() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          this.posts = json;
        });
    },
  },
};
</script>

<!-- <style scoped>

</style> -->
