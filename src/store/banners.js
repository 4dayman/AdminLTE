
export default {
    state: {
     
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
        async uploadBanners() {
            for (let i = 0; i < this.banners.length; i++) {
                if (this.banners[i].imgUrl !== null) {
                    try {
                        const bannersRef = ref(storage, "banners/movies/" + this.banners[i].imageId);
                        await uploadBytes(bannersRef, this.banners[i].imgUrl).then(async () => {
                            await getDownloadURL(bannersRef).then((url) => {
                                this.banners[i].imgUrl = url;
                            });
                        });
                    } catch (e) {
                        console.error("Error uploading banners: ", e);
                    }
                }
            }
         },
    },
    mutations: {
        SET_BANNERS(state, payload) {
            state.banners = payload
        },
    },
    getters: {
        getBanners: (state) => state.banners,
    },
}