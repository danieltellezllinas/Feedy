<template>
  <GetPosts />
</template>

<script>
// @ is an alias to /src
import GetPosts from "@/components/GetPosts.vue";

export default {
  name: "PostsListView",
  components: {
    GetPosts,
  },
};
</script>
