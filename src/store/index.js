import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
    post: {},
  },
  getters: {},
  mutations: {
    addPost(state) {
      state.posts = [state.post, ...state.posts];
    },
  },
  actions: {
    addPostAction(context) {
      context.commit("addPost");
    },
  },
});