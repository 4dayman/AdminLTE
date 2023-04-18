
export default {
    state: {
        mainBanners: {
            data: [],
            banners: [],
            deletedBanners: [],
            rotationSpeed: 0
        },
     
        banners: [
            // {
            //     id: '123',
            //     imageId: '24j2k',
            //     imgUrl: 'https://wallpaperaccess.com/full/645154.jpg',
            //     url: 'url',
            //     title: 'title',
            //     // show: false
            // },
            // {
            //     id: '1234',
            //     imageId: '24j2k45',
            //     imgUrl: 'https://wallpaperaccess.com/full/645154.jpg',
            //     url: 'other url',
            //     title: 'other title',
            //     // show: false
            // },
            // {
            //     id: '12345',
            //     imageId: '24j2k45',
            //     imgUrl: 'https://wallpaperaccess.com/full/645154.jpg',
            //     url: 'other url',
            //     title: 'other title',
            //     // show: false
            // },
        ],
        rotation: 0
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