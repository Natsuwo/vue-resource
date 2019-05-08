import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);
Vue.http.options.root = 'https://pjvue-24dfd.firebaseio.com';
Vue.http.interceptors.push((req, next) => {
  console.log(req);
  if (req.method == 'POST') { 
    req.method = 'PUT'}
  next();
})

new Vue({
  el: '#app',
  render: h => h(App)
})
