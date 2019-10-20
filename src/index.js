import Vue from 'vue'
import Something from './something.vue'

console.log("hello")
new Vue({
    el: "#main",
    template: "<Something/>",
    components: { Something }
})
