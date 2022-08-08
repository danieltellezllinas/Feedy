<template>
<h1 class="h1--titleglobal">Post Lists</h1>
<div class="div--global">
  <div class="div--globalpost" v-for="post in posts" :key="post.id">
    <a :href="`/posts/${post.id}`">
      <p>{{ post.title }}</p>
    </a>
    <DeletePost :id="post.id" />
  </div>
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
  },
};
</script>

<style scoped>

.h1--titleglobal{
  font-size: 70px;
  padding: 20px;
}

.div--globalpost {
  background-color: #fdeee7;
  display: flex;
  width: fit-content;
  margin: 20px;
  padding: 20px;
  border-radius: 2px;
  color: #262626;
  width: 200px;
  justify-content: space-between;
}

.div--global{
  display: flex;
  flex-wrap: wrap;
}
</style>
