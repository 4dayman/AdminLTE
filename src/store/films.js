export default {
    state: {
        // data: [],        
        currentList: [],
        // deleted: [],
        // upcomList: [],
        loading: false,
        toggle: false,
        currentModal: false,
        upcomModal: false,
        uploaded: false,
        filmCards: [
            { filmTitle: 'film 1', filmPhoto: require('../assets/banners/645154.jpg'), filmDate: '1.1.1111'},
            { filmTitle: 'film 2', filmPhoto: require('../assets/banners/645154.jpg'), filmDate: '1.1.1111'},
            { filmTitle: 'film 3', filmPhoto: require('../assets/banners/645154.jpg'), filmDate: '1.1.1111'},
            { filmTitle: 'film 4', filmPhoto: require('../assets/banners/645154.jpg'), filmDate: '1.1.1111'},
        ],
        // filmTitle: '',
        // filmPhoto: null,
        // filmPhotoPreview: null,

    },
    actions: {},
    mutations: {},
    getters: {},
}