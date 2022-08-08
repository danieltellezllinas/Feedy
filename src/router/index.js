import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostsListView from "../views/PostsListView.vue";
import PostViewDetail from "../views/PostViewDetail.vue";
import CreatePost from "../views/CreatePost.vue";
import EditPost from "../views/EditPost.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/posts",
    name: "posts",
    component: PostsListView,
  },
  {
    path: "/posts/create",
    name: "postsCreate",
    component: CreatePost,
  },
  {
    path: "/posts/edit/:id",
    name: "postsEdit",
    component: EditPost,
  },
  {
    path: "/posts/:id",
    name: "postsDetails",
    component: PostViewDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
