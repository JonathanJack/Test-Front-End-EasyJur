import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'


import VueECharts from "vue-echarts";

import 'echarts/lib/component/title'
import 'echarts/lib/chart/line'

import "@vue/composition-api";
import "echarts";


Vue.component("v-chart", VueECharts);

Vue.config.productionTip = false



new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
