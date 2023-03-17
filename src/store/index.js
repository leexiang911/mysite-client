import { Store, install } from 'vuex';
import Vue from 'vue';
import banner from './banner';
import setting from './setting';
import about from './about';
import project from './project'

if (!window.Vuex) {// window中没有vuex才使用，cdn中不能使用install
    install(Vue)
}

export default new Store({
    modules: {
        banner,
        setting,
        about,
        project
    },
    strict: true
})