import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// import Echarts from 'vue-echarts'
import VueECharts from "vue-echarts";
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/chart/line'

import "@vue/composition-api";
import "echarts";





// Vue.component('chart',Echarts);
Vue.component("v-chart", VueECharts);

Vue.config.productionTip = false



new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
