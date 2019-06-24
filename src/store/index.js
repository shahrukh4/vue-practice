import Vue from "vue";
import Vuex from "vuex";

import * as	tictac from '@/store/modules';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		tictac
	}
});