<template>
  <img v-on:click="detelePost(id)" class='img--icondelete' src="https://cdn-icons-png.flaticon.com/512/458/458594.png" />
</template>

<script>
// @ is an alias to /src
export default {
  name: "DeletePost",

  props: {
    id: Number,
  },

  methods: {
    detelePost(id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          this.$router.push("/posts").then(() => {
            window.alert("Post deleted");
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

.img--icondelete{
  width: 20px;
  height: fit-content;
}

</style>