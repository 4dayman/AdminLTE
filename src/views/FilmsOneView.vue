<template>
    <content-header title="Страница фильма" icon="fas fa-info-circle" />
    <content>
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Страница фильма</h3>
                    </div>
                    <div class="film_lang pr-4">
                        <div class="custom-control custom-radio">
                            <input class="custom-control-input" type="radio" id="ua" value="0" name="lang" v-model="this.$store.state.films.currentList[this.$route.params.id].lang">
                            <label for="ua" class="custom-control-label">UA</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input class="custom-control-input" type="radio" id="eng" value="1" name="lang" v-model="this.$store.state.films.currentList[this.$route.params.id].lang">
                            <label for="eng" class="custom-control-label">ENG</label>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="film_name">
                            <div class="input-group mb-3">
                                <p>Название фильма:</p>
                                <input class="form-control ml-1" type="text" placeholder="Название фильма"
                                    v-model="this.$store.state.films.currentList[this.$route.params.id].data[this.$store.state.films.currentList[this.$route.params.id].lang].title">
                                </div>
                                <!-- <p v-if="!this.$store.state.films.currentList[this.$route.params.id].data[this.$store.state.films.currentList[this.$route.params.id].lang].title">nothing ther</p> -->
                        </div>
                        <div class="film_desc">
                            <div class="input-group mb-3">
                                <p>Описание:</p>
                                <textarea class="form-control ml-1" type="text" placeholder="Text"
                                    v-model="this.$store.state.films.currentList[this.$route.params.id].data[this.$store.state.films.currentList[this.$route.params.id].lang].desc"></textarea>
                            </div>
                        </div>
                        <div class="film_banner mb-3">
                            <p>Главная картинка:</p>
                            <div class="film_image_body ml-2">
                                <div class="film_image"
                                    v-if="this.$store.state.films.currentList[this.$route.params.id].images[this.$store.state.films.currentList[this.$route.params.id].lang].cover.url">
                                    <img
                                        :src="this.$store.state.films.currentList[this.$route.params.id].images[this.$store.state.films.currentList[this.$route.params.id].lang].cover.url">
                                </div>
                                <label class="banners_add">
                                    <button class="btn btn-primary square" @click="this.$refs.coverSelect.click()"><i
                                            class="fas fa-plus"></i>
                                        Добавить фото</button>
                                    <input class="banner_input" ref="coverSelect" type="file" accept="image/*"
                                        @change="coverSelect($event)">
                                </label>
                                <button class="btn btn-primary square"
                                    @click="this.$store.state.films.currentList[this.$route.params.id].data[this.$store.state.films.currentList[this.$route.params.id].lang].cover.url = this.$store.state.films.currentList[this.$route.params.id].images[this.$store.state.films.currentList[this.$route.params.id].lang].cover.url = ''"><i
                                        class="fas fa-minus"></i>
                                    Удалить фото</button>
                            </div>
                        </div>
                        <div class="film_galery film_banner mb-3">
                            <p>Галерея картинок:</p>
                            <div class="film_image_body ml-2">
                                <div class="film_image" 
                                    v-for="(image, i) in this.$store.state.films.currentList[this.$route.params.id].images[this.$store.state.films.currentList[this.$route.params.id].lang].gallery" 
                                    :key="i" >
                                    <span class="badge bg-danger poa" @click="delGalleryImg(i)" >X</span>
                                    <img :src="image.url">
                                </div>
                                <label class="banners_add">
                                    <button class="btn btn-primary square" @click="this.$refs.filmsSelect.click()"><i
                                            class="fas fa-plus"></i>
                                        Добавить фото</button>
                                    <input class="banner_input" ref="filmsSelect" type="file" multiple="multiple" accept="image/*"
                                        @change="filmsSelect($event)">
                                </label>
                            </div>
                        </div>
                        <div class="film_url">
                            <div class="input-group mb-3">
                                <p>Ссылка на трейлер:</p>
                                <input class="form-control ml-1" type="text" placeholder="Ссылка на видео в youtube"
                                    v-model="this.$store.state.films.currentList[this.$route.params.id].data[this.$store.state.films.currentList[this.$route.params.id].lang].trailer"
                                >
                            </div>
                        </div>
                        <div class="film_type">
                            <div class="input-group mb-3">
                                <p>Тип кино:</p>
                                <div class="form-check ml-2">
                                    <input class="form-check-input" type="checkbox" id="3d" value="3d" v-model="this.$store.state.films.currentList[this.$route.params.id].data[this.$store.state.films.currentList[this.$route.params.id].lang].type">
                                    <label class="form-check-label" for="3d">3D</label>
                                </div>
                                <div class="form-check ml-2">
                                    <input class="form-check-input" type="checkbox" id="2d" value="2d" v-model="this.$store.state.films.currentList[this.$route.params.id].data[this.$store.state.films.currentList[this.$route.params.id].lang].type">
                                    <label class="form-check-label" for="2d">2D</label>
                                </div>
                                <div class="form-check ml-2">
                                    <input class="form-check-input" type="checkbox" id="imax" value="imax" v-model="this.$store.state.films.currentList[this.$route.params.id].data[this.$store.state.films.currentList[this.$route.params.id].lang].type">
                                    <label class="form-check-label" for="imax">iMAX</label>
                                </div>
                            </div>
                        </div>
                        <div class="film_seo">
                            <p>SEO блок:</p>
                            <div class="input-group mb-3">
                                <p>URL:</p>
                                <input class="form-control ml-1" type="text" placeholder="URL" v-model="this.$store.state.films.currentList[this.$route.params.id].data[this.$store.state.films.currentList[this.$route.params.id].lang].seo.url">
                            </div>
                            <div class="input-group mb-3">
                                <p>Title:</p>
                                <input class="form-control ml-1" type="text" placeholder="Title" v-model="this.$store.state.films.currentList[this.$route.params.id].data[this.$store.state.films.currentList[this.$route.params.id].lang].seo.title">
                            </div>
                            <div class="input-group mb-3">
                                <p>Keywords:</p>
                                <input class="form-control ml-1" type="text" placeholder="Keywords" v-model="this.$store.state.films.currentList[this.$route.params.id].data[this.$store.state.films.currentList[this.$route.params.id].lang].seo.keywords">
                            </div>
                            <div class="input-group mb-3">
                                <p>Description:</p>
                                <textarea class="form-control ml-1" type="text" placeholder="Description" v-model="this.$store.state.films.currentList[this.$route.params.id].data[this.$store.state.films.currentList[this.$route.params.id].lang].seo.desc"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="custom-control custom-switch custom-switch-lg ">
                            <input type="checkbox" class="custom-control-input" id="mainBannersSwitch"
                                v-model="this.$store.state.films.currentList[this.$route.params.id].toggle">
                            <label class="custom-control-label" for="mainBannersSwitch"
                                v-if="!this.$store.state.films.currentList[this.$route.params.id].toggle">
                                now
                            </label>
                            <label class="custom-control-label" for="mainBannersSwitch"
                                v-if="this.$store.state.films.currentList[this.$route.params.id].toggle">
                                upcom
                            </label>
                        </div>

                        <button class="btn btn-primary float-right"
                            @click="uploadFilm(this.$route.params.id)">Сохранить</button>
                        <button class="btn btn-primary float-right" @click="resetFilm(this.$route.params.id)">Вернуть базовую версию</button>
                    </div>
                    <loader v-if="this.$store.state.films.loader"></loader>
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
import { useVuelidate } from '@vuelidate/core'
import { minLength, required, email, numeric, alpha } from '@vuelidate/validators'
export default {
    components: {
        Loader,
    },
    setup() {
        return { v$: useVuelidate() }
    },
    validations() { 
        return {
            title:  { required },

        }
    },
    created() {
        // const film = this.film.find(film => film.id == this.$route.params.id)
        // if (film) {
        //     this.film = film
        // }
        // this.$route.params.id = this.$route.params.id
        // this.$watch(() => this.$store.state.films.currentList[this.$route.params.id].lang, () => {
        //    this.$store.state.films.currentList[this.$route.params.id].lang
        // })
        //     this.getBanners()
        //     this.getBannersNews()
        //     this.getBannersBg()
    },
    data() {
        return {
            file: null,
            files: null,
            // id: null,
        }
    },
    computed: {
        title: {
            get() {
                return this.$store.state.films.currentList[this.$route.params.id].data[this.$store.state.films.currentList[this.$route.params.id].lang].title 
            },
            set(title) {
                this.v$.title.touch();
                this.$store.dispatch("updateTitle", title);
            }
        }, 
    },
    watch: {
    },
    methods: {
        // async addFilm() {
        //     for (let i = 0; i < this.$store.state.films.currentList.length; i++) {
        //         await new Promise(resolve => setTimeout(resolve, 1))
        //         this.$store.state.films.currentList[i].data.push({
        //             id: this.$store.state.films.currentList.length,
        //             name: 'cover-' + Date.now(),
        //             title: '',
        //             imgUrl: null,
        //         })

        //         this.$store.state.films.currentList[i].push({
        //             id: this.$store.state.films.currentList.length,
        //             uploaded: false,
        //             image: this.file,
        //             imgUrl: URL.createObjectURL(this.file),
        //         })

        //     }
        //  },
        coverSelect(input) {
            // let file = input.target.files[0]
            // this.$store.state.banners.bgBanners.image = bannersBg
            // this.$store.state.banners.bgBanners.url = URL.createObjectURL(bannersBg)
            let lang = this.$store.state.films.currentList[this.$route.params.id].lang
            // let id = this.$route.params.id
            let file = input.target.files[0]
            this.$store.state.films.currentList[this.$route.params.id].images[lang].cover.image = file
            this.$store.state.films.currentList[this.$route.params.id].images[lang].cover.url = URL.createObjectURL(file)
            if (lang === 0) {
                this.$store.state.films.currentList[this.$route.params.id].data[lang].cover.name = this.$store.state.films.currentList[this.$route.params.id].images[lang].cover.name = this.$store.state.films.currentList[this.$route.params.id].name + '-ua'

            } else {
                this.$store.state.films.currentList[this.$route.params.id].data[lang].cover.name = this.$store.state.films.currentList[this.$route.params.id].images[lang].cover.name = this.$store.state.films.currentList[this.$route.params.id].name + '-eng'
            }
        },
        async filmsSelect(input) { 
            let lang = this.$store.state.films.currentList[this.$route.params.id].lang
            // let id = this.$route.params.id
            let files = input.target.files
            for (let i = 0; i < files.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 1))
                if (lang === 0) { 
                    this.$store.state.films.currentList[this.$route.params.id].data[lang].gallery.push({
                        id: this.$store.state.films.currentList[this.$route.params.id].images[lang].gallery.length,
                        name: 'Gallery-' + Date.now() + '-ua',
                        url: null
                    })
                } else {
                    this.$store.state.films.currentList[this.$route.params.id].data[lang].gallery.push({
                        id: this.$store.state.films.currentList[this.$route.params.id].images[lang].gallery.length,
                        name: 'Gallery-' + Date.now() + '-eng',
                        url: null
                    })
                }
                this.$store.state.films.currentList[this.$route.params.id].images[lang].gallery.push({
                    id: this.$store.state.films.currentList[this.$route.params.id].images[lang].gallery.length,
                    name: this.$store.state.films.currentList[this.$route.params.id].data[lang].gallery[i].name,
                    uploaded: false,
                    image: files[i],
                    url: URL.createObjectURL(files[i])
                })
            }
        },
        delGalleryImg(i) {
            let lang = this.$store.state.films.currentList[this.$route.params.id].lang
            // let id = this.$route.params.id

            if (this.$store.state.films.currentList[this.$route.params.id].images[lang].gallery[i].uploaded) {
                this.$store.state.films.currentList[this.$route.params.id].images[lang].deleted.push(this.$store.state.films.currentList[this.$route.params.id].images[lang].gallery[i].name)
            }
            this.$store.state.films.currentList[this.$route.params.id].data[lang].gallery.splice(i, 1)
            this.$store.state.films.currentList[this.$route.params.id].images[lang].gallery.splice(i, 1)
            for (let j = 0; j < this.$store.state.films.currentList[this.$route.params.id].images[lang].gallery.length; j++) {
                if (this.$store.state.films.currentList[this.$route.params.id].images[lang].gallery[j].id !== j) {
                    this.$store.state.films.currentList[this.$route.params.id].data[lang].gallery[j].id = this.$store.state.films.currentList[this.$route.params.id].images[lang].gallery[j].id = j
                }
            }
        },
        async uploadFilm(id) {
            if (!this.v$.title.$error) {
                this.$store.state.films.loader = true
                this.$store.state.films.currentList[id].uploaded = false;
                for (let i = 0; i < this.$store.state.films.currentList[id].images.length; i++) {
                    // upload cover image (update if was changed)
                    if (this.$store.state.films.currentList[id].images[i].cover.image !== null) {
                        try {
                            const coverRef = ref(storage, "films/cover/" + this.$store.state.films.currentList[id].images[i].cover.name);
                            await uploadBytes(coverRef, this.$store.state.films.currentList[id].images[i].cover.image).then(async () => {
                                await getDownloadURL(coverRef).then((url) => {
                                    this.$store.state.films.currentList[id].data[i].cover.url = url;
                                    this.uploadFilmData(id)
                                });
                            });
                        } catch (e) {
                            console.log(e);
                        }
                    } else { this.uploadFilmData(id) }
                    // delete images from gallery
                    if (this.$store.state.films.currentList[id].images[i].deleted.length !== 0) {
                        for (let j = 0; j < this.$store.state.films.currentList[id].images[i].deleted.length; j++) {
                            const delRef = ref(storage, "films/gallery/" + this.$store.state.films.currentList[id].images[i].deleted[j]);
                            await deleteObject(delRef).then(() => {
                                this.$store.state.films.currentList[id].images[i].deleted.splice(j, 1);
                            }).catch((e) => {
                                console.log(e);
                            });
                        }
                        // this.uploadFilmData(id)
                    }
                    this.uploadFilmData(id)
                    // upload gallery
                    if (this.$store.state.films.currentList[id].images[i].gallery.length) {
                        for (let j = 0; j < this.$store.state.films.currentList[id].images[i].gallery.length; j++) {
                            if (this.$store.state.films.currentList[id].images[i].gallery[j].image !== null) {
                                try {
                                    const galleryRef = ref(storage, "films/gallery/" + this.$store.state.films.currentList[id].images[i].gallery[j].name);
                                    await uploadBytes(galleryRef, this.$store.state.films.currentList[id].images[i].gallery[j].image).then(async () => {
                                        await getDownloadURL(galleryRef).then((url) => {
                                            this.$store.state.films.currentList[id].data[i].gallery[j].url = url;
                                            // this.$store.state.films.currentList[id].images[i].gallery[j].uploaded = true
                                            this.uploadFilmData(id)
                                        });
                                    });
                                } catch (e) {
                                    console.log(e);
                                }
                            } else { this.uploadFilmData(id) }
                        }
                        this.uploadFilmData(id)
                    } else { this.uploadFilmData(id) }
                }
                this.$store.state.films.currentList[id].uploaded = false;
                this.$store.state.films.loader = false
                this.$router.push({
                    name: 'films',
                })
                // const filmRef = ref(storage, "films/cover/c1")
                // const docRef = filmRef.child('films/cover/c1')
                // docRef.put(this.file).on("state_change", (snapshot) => {
                //     console.log(snapshot)
                // }, (err) => {
                //     console.log(err)
                // }, async () => {
                //     const downloadURL = await docRef.getDownloadURL()
                //     const timestamp = await Date.now()
                //     const database = await db.collection(films).doc()

                //     await database.set({
                //         filmID: database.id,
                //         filmCover: downloadURL,
                //         filmTitle: this.filmTitle
                //     })
                // }
                // )
                // for (let i = 0; i < this.$store.state.films.currentList.length; i++) {
                //     if (this.$store.state.films.currentList.data.imgUrl !== null) {
                //         try {
                //             const filmRef = ref(storage, "films/cover/" + this.$store.state.films.currentList.data.name)
                //             await uploadBytes(filmRef, this.file).then(async () => {
                //                 await getDownloadURL(filmRef).then((url) => {
                //                     this.$store.state.films.currentList.data.imgUrl = url
                //                     this.uploadFilmData()
                //                 })
                //             })
                //         } catch (e) { console.log(e) }
                //     } else {
                //         this.uploadFilmData()
                //     }
                // }
            }
        },
        async uploadFilmData(id) {
            const docData = {
                lang: this.$store.state.films.currentList[id].lang,
                toggle: this.$store.state.films.currentList[id].toggle,
                data: this.$store.state.films.currentList[id].data,
            }
            await setDoc(doc(db, "films", this.$store.state.films.currentList[id].name), docData).then(() => {
                this.$store.state.films.currentList[id].uploaded = true;
            });
            //     try {
            //         await setDoc(doc(db, 'films', 'bg'), {
            //             id: Date.now(),
            //             url: this.$store.state.films.currentList.data.imgUrl,
            //             title: this.$store.state.films.currentList.data.title
            //         })
            //     } catch (e) { console.log(e) }
            //     console.log('Bg data loaded')
            // },
            // async getFilms() {
            //     this.$store.state.films.currentList.data.imgUrl = ''
            //     this.$store.state.films.currentList.data.title = ''
            //     const docRef = doc(db, "films", "bg")
            //     const docSnap = await getDoc(docRef)
            //     if (docSnap.exists()) {
            //         this.$store.state.films.currentList.data.imgUrl = docSnap.data().url;
            //         this.$store.state.films.currentList.data.title = docSnap.data().title;
            //     }
        },
        async resetFilm(id) {
            this.$store.state.films.loader = true
            if (this.$store.state.films.currentList[id].uploaded) {
                for (let i = 0; i < this.$store.state.films.currentList[id].images.length; i++) {
                    this.$store.state.films.currentList[id].images[i].cover.name = null;
                    this.$store.state.films.currentList[id].images[i].cover.image = null;
                    this.$store.state.films.currentList[id].images[i].cover.url = null;
                    this.$store.state.films.currentList[id].images[i].gallery = [];
                    this.$store.state.films.currentList[id].images[i].deleted = [];
                }
                const docRef = doc(db, "films", this.$store.state.films.currentList[id].name);
                // resets film data
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    this.$store.state.films.currentList[id].data = docSnap.data().data;
                    for (let i = 0; i < this.$store.state.films.currentList[id].data.length; i++) {
                        // resets film cover 
                        this.$store.state.films.currentList[id].images[i].cover.name = this.$store.state.films.currentList[id].data[i].cover.name;
                        this.$store.state.films.currentList[id].images[i].cover.url = this.$store.state.films.currentList[id].data[i].cover.url;
                        for (let j = 0; j < this.$store.state.films.currentList[id].data[i].gallery.length; j++) {
                            this.$store.state.films.currentList[id].images[i].gallery.push({
                                id: j,
                                name: this.$store.state.films.currentList[id].data[i].gallery[j].name,
                                uploaded: true,
                                image: null,
                                url: this.$store.state.films.currentList[id].data[i].gallery[j].url
                            });
                        }
                    }
                }
            }
            this.$store.state.films.loader = false
        },
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
    position: relative;
    width: 240px;
    max-height: 240px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.poa {
    cursor: pointer;
    position: absolute;
    right: -10px;
    top: -10px;
}

</style>