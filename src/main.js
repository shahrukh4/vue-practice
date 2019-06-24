import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";

import '@/assets/css/style.css';

Vue.config.productionTip = true;

/*Vue.config.errorHandler = function(err, vm, info) {
  console.log(`Error: ${err.toString()}\nInfo: ${info}`);
}

Vue.config.warnHandler = function(msg, vm, trace) {
  console.log(`Warn: ${msg}\nTrace: ${trace}`);
}*/

window.Event = new Vue();

new Vue({
	router,
	store,
  	render: h => h(App)
}).$mount("#app");
