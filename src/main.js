import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faSquare, faCheckSquare, faCheck, fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(faCoffee);
library.add(faSquare);
library.add(faCheckSquare);
library.add(faCheck);
library.add(fas);

Vue.config.productionTip = false
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.component('FontAwesomeLayers', FontAwesomeLayers)
Vue.component('FontAwesomeLayersText', FontAwesomeLayersText)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
