<template>
    <content-header title="Карточка кинотеатра" icon="fas fa-info-circle" />
    <content>
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Страница кинотеатра</h3>
                    </div>
                    <div class="film_lang pr-4 mt-2">
                        <div class="custom-control custom-radio mr-2">
                            <input class="custom-control-input" type="radio" id="ua" value="0" name="lang"
                                @change="langChange"
                                v-model="this.$store.state.cinemas.cinemasList[this.$route.params.id].lang">
                            <label for="ua" class="custom-control-label">UA</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input class="custom-control-input" type="radio" id="eng" value="1" name="lang"
                                @change="langChange"
                                v-model="this.$store.state.cinemas.cinemasList[this.$route.params.id].lang">
                            <label for="eng" class="custom-control-label">ENG</label>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="film_name">
                            <div class="input-group mt-3">
                                <p>Название кинотеатра:</p>
                                <input class="form-control ml-1" type="text" placeholder="Название кинотеатра"
                                    v-model.trim="this.$store.state.cinemas.cinemasList[this.$route.params.id].data[this.$store.state.cinemas.cinemasList[this.$route.params.id].lang].title"
                                    :class="(v$.titleUA.$error || v$.titleENG.$error) ? 'invalid' : ''"
                                    @change="titleChenge">
                            </div>
                            <div class="row">
                                <div class="select_error mr-2" v-if="v$.titleUA.$error"> UA title
                                    {{ v$.titleUA.$errors[0].$message }}!</div>
                                <div class="select_error" v-if="v$.titleENG.$error"> ENG title {{
                                    v$.titleENG.$errors[0].$message }}!</div>
                            </div>
                        </div>
                        <div class="film_desc">
                            <div class="input-group mt-3">
                                <p>Описание:</p>
                                <textarea class="form-control ml-1" type="text" placeholder="Text"
                                    :class="(v$.descUA.$error || v$.descENG.$error) ? 'invalid' : ''" @change="descChenge"
                                    v-model="this.$store.state.cinemas.cinemasList[this.$route.params.id].data[this.$store.state.cinemas.cinemasList[this.$route.params.id].lang].desc"></textarea>
                            </div>
                            <div class="row">
                                <div class="select_error mr-2" v-if="v$.descUA.$error"> UA desc
                                    {{ v$.descUA.$errors[0].$message }}!</div>
                                <div class="select_error" v-if="v$.descENG.$error"> ENG desc {{
                                    v$.descENG.$errors[0].$message }}!</div>
                            </div>
                        </div>
                        <div class="film_desc">
                            <div class="input-group mt-3">
                                <p>Условия:</p>
                                <textarea class="form-control ml-1" type="text" placeholder="Text"
                                    :class="(v$.termsUA.$error || v$.termsENG.$error) ? 'invalid' : ''" @change="termsChenge"
                                    v-model="this.$store.state.cinemas.cinemasList[this.$route.params.id].data[this.$store.state.cinemas.cinemasList[this.$route.params.id].lang].terms"></textarea>
                            </div>
                            <div class="row">
                                <div class="select_error mr-2" v-if="v$.termsUA.$error"> UA terms {{ v$.termsUA.$errors[0].$message }}!</div>
                                <div class="select_error" v-if="v$.termsENG.$error"> ENG terms {{v$.termsENG.$errors[0].$message }}!</div>
                            </div>
                        </div>
                        <div class="film_banner mt-3">
                            <p>Логотип:</p>
                            <div class="film_image_body ml-2">
                                <div class="film_image"
                                    v-if="this.$store.state.cinemas.cinemasList[this.$route.params.id].images[this.$store.state.cinemas.cinemasList[this.$route.params.id].lang].logo.url">
                                    <img
                                        :src="this.$store.state.cinemas.cinemasList[this.$route.params.id].images[this.$store.state.cinemas.cinemasList[this.$route.params.id].lang].logo.url">
                                </div>
                                <label class="banners_add">
                                    <button :class="(v$.logoUA.$error || v$.logoENG.$error) ? 'invalid' : ''"
                                        class="btn btn-primary square" @click="this.$refs.logoSelect.click()"><i
                                            class="fas fa-plus"></i>
                                        Добавить фото</button>
                                    <input class="banner_input" ref="logoSelect" type="file" accept="image/*"
                                        @change="logoSelect($event)">
                                </label>
                                <div class="col">
                                    <div class="select_error" v-if="v$.logoUA.$error"> UA logo url {{
                                        v$.logoUA.$errors[0].$message }}!</div>
                                    <div class="select_error" v-if="v$.logoENG.$error"> ENG logo url
                                        {{ v$.logoENG.$errors[0].$message }}!</div>
                                </div>
                                <button class="btn btn-primary square"
                                    @click="this.$store.state.cinemas.cinemasList[this.$route.params.id].data[this.$store.state.cinemas.cinemasList[this.$route.params.id].lang].logo.url = this.$store.state.cinemas.cinemasList[this.$route.params.id].images[this.$store.state.cinemas.cinemasList[this.$route.params.id].lang].logo.url = ''"><i
                                        class="fas fa-minus"></i>
                                    Удалить фото</button>
                            </div>
                        </div>
                        <div class="film_banner mt-3">
                            <p>Фото верхнего баннера:</p>
                            <div class="film_image_body ml-2">
                                <div class="film_image"
                                    v-if="this.$store.state.cinemas.cinemasList[this.$route.params.id].images[this.$store.state.cinemas.cinemasList[this.$route.params.id].lang].cover.url">
                                    <img
                                        :src="this.$store.state.cinemas.cinemasList[this.$route.params.id].images[this.$store.state.cinemas.cinemasList[this.$route.params.id].lang].cover.url">
                                </div>
                                <label class="banners_add">
                                    <button :class="(v$.coverUA.$error || v$.coverENG.$error) ? 'invalid' : ''"
                                        class="btn btn-primary square" @click="this.$refs.coverSelect.click()"><i
                                            class="fas fa-plus"></i>
                                        Добавить фото</button>
                                    <input class="banner_input" ref="coverSelect" type="file" accept="image/*"
                                        @change="coverSelect($event)">
                                </label>
                                <div class="col">
                                    <div class="select_error" v-if="v$.coverUA.$error"> UA cover url {{
                                        v$.coverUA.$errors[0].$message }}!</div>
                                    <div class="select_error" v-if="v$.coverENG.$error"> ENG cover url
                                        {{ v$.coverENG.$errors[0].$message }}!</div>
                                </div>
                                <button class="btn btn-primary square"
                                    @click="this.$store.state.cinemas.cinemasList[this.$route.params.id].data[this.$store.state.cinemas.cinemasList[this.$route.params.id].lang].cover.url = this.$store.state.cinemas.cinemasList[this.$route.params.id].images[this.$store.state.cinemas.cinemasList[this.$route.params.id].lang].cover.url = ''"><i
                                        class="fas fa-minus"></i>
                                    Удалить фото</button>
                            </div>
                        </div>
                        <div class="film_galery film_banner mt-3">
                            <p>Галерея картинок:</p>
                            <div class="film_image_body ml-2">
                                <div class="film_image"
                                    v-for="(image, i) in this.$store.state.cinemas.cinemasList[this.$route.params.id].images[this.$store.state.cinemas.cinemasList[this.$route.params.id].lang].gallery"
                                    :key="i">
                                    <span class="badge bg-danger poa" @click="delGalleryImg(i)">X</span>
                                    <img :src="image.url">
                                </div>
                                <label class="banners_add">
                                    <button class="btn btn-primary square" @click="this.$refs.cinemasSelect.click()"><i
                                            class="fas fa-plus"></i>
                                        Добавить фото</button>
                                    <input class="banner_input" ref="cinemasSelect" type="file" multiple="multiple"
                                        accept="image/*" @change="cinemasSelect($event)">
                                </label>
                            </div>
                        </div>
                        <div class="film_seo mt-3">
                            <p>Список залов</p>
                            <HallList/>
                            <button class="btn btn-primary" @click="addHall(this.$route.params.id)"><i class="fas fa-plus"></i>
                                    Создать зал</button>
                        </div>
                        <div class="film_seo mt-3">
                            <p>SEO блок:</p>
                            <div class="input-group mt-3">
                                <p>URL:</p>
                                <input class="form-control ml-1" type="text" placeholder="URL"
                                    v-model="this.$store.state.cinemas.cinemasList[this.$route.params.id].data[this.$store.state.cinemas.cinemasList[this.$route.params.id].lang].seo.url">
                            </div>
                            <div class="input-group mt-3">
                                <p>Title:</p>
                                <input class="form-control ml-1" type="text" placeholder="Title"
                                    v-model="this.$store.state.cinemas.cinemasList[this.$route.params.id].data[this.$store.state.cinemas.cinemasList[this.$route.params.id].lang].seo.title">
                            </div>
                            <div class="input-group mt-3">
                                <p>Keywords:</p>
                                <input class="form-control ml-1" type="text" placeholder="Keywords"
                                    v-model="this.$store.state.cinemas.cinemasList[this.$route.params.id].data[this.$store.state.cinemas.cinemasList[this.$route.params.id].lang].seo.keywords">
                            </div>
                            <div class="input-group mt-3">
                                <p>Description:</p>
                                <textarea class="form-control ml-1" type="text" placeholder="Description"
                                    v-model="this.$store.state.cinemas.cinemasList[this.$route.params.id].data[this.$store.state.cinemas.cinemasList[this.$route.params.id].lang].seo.desc"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">

                        <button class="btn btn-primary float-right"
                            @click="uploadCinema(this.$route.params.id)">Сохранить</button>
                    </div>
                    <loader v-if="this.$store.state.cinemas.loader"></loader>
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
import HallList from '../components/HallList.vue'
import { useVuelidate } from '@vuelidate/core'
import { minLength, required, email, numeric, alpha } from '@vuelidate/validators'
const props = defineProps(['id']);
export default {
    components: {
        Loader,
        HallList,
    },
    setup() {
        return { v$: useVuelidate() }
    },
    validations() {
        return {
            titleUA: { required },
            titleENG: { required },
            coverUA: { required },
            coverENG: { required },
            logoUA: { required },
            logoENG: { required },
            descUA: { required },
            descENG: { required },
            termsUA: { required },
            termsENG: { required },
        }
    },
    created() {
        this.titleUA = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[0].title
        this.titleENG = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[1].title
        this.descUA = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[0].desc
        this.descENG = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[1].desc
        this.termsUA = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[0].terms
        this.termsENG = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[1].terms
        this.coverUA = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[0].cover.url
        this.coverENG = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[1].cover.url
        this.logoUA = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[0].logo.url
        this.logoENG = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[1].logo.url
    },
    data() {
        return {
            file: null,
            logo: null,
            files: null,
            titleUA: '',
            titleENG: '',
            coverUA: '',
            coverENG: '',
            logoUA: '',
            logoENG: '',
            descUA: '',
            descENG: '',
            termsUA: '',
            termsENG: '',
        }
    },
    computed: {
    },
    watch: {
    },
    methods: {
        langChange() {
            this.titleUA = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[0].title
            this.titleENG = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[1].title
            this.descUA = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[0].desc
            this.descENG = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[1].desc
            this.termsUA = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[0].terms
            this.termsENG = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[1].terms
        },
        titleChenge() {
            this.titleUA = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[0].title
            this.titleENG = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[1].title
        },
        descChenge() {
            this.descUA = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[0].desc
            this.descENG = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[1].desc
        },
        termsChenge() {
            this.termsUA = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[0].terms
            this.termsENG = this.$store.state.cinemas.cinemasList[this.$route.params.id].data[1].terms
        },

        logoSelect(input) {
            let lang = this.$store.state.cinemas.cinemasList[this.$route.params.id].lang
            let logo = input.target.files[0]
            this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].logo.image = logo
            this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].logo.url = URL.createObjectURL(logo)
            this.logoUA = this.$store.state.cinemas.cinemasList[this.$route.params.id].images[0].logo.url
            this.logoENG = this.$store.state.cinemas.cinemasList[this.$route.params.id].images[1].logo.url
            if (lang === 0) {
                this.$store.state.cinemas.cinemasList[this.$route.params.id].data[lang].logo.name = this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].logo.name = this.$store.state.cinemas.cinemasList[this.$route.params.id].name + '-logo-ua'

            } else {
                this.$store.state.cinemas.cinemasList[this.$route.params.id].data[lang].logo.name = this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].logo.name = this.$store.state.cinemas.cinemasList[this.$route.params.id].name + '-logo-eng'

            }
        },
        coverSelect(input) {
            let lang = this.$store.state.cinemas.cinemasList[this.$route.params.id].lang
            let file = input.target.files[0]
            this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].cover.image = file
            this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].cover.url = URL.createObjectURL(file)
            this.coverUA = this.$store.state.cinemas.cinemasList[this.$route.params.id].images[0].cover.url
            this.coverENG = this.$store.state.cinemas.cinemasList[this.$route.params.id].images[1].cover.url
            if (lang === 0) {
                this.$store.state.cinemas.cinemasList[this.$route.params.id].data[lang].cover.name = this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].cover.name = this.$store.state.cinemas.cinemasList[this.$route.params.id].name + '-cover-ua'

            } else {
                this.$store.state.cinemas.cinemasList[this.$route.params.id].data[lang].cover.name = this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].cover.name = this.$store.state.cinemas.cinemasList[this.$route.params.id].name + '-cover-eng'

            }
        },
        async cinemasSelect(input) {
            let lang = this.$store.state.cinemas.cinemasList[this.$route.params.id].lang
            let files = input.target.files
            for (let i = 0; i < files.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 1))
                if (lang === 0) {
                    this.$store.state.cinemas.cinemasList[this.$route.params.id].data[lang].gallery.push({
                        id: this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].gallery.length,
                        name: 'Gallery-' + Date.now() + '-ua',
                        url: null
                    })
                } else {
                    this.$store.state.cinemas.cinemasList[this.$route.params.id].data[lang].gallery.push({
                        id: this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].gallery.length,
                        name: 'Gallery-' + Date.now() + '-eng',
                        url: null
                    })
                }
                this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].gallery.push({
                    id: this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].gallery.length,
                    name: this.$store.state.cinemas.cinemasList[this.$route.params.id].data[lang].gallery[i].name,
                    uploaded: false,
                    image: files[i],
                    url: URL.createObjectURL(files[i])
                })
            }
        },
        delGalleryImg(i) {
            let lang = this.$store.state.cinemas.cinemasList[this.$route.params.id].lang

            if (this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].gallery[i].uploaded) {
                this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].deleted.push(this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].gallery[i].name)
            }
            this.$store.state.cinemas.cinemasList[this.$route.params.id].data[lang].gallery.splice(i, 1)
            this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].gallery.splice(i, 1)
            for (let j = 0; j < this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].gallery.length; j++) {
                if (this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].gallery[j].id !== j) {
                    this.$store.state.cinemas.cinemasList[this.$route.params.id].data[lang].gallery[j].id = this.$store.state.cinemas.cinemasList[this.$route.params.id].images[lang].gallery[j].id = j
                }
            }
        },
        async uploadCinema(id) {
            this.v$.$touch()
            this.v$.$validate()
            if (!this.v$.titleUA.$error && !this.v$.titleENG.$error &&
                !this.v$.coverUA.$error && !this.v$.coverENG.$error &&
                !this.v$.descUA.$error && !this.v$.descENG.$error) {
                this.$store.state.cinemas.loader = true
                this.$store.state.cinemas.cinemasList[id].uploaded = false;
                for (let i = 0; i < this.$store.state.cinemas.cinemasList[id].images.length; i++) {
                    // upload cover image (update if was changed)
                    if (this.$store.state.cinemas.cinemasList[id].images[i].logo.image !== null) {
                        try {
                            const logoRef = ref(storage, "cinemas/logo/" + this.$store.state.cinemas.cinemasList[id].images[i].logo.name);
                            await uploadBytes(logoRef, this.$store.state.cinemas.cinemasList[id].images[i].logo.image).then(async () => {
                                await getDownloadURL(logoRef).then((url) => {
                                    this.$store.state.cinemas.cinemasList[id].data[i].logo.url = url;
                                    this.uploadCinemaData(id)
                                });
                            });
                        } catch (e) {
                            console.log(e);
                        }
                    } else { this.uploadCinemaData(id) }
                    if (this.$store.state.cinemas.cinemasList[id].images[i].cover.image !== null) {
                        try {
                            const coverRef = ref(storage, "cinemas/cover/" + this.$store.state.cinemas.cinemasList[id].images[i].cover.name);
                            await uploadBytes(coverRef, this.$store.state.cinemas.cinemasList[id].images[i].cover.image).then(async () => {
                                await getDownloadURL(coverRef).then((url) => {
                                    this.$store.state.cinemas.cinemasList[id].data[i].cover.url = url;
                                    this.uploadCinemaData(id)
                                });
                            });
                        } catch (e) {
                            console.log(e);
                        }
                    } else { this.uploadCinemaData(id) }
                    // delete images from gallery
                    if (this.$store.state.cinemas.cinemasList[id].images[i].deleted.length !== 0) {
                        for (let j = 0; j < this.$store.state.cinemas.cinemasList[id].images[i].deleted.length; j++) {
                            const delRef = ref(storage, "cinemas/gallery/" + this.$store.state.cinemas.cinemasList[id].images[i].deleted[j]);
                            await deleteObject(delRef).then(() => {
                                this.$store.state.cinemas.cinemasList[id].images[i].deleted.splice(j, 1);
                            }).catch((e) => {
                                console.log(e);
                            });
                        }
                        // this.uploadCinemaData(id)
                    }
                    this.uploadCinemaData(id)
                    // upload gallery
                    if (this.$store.state.cinemas.cinemasList[id].images[i].gallery.length) {
                        for (let j = 0; j < this.$store.state.cinemas.cinemasList[id].images[i].gallery.length; j++) {
                            if (this.$store.state.cinemas.cinemasList[id].images[i].gallery[j].image !== null) {
                                try {
                                    const galleryRef = ref(storage, "cinemas/gallery/" + this.$store.state.cinemas.cinemasList[id].images[i].gallery[j].name);
                                    await uploadBytes(galleryRef, this.$store.state.cinemas.cinemasList[id].images[i].gallery[j].image).then(async () => {
                                        await getDownloadURL(galleryRef).then((url) => {
                                            this.$store.state.cinemas.cinemasList[id].data[i].gallery[j].url = url;
                                            // this.$store.state.cinemas.cinemasList[id].images[i].gallery[j].uploaded = true
                                            this.uploadCinemaData(id)
                                        });
                                    });
                                } catch (e) {
                                    console.log(e);
                                }
                            } else { this.uploadCinemaData(id) }
                        }
                        this.uploadCinemaData(id)
                    } else { this.uploadCinemaData(id) }
                }
                this.$store.state.cinemas.cinemasList[id].uploaded = false;
                this.$store.state.cinemas.loader = false
                this.$router.push({
                    name: 'cinemas',
                })
                // const filmRef = ref(storage, "cinemas/cover/c1")
                // const docRef = filmRef.child('cinemas/cover/c1')
                // docRef.put(this.file).on("state_change", (snapshot) => {
                //     console.log(snapshot)
                // }, (err) => {
                //     console.log(err)
                // }, async () => {
                //     const downloadURL = await docRef.getDownloadURL()
                //     const timestamp = await Date.now()
                //     const database = await db.collection(cinemas).doc()

                //     await database.set({
                //         filmID: database.id,
                //         filmCover: downloadURL,
                //         filmTitle: this.filmTitle
                //     })
                // }
                // )
                // for (let i = 0; i < this.$store.state.cinemas.cinemasList.length; i++) {
                //     if (this.$store.state.cinemas.cinemasList.data.imgUrl !== null) {
                //         try {
                //             const filmRef = ref(storage, "cinemas/cover/" + this.$store.state.cinemas.cinemasList.data.name)
                //             await uploadBytes(filmRef, this.file).then(async () => {
                //                 await getDownloadURL(filmRef).then((url) => {
                //                     this.$store.state.cinemas.cinemasList.data.imgUrl = url
                //                     this.uploadCinemaData()
                //                 })
                //             })
                //         } catch (e) { console.log(e) }
                //     } else {
                //         this.uploadCinemaData()
                //     }
                // }
            }
        },
        async uploadCinemaData(id) {
            const docData = {
                lang: this.$store.state.cinemas.cinemasList[id].lang,
                // toggle: this.$store.state.cinemas.cinemasList[id].toggle,
                data: this.$store.state.cinemas.cinemasList[id].data,
            }
            await setDoc(doc(db, "cinemas", this.$store.state.cinemas.cinemasList[id].name), docData).then(() => {
                // this.$store.state.cinemas.cinemasList[id].uploaded = true;
            });
            //     try {
            //         await setDoc(doc(db, 'cinemas', 'bg'), {
            //             id: Date.now(),
            //             url: this.$store.state.cinemas.cinemasList.data.imgUrl,
            //             title: this.$store.state.cinemas.cinemasList.data.title
            //         })
            //     } catch (e) { console.log(e) }
            //     console.log('Bg data loaded')
            // },
            // async getcinemas() {
            //     this.$store.state.cinemas.cinemasList.data.imgUrl = ''
            //     this.$store.state.cinemas.cinemasList.data.title = ''
            //     const docRef = doc(db, "cinemas", "bg")
            //     const docSnap = await getDoc(docRef)
            //     if (docSnap.exists()) {
            //         this.$store.state.cinemas.cinemasList.data.imgUrl = docSnap.data().url;
            //         this.$store.state.cinemas.cinemasList.data.title = docSnap.data().title;
            //     }
        },
        // async resetFilm(id) {
        //     this.$store.state.cinemas.loader = true
        //     if (this.$store.state.cinemas.cinemasList[id].uploaded) {
        //         for (let i = 0; i < this.$store.state.cinemas.cinemasList[id].images.length; i++) {
        //             this.$store.state.cinemas.cinemasList[id].images[i].cover.name = null;
        //             this.$store.state.cinemas.cinemasList[id].images[i].cover.image = null;
        //             this.$store.state.cinemas.cinemasList[id].images[i].cover.url = null;
        //             this.$store.state.cinemas.cinemasList[id].images[i].gallery = [];
        //             this.$store.state.cinemas.cinemasList[id].images[i].deleted = [];
        //         }
        //         const docRef = doc(db, "cinemas", this.$store.state.cinemas.cinemasList[id].name);
        //         // resets film data
        //         const docSnap = await getDoc(docRef);
        //         if (docSnap.exists()) {
        //             this.$store.state.cinemas.cinemasList[id].data = docSnap.data().data;
        //             for (let i = 0; i < this.$store.state.cinemas.cinemasList[id].data.length; i++) {
        //                 // resets film cover 
        //                 this.$store.state.cinemas.cinemasList[id].images[i].cover.name = this.$store.state.cinemas.cinemasList[id].data[i].cover.name;
        //                 this.$store.state.cinemas.cinemasList[id].images[i].cover.url = this.$store.state.cinemas.cinemasList[id].data[i].cover.url;
        //                 for (let j = 0; j < this.$store.state.cinemas.cinemasList[id].data[i].gallery.length; j++) {
        //                     this.$store.state.cinemas.cinemasList[id].images[i].gallery.push({
        //                         id: j,
        //                         name: this.$store.state.cinemas.cinemasList[id].data[i].gallery[j].name,
        //                         uploaded: true,
        //                         image: null,
        //                         url: this.$store.state.cinemas.cinemasList[id].data[i].gallery[j].url
        //                     });
        //                 }
        //             }
        //         }
        //     }
        //     this.$store.state.cinemas.loader = false
        // },
        addHall(id) { 
            this.$store.state.cinemas.cinemasList[id].halls.push({
                id: this.$store.state.cinemas.cinemasList[id].halls.length,
                name: 'Hall-' + Date.now(),
                creationDate: new Date().toISOString().split("T")[0],
                uploaded: false,
                data: [
                    {
                        title: '',
                        description: '',
                        scheme: {
                            name: null,
                            url: null
                        },
                        banner: {
                            name: null,
                            url: null
                        },
                        gallery: [],
                        seo: {
                            url: '',
                            title: '',
                            keywords: '',
                            description: ''
                        },
                    },
                    {
                        title: '',
                        description: '',
                        scheme: {
                            name: null,
                            url: null
                        },
                        banner: {
                            name: null,
                            url: null
                        },
                        gallery: [],
                        seo: {
                            url: '',
                            title: '',
                            keywords: '',
                            description: ''
                        },
                    }
                ],
                images: [
                    {
                        scheme: {
                            name: null,
                            image: null,
                            url: null,
                            uploaded: false
                        },
                        banner: {
                            name: null,
                            image: null,
                            url: null,
                            uploaded: false
                        },
                        gallery: [],
                        deleted: []
                    },
                    {
                        scheme: {
                            name: null,
                            image: null,
                            url: null,
                            uploaded: false
                        },
                        banner: {
                            name: null,
                            image: null,
                            url: null,
                            uploaded: false
                        },
                        gallery: [],
                        deleted: []
                    }
                ]
            })
           this.$router.push({
                name: 'hallCard',
                params: {
                    id: this.$store.state.cinemas.cinemasList[id].halls.length - 1,
                    parent: id
                }
            })
        }
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

.select_error {
    // position: absolute;
    // bottom: -20px;
    // left: 0;
    padding-top: 5px;
    font-size: 14px;
    text-align: left;
    color: #F54E4E;
}

.invalid {
    box-shadow: 0px 0px 10px #F54E4E;
}</style>