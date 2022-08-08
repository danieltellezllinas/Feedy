<template>
<h1 class="h1--titleglobal">Edit Post</h1>
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
      <button class='button--edit' v-on:click="editPost(post)">Edit</button>
    </div>
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

p{
  font-size: 20px;
  margin-bottom: 5px;
}

.div--titleedit{
  margin-bottom: 20px;
}

.div--globaleditpost{
  margin: 20px;
}

input{
      width: -webkit-fill-available;
      border: none;
    font-size: 16px;
    border-bottom: 1px solid grey;
}

.div--bodyedit{
  margin-bottom: 30px;
}

.button--edit{
  border: none;
  padding: 10px;
  font-size: 15px;
  border-radius: 2px;
  background-color: #8bc34a;
    color: white;
    font-weight: 700;
}

.div--buttonedit{
  display: flex;
  justify-content: end;
  padding-top: 25px;
}
</style>