<template>
  <div>
    Title:
    <input type="text" v-model="post.title" />
    The title is: {{ post.title }}
    <input type="text" v-model="post.body" />
    The body is: {{ post.body }}
    <button v-on:click="createPost(post)">Create</button>
  </div>
</template>

<script>
// @ is an alias to /src
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
