<template>
    <content-header title="Страница фильма" icon="fas fa-info-circle" />
    <content>
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Страница фильма</h3>
                    </div>
                    <!-- <div class="film_lang">
                        <div class="custom-control custom-radio">
                            <input class="custom-control-input" type="radio" id="ua" value="ua">
                            <label for="ua" class="custom-control-label">Украинский</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input class="custom-control-input" type="radio" id="ru" value="ru">
                            <label for="ru" class="custom-control-label">руский</label>
                        </div>
                    </div> -->
                    <div class="card-body">
                        <div class="film_name">
                            <div class="input-group mb-3">
                                <p>Название фильма:</p>
                                <input class="form-control ml-1" type="text" placeholder="Название фильма">
                            </div>
                        </div>
                        <div class="film_desc">
                            <div class="input-group mb-3">
                                <p>Описание:</p>
                                <textarea class="form-control ml-1" type="text" placeholder="Text"></textarea>
                            </div>
                        </div>
                        <div class="film_banner">
                            <p>Главная картинка:</p>
                            <div class="film_image_body ml-2">
                                <div class="film_image" v-if="this.$store.state.films.mainMovies.data[0]">
                                    <img :src="this.$store.state.films">
                                </div>
                                <label class="banners_add">
                                    <button class="btn btn-primary square" @click="this.$refs.filmsSelect.click()"><i
                                            class="fas fa-plus"></i>
                                        Добавить фото</button>
                                    <input class="banner_input" ref="bannersBgSelect" type="file" accept="image/*"
                                        @change="filmsSelect($event)">
                                </label>
                                <button class="btn btn-primary square" @click="this.$store.state.films = ''"
                                    v-if="this.$store.state.films"><i class="fas fa-minus"></i>
                                    Удалить фото</button>
                            </div>
                        </div>
                        <div class="film_galery film_banner">
                            <p>Галерея картинок:</p>
                            <div class="film_image_body ml-2">
                                <div class="film_image" v-if="this.$store.state.films">
                                    <img :src="this.$store.state.films">
                                </div>
                                <label class="banners_add">
                                    <button class="btn btn-primary square" @click="this.$refs.filmsSelect.click()"><i
                                            class="fas fa-plus"></i>
                                        Добавить фото</button>
                                    <input class="banner_input" ref="bannersBgSelect" type="file" accept="image/*"
                                        @change="filmsSelect($event)">
                                </label>
                            </div>
                        </div>
                        <div class="film_url">
                            <div class="input-group mb-3">
                                <p>Ссылка на трейлер:</p>
                                <input class="form-control ml-1" type="text" placeholder="Ссылка на видео в youtube">
                            </div>
                        </div>
                        <div class="film_type">
                            <div class="input-group mb-3">
                                <p>Тип кино:</p>
                                <div class="form-check ml-2">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-check-label">3D</label>
                                </div>
                                <div class="form-check ml-2">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-check-label">2D</label>
                                </div>
                                <div class="form-check ml-2">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-check-label">iMAX</label>
                                </div>
                            </div>
                        </div>
                        <div class="film_seo">
                            <p>SEO блок:</p>
                            <div class="input-group mb-3">
                                <p>URL:</p>
                                <input class="form-control ml-1" type="text" placeholder="URL">
                            </div>
                            <div class="input-group mb-3">
                                <p>Title:</p>
                                <input class="form-control ml-1" type="text" placeholder="Title">
                            </div>
                            <div class="input-group mb-3">
                                <p>Keywords:</p>
                                <input class="form-control ml-1" type="text" placeholder="Keywords">
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <p>Description:</p>
                            <textarea class="form-control ml-1" type="text" placeholder="Description"></textarea>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary float-right" @click="uploadFilm">Сохранить</button>
                        <button class="btn btn-primary float-right" @click="">Вернуть базовую версию</button>
                    </div>
                </div>
            </div>
        </div>
    </content>
</template>

<script>
import { db, storage } from '../firebase/init.js'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { doc, getDoc, setDoc } from "firebase/firestore"
import Loader from '../components/Loader.vue'

export default {
    components: {
        Loader,
    },
    // created() {
    //     this.getBanners()
    //     this.getBannersNews()
    //     this.getBannersBg()
    // },
    methods: {
        // Movies
        // async bannersSelect(input) {
        //     let banners = input.target.files
        //     for (let i = 0; i < banners.length; i++) {
        //         await new Promise(resolve => setTimeout(resolve, 1))
        //         this.$store.state.banners.mainBanners.data.push({
        //             id: this.$store.state.banners.mainBanners.data.length,
        //             name: 'banner-' + Date.now(),
        //             url: '',
        //             title: '',
        //             imgUrl: null,
        //         })

        //         this.$store.state.banners.mainBanners.banners.push({
        //             id: this.$store.state.banners.mainBanners.banners.length,
        //             uploaded: false,
        //             image: banners[i],
        //             imgUrl: URL.createObjectURL(banners[i]),
        //         })
        //     }
        // },
        // async uploadBanners() {
        //     this.$store.state.banners.mainBanners.loader = true
        //     if (this.$store.state.banners.mainBanners.deletedBanners.length !== 0) {
        //         for (let i = 0; i < this.$store.state.banners.mainBanners.deletedBanners.length; i++) {
        //             const delRef = ref(storage, "banners/movies/" + this.$store.state.banners.mainBanners.deletedBanners[i]);
        //             await deleteObject(delRef).then(() => {
        //                 this.$store.state.banners.mainBanners.deletedBanners.splice(i, 1)
        //             }).catch((e) => {
        //                 console.log(e);
        //             });
        //         }
        //         this.uploadBannersData()
        //     }
        //     for (let i = 0; i < this.$store.state.banners.mainBanners.banners.length; i++) {
        //         if (this.$store.state.banners.mainBanners.banners[i].image !== null) {
        //             try {
        //                 const bannersRef = ref(storage, "banners/movies/" + this.$store.state.banners.mainBanners.data[i].name)
        //                 uploadBytes(bannersRef, this.$store.state.banners.mainBanners.banners[i].image).then(async () => {
        //                     await getDownloadURL(bannersRef).then((url) => {
        //                         this.$store.state.banners.mainBanners.data[i].imgUrl = url
        //                         this.uploadBannersData()
        //                     })
        //                 })
        //             } catch (e) { console.log(e) }
        //         } else { this.uploadBannersData() }
        //     }
        // },
        // async uploadBannersData() {
        //     await setDoc(doc(db, 'banners', 'movies'), {
        //         data: this.$store.state.banners.mainBanners.data,
        //         rotationSpeed: this.$store.state.banners.mainBanners.rotationSpeed,
        //         toggle: this.$store.state.banners.mainBanners.toggle
        //     })
        //     this.$store.state.banners.mainBanners.loader = false
        //     console.log('Movies data loaded')
        // },
        // async getBanners() {
        //     this.$store.state.banners.mainBanners.loader = true
        //     this.$store.state.banners.mainBanners.data = []
        //     this.$store.state.banners.mainBanners.banners = []
        //     const docRef = doc(db, 'banners', 'movies')
        //     const docSnap = await getDoc(docRef)
        //     if (docSnap.exists()) {
        //         this.$store.state.banners.mainBanners.toggle = docSnap.data().toggle
        //         this.$store.state.banners.mainBanners.rotationSpeed = docSnap.data().rotationSpeed
        //         this.$store.state.banners.mainBanners.data = docSnap.data().data
        //         for (let i = 0; i < this.$store.state.banners.mainBanners.data.length; i++) {
        //             this.$store.state.banners.mainBanners.banners.push({
        //                 id: i,
        //                 uploaded: true,
        //                 image: null,
        //                 imgUrl: this.$store.state.banners.mainBanners.data[i].imgUrl
        //             })
        //         }
        //     }
        //     this.$store.state.banners.mainBanners.loader = false
        // },

        // Bg
        async bannersBgSelect(input) {
            let bannersBg = input.target.files[0]
            this.$store.state.banners.bgBanners.image = bannersBg
            this.$store.state.banners.bgBanners.url = URL.createObjectURL(bannersBg)
        },
        // async uploadBannersBgAndData() {
        //     this.$store.state.banners.bgBanners.loader = true
        //     if (this.$store.state.banners.bgBanners.image !== null) {
        //         try {
        //             const bannersRef = ref(storage, "banners/bg/bg-1")
        //             await uploadBytes(bannersRef, this.$store.state.banners.bgBanners.image).then(async () => {
        //                 await getDownloadURL(bannersRef).then((url) => {
        //                     this.$store.state.banners.bgBanners.url = url
        //                     this.uploadBannersBgData()
        //                 })
        //             })
        //         } catch (e) { console.log(e) }
        //     } else {
        //         this.uploadBannersBgData()
        //     }
        // },
        // async uploadBannersBgData() {
        //     try {
        //         await setDoc(doc(db, 'banners', 'bg'), {
        //             radioValue: this.$store.state.banners.bgBanners.radioValue,
        //             url: this.$store.state.banners.bgBanners.url,
        //             color: this.$store.state.banners.bgBanners.color
        //         })
        //     } catch (e) { console.log(e) }
        //     this.$store.state.banners.bgBanners.loader = false
        //     console.log('Bg data loaded')
        // },
        // async getBannersBg() {
        //     this.$store.state.banners.bgBanners.loader = true
        //     this.$store.state.banners.bgBanners.radioValue = ''
        //     this.$store.state.banners.bgBanners.url = ''
        //     this.$store.state.banners.bgBanners.color = ''
        //     const docRef = doc(db, "banners", "bg")
        //     const docSnap = await getDoc(docRef)
        //     if (docSnap.exists()) {
        //         this.$store.state.banners.bgBanners.radioValue = docSnap.data().radioValue;
        //         this.$store.state.banners.bgBanners.url = docSnap.data().url;
        //         this.$store.state.banners.bgBanners.color = docSnap.data().color;
        //     }
        //     this.$store.state.banners.bgBanners.loader = false
        // },
        // News
        // async bannersNewsSelect(input) {
        //     let bannersNews = input.target.files
        //     for (let i = 0; i < bannersNews.length; i++) {
        //         await new Promise(resolve => setTimeout(resolve, 1))
        //         this.$store.state.banners.newsBanners.data.push({
        //             id: this.$store.state.banners.newsBanners.data.length,
        //             name: 'news-' + Date.now(),
        //             url: '',
        //             imgUrl: null,
        //         })

        //         this.$store.state.banners.newsBanners.banners.push({
        //             id: this.$store.state.banners.newsBanners.banners.length,
        //             uploaded: false,
        //             image: bannersNews[i],
        //             imgUrl: URL.createObjectURL(bannersNews[i]),
        //         })
        //     }
        // },
        // async uploadBannersNews() {
        //     this.$store.state.banners.newsBanners.loader = true
        //     if (this.$store.state.banners.newsBanners.deletedBanners.length !== 0) {
        //         for (let i = 0; i < this.$store.state.banners.newsBanners.deletedBanners.length; i++) {
        //             const delRef = ref(storage, "banners/news/" + this.$store.state.banners.newsBanners.deletedBanners[i]);
        //             await deleteObject(delRef).then(() => {
        //                 this.$store.state.banners.newsBanners.deletedBanners.splice(i, 1);
        //             }).catch((e) => {
        //                 console.log(e);
        //             });
        //         }
        //         this.uploadBannersNewsData()
        //     }

        //     for (let i = 0; i < this.$store.state.banners.newsBanners.banners.length; i++) {
        //         if (this.$store.state.banners.newsBanners.banners[i].image !== null) {
        //             try {
        //                 const bannersRef = ref(storage, "banners/news/" + this.$store.state.banners.newsBanners.data[i].name)
        //                 uploadBytes(bannersRef, this.$store.state.banners.newsBanners.banners[i].image).then(async () => {
        //                     await getDownloadURL(bannersRef).then((url) => {
        //                         this.$store.state.banners.newsBanners.data[i].imgUrl = url
        //                         this.uploadBannersNewsData()
        //                     })
        //                 })
        //             } catch (e) { console.log(e) }
        //         } else { this.uploadBannersNewsData() }
        //     }
        // },
        // async uploadBannersNewsData() {
        //     await setDoc(doc(db, 'banners', 'news'), {
        //         data: this.$store.state.banners.newsBanners.data,
        //         rotationSpeed: this.$store.state.banners.newsBanners.rotationSpeed,
        //         toggle: this.$store.state.banners.newsBanners.toggle
        //     })
        //     this.$store.state.banners.newsBanners.loader = false
        //     console.log('News data loaded')
        // },
        // async getBannersNews() {
        //     this.$store.state.banners.newsBanners.loader = true
        //     this.$store.state.banners.newsBanners.data = []
        //     this.$store.state.banners.newsBanners.banners = []
        //     const docRef = doc(db, 'banners', 'news')
        //     const docSnap = await getDoc(docRef)
        //     if (docSnap.exists()) {
        //         this.$store.state.banners.newsBanners.toggle = docSnap.data().toggle
        //         this.$store.state.banners.newsBanners.rotationSpeed = docSnap.data().rotationSpeed
        //         this.$store.state.banners.newsBanners.data = docSnap.data().data
        //         for (let i = 0; i < this.$store.state.banners.newsBanners.data.length; i++) {
        //             this.$store.state.banners.newsBanners.banners.push({
        //                 id: i,
        //                 uploaded: true,
        //                 image: null,
        //                 imgUrl: this.$store.state.banners.newsBanners.data[i].imgUrl
        //             })
        //         }
        //     }
        //     this.$store.state.banners.newsBanners.loader = false
        // },

    }
}

</script>

<style lang="scss" scoped>
.card-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.card-footer {
    display: flex;
    gap: 20px;
}

.card-body {
    width: 100%;
    gap: 20px;
}

.film_lang {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.square {
    width: 100px;
    height: 100px;
}

.banner_input {
    display: none;
}

.film_banner {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
}

.film_image_body {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.film_image {
    width: 240px;
    max-height: 240px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>