<template>
  <div>
    <div v-if="post !== null">
    <div class="div--iconseditanddelete">
      <div class="div--globaliconseditanddelete">
        <a :href="`/posts/edit/${post.id}`"><img class='img--iconedit' src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png'/></a>
        <DeletePost :id="post.id" />
      </div>
    </div>
    <div class="div--globaltitleandbody">
      <p class="p--titlepost">{{ post.title }}</p>
      <p class="p--bodypost">{{ post.body }}</p>
    </div>
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
        });
    },
  },
};
</script>

<style>

.img--iconedit{
  width: 20px;
  height: fit-content;
}

.div--globaliconseditanddelete{
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.p--titlepost{
  font-size: 30px;
  margin-bottom: 20px;
}

.div--globaltitleandbody{
  padding: 16px;
}

.div--iconseditanddelete{
  display: flex;
    justify-content: end;
}
</style>