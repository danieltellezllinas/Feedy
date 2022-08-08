<template>
  <div>
    <div v-if="post !== null">
      <DeletePost :id="post.id" />
      <p>{{ post.title }}</p>
      <p>{{ post.body }}</p>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script>
import DeletePost from "@/components/DeletePost.vue";
// @ is an alias to /src
export default {
  name: "PostViewDetail",
  components: {
    DeletePost,
  },
  data() {
    const state = {
      post: null,
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
          console.log(this.post);
        });
    },
  },
};
</script>
