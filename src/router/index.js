import Vue from "vue";
import Router from "vue-router";
import {About, Home, TicTac} from "@/views";
import {Cell, Grid} from "@/components";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/tic-tac-toe",
            name: "tic-tac-toe",
            component: TicTac
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        // {
        //     path: "/about",
        //     name: "about",
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () =>
        //     import(/* webpackChunkName: "about" */ "./views/About.vue")
        // }
    ]
});
