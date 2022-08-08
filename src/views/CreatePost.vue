<template>
<h1 class="h1--titleglobal">Create Post</h1>
<div class="div--globaleditpost">
  <div class="div--titleedit">
    <p>Title:</p>
    <input type="text" v-model="post.title" />
  </div>
  <div class="div--bodyedit">
    <p>Body:</p>
    <input type="text" v-model="post.body" />
  </div>
  <div class="div--buttonedit">
    <button class='button--edit' v-on:click="createPost(post)">Create</button>
  </div>
  </div>
</template>

<script>

export default {
  name: "CreatePost",

  data() {
    const state = {
      post: {
        title: "",
        body: "",
        userId: 1,
      },
    };
    return state;
  },

  methods: {
    createPost(postData) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => {
          this.$router.push("/posts").then(() => {
            window.alert("Post created");
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style>
.h1--titleglobal{
  font-size: 70px;
  padding: 20px;
}
</style>