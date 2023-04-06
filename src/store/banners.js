
export default {
    state: {
        banners: [
            {
                id: '123',
                imageId: '24j2k',
                url: 'url',
                title: 'title',
                show: false
            },
            {
                id: '1234',
                imageId: '24j2k45',
                url: 'other url',
                title: 'other title',
                show: false
            },
            {
                id: '12345',
                imageId: '24j2k45',
                url: 'other url',
                title: 'other title',
                show: false
            },
        ]
    },
    actions: {},
    mutations: {
        SET_BANNERS(state, payload) {
            state.banners = payload
        }
    },
    getters: {
        getBanners: (state) => state.banners
    },
}