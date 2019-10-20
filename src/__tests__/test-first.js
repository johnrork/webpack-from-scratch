import Vue from 'vue'
import Something from '../something.vue'

describe('Something', () => {

    it("mounts with default message", () => {
        let cmp = new Vue(Something).$mount()
        return Vue.nextTick().then(() => expect(cmp.$el.innerHTML).toBe('Hello'))
    })


    it("changes message on click", () => {
        let cmp = new Vue(Something).$mount()
        cmp.$el.click()
        return Vue.nextTick().then(() => expect(cmp.$el.innerHTML).toBe('Goodbye'))
    })

})
