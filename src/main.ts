import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
  watch: {
    $route: {
      immediate: true,
      handler(to, _) {
        document.title = to.meta.title || "MkdirSteve";
      },
    },
  },
}).$mount("#app");
