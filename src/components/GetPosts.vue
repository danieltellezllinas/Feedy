<template>
  <div v-for="post in posts" :key="post.id">
    <a class="div--global" :href="`/posts/${post.id}`">
      <p>{{ post.title }}</p>
      <p>Post id: {{ post.id }}</p>
    </a>
    <DeletePost :id="post.id"/>
  </div>
</template>

<script>
import DeletePost from "@/components/DeletePost.vue";
export default {
  name: "GetPosts",
  components: {
    DeletePost,
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
    detailNote(post) {
      console.log(post);
    },
  },
};
</script>

<style scoped>
.div--global {
  background-color: #fdeee7;
  display: flex;
  width: fit-content;
  margin: 20px;
  padding: 20px;
  border-radius: 2px;
}
</style>
