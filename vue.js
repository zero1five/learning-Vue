new Vue({
    el: '#demo',
    data () {
        return {
            list: list
        }
    },
    watch: {
        list: function(){ /* list里的数据改变时就会触发这个函数 */
            // coding   /* 浅监控 只能监控list对象下的一层 */
        },
        list: {
            handler: function(){
                // coding
            },
            deep: true   /* 深度监控 可以监控list对象下的所有 */
        }
    }
})


import Vue from 'Vue'
import Vuex from 'vuex'

// Vuex 的使用  

Vue.use(Vuex)

let store = new Vuex.Store({
    
})

export default store
