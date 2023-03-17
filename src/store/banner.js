import { getBanners } from '@/api/banner'
export default {
    namespaced: true,
    state: {
        loading: false,
        data: []
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fetchBanner(ctx) {
            if (ctx.state.data.length) return;// 当前数据有值就不运行了
            ctx.commit("setLoading", true);
            const rersp = await getBanners();
            ctx.commit("setData", rersp);
            ctx.commit("setLoading", false);
        }

    }

}