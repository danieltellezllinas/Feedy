<template>
    <button v-on:click="detelePost(id)">Delete post {{ id }}</button>
</template>

<script>
// @ is an alias to /src
export default {
    name: "DeletePost",

    props: {
        id: Number
    },

    methods: {
        detelePost(id) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
            }).then(() => {
                this.$router.push('/posts').then(() => {
                    window.alert('Post deleted')
                })
            }).catch((err) => { console.error(err) })
        },
    },
};
</script>