<template>
  <div class='div--globallastposts' v-for="(post, index) in $store.state.posts" :key="index">
    <p class="div--titlelastposts">{{post.title}}</p>
    <p>{{post.body}}</p>
  </div>
</template>

<style>

.div--globallastposts{
  margin: 20px;
}

.div--titlelastposts{
  font-size: 22px;
  font-weight: 600;
}

</style>