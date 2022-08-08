<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/posts">Posts Lists</router-link>
    <router-link to="/posts/create">Create Post</router-link>
  </nav>
</template>

<style>

.navbar{
  display: flex;
  justify-content:space-around;
  padding: 20px;
  background-color: #262626;
}

</style>