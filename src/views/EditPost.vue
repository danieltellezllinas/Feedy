<template>
  <div>
    Title:
    <input type="text" v-model="post.title" />
    The title is: {{ post.title }}
    <input type="text" v-model="post.body" />
    The body is: {{ post.body }}
    <button v-on:click="editPost(post)">Aceptar</button>
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
