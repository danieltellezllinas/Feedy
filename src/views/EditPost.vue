<template>
<h1 class="h1--titleglobal">Edit Post</h1>
  <div>
    <p>Title:</p>
    <input type="text" v-model="post.title" />
    <p>Body:</p>
    <input type="text" v-model="post.body" />
    <button v-on:click="editPost(post)">Editar</button>
  </div>
</template>

<script>
export default {
  name: "EditPost",

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

  mounted() {
    this.fetchGetPost(this.$route.params.id);
  },

  methods: {
    fetchGetPost(id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((json) => {
          this.post = json;
        });
    },
    editPost(postData) {
      fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`,
        {
          method: "PUT",
          body: JSON.stringify(postData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((response) => response.json())
        .then(() => {
          this.$router.push("/posts").then(() => {
            window.alert("Post edited");
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