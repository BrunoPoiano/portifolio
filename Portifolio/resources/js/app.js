require("./bootstrap");

import { createApp } from "vue";
import Layout from "./Layout.vue";

//Routes
import  router  from './Router';

const app = createApp({}).use(router);
app.component("layout", Layout).mount("#app");


 