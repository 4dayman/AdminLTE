
export default {
    state: {
        mainBanners: {
            data: [],
            banners: [],
            deletedBanners: [],
            rotationSpeed: 0
        },
        bgBanners: {
            radioValue: '',
            image: null,
            url: '',
            color: '',
        },
        newsBanners: {
            data: [],
            banners: [],
            deletedBanners: [],
            rotationSpeed: 0
        }
    },
    actions: {
        async getAllBanners() { },
        async uploadBanners() {},
    },
    mutations: {
        SET_BANNERS(state, payload) {
            state.banners = payload
        },
    },
    getters: {
        async getBanners() { },
    },
}