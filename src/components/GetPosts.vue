<template>
<h1 class="h1--titleglobal">Post Lists</h1>
<div class="div--global">
  <div class="div--globalpost" v-for="post in posts" :key="post.id">
    <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
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

a{
  color: #262626;
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
