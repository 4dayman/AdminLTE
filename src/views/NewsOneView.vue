<template>
    <content-header title="Страница новости" />
    <content>
        <div class="row">
            <div class="col">
                <div class="card ">
                    <div class="card-header">
                        <h3 class="card-title">Страница новости</h3>
                        <div class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
                            <input type="checkbox" class="custom-control-input" id="mainBannersSwitch"
                                v-model="this.$store.state.news.newsList[this.$route.params.id].toggle">
                            <label class="custom-control-label" for="mainBannersSwitch">
                                <p v-if="this.$store.state.news.newsList[this.$route.params.id].toggle">ВКЛ</p>
                                <p v-else>ВЫКЛ</p>
                            </label>
                        </div>
                    </div>
                    <div class="film_lang pr-4">
                        <div class="custom-control custom-radio">
                            <input class="custom-control-input" type="radio" id="ua" value="0" name="lang"
                                @change="langChange"
                                v-model="this.$store.state.news.newsList[this.$route.params.id].lang">
                            <label for="ua" class="custom-control-label">UA</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input class="custom-control-input" type="radio" id="eng" value="1" name="lang"
                                @change="langChange"
                                v-model="this.$store.state.news.newsList[this.$route.params.id].lang">
                            <label for="eng" class="custom-control-label">ENG</label>
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="film_name ">
                            <div class="input-group mt-3">
                                <p>Название новости:</p>
                                <input class="form-control ml-1" type="text" placeholder="Название новости"
                                    :class="(v$.titleUA.$error || v$.titleENG.$error) ? 'invalid' : ''"
                                    @change="titleChenge"
                                    v-model="this.$store.state.news.newsList[this.$route.params.id].data[this.$store.state.news.newsList[this.$route.params.id].lang].title">
                                <p class="ml-4">Дата публикации:</p>
                                <input class="form-control ml-1" type="date" name="start" v-model="this.$store.state.news.newsList[this.$route.params.id].data[this.$store.state.news.newsList[this.$route.params.id].lang].publicDate" required>
                            </div>
                            <div class="row">
                                <div class="select_error mr-2" v-if="v$.titleUA.$error"> UA title {{v$.titleUA.$errors[0].$message }}!</div>
                                <div class="select_error" v-if="v$.titleENG.$error"> ENG title {{ v$.titleENG.$errors[0].$message}}!</div>
                            </div>
                            <!-- <p v-if="!this.$store.state.news.newsList[this.$route.params.id].data[this.$store.state.news.newsList[this.$route.params.id].lang].title">nothing ther</p> -->
                        </div>
                        <div class="film_desc">
                            <div class="input-group mt-3">
                                <p>Описание:</p>
                                <textarea class="form-control ml-1" type="text" placeholder="Text"
                                    :class="(v$.descUA.$error || v$.descENG.$error) ? 'invalid' : ''"
                                    @change="descChenge"
                                    v-model="this.$store.state.news.newsList[this.$route.params.id].data[this.$store.state.news.newsList[this.$route.params.id].lang].desc"></textarea>
                            </div>
                            <div class="row">
                                <div class="select_error mr-2" v-if="v$.descUA.$error"> UA desc {{v$.descUA.$errors[0].$message }}!</div>
                                <div class="select_error" v-if="v$.descENG.$error"> ENG desc {{ v$.descENG.$errors[0].$message}}!</div>
                            </div>
                        </div>
                        <div class="film_banner mt-3">
                            <p>Главная картинка:</p>
                            <div class="film_image_body ml-2">
                                <div class="film_image"
                                    v-if="this.$store.state.news.newsList[this.$route.params.id].images[this.$store.state.news.newsList[this.$route.params.id].lang].cover.url">
                                    <img
                                        :src="this.$store.state.news.newsList[this.$route.params.id].images[this.$store.state.news.newsList[this.$route.params.id].lang].cover.url">
                                </div>
                                <label class="banners_add">
                                    <button 
                                        :class="(v$.coverUA.$error || v$.coverENG.$error) ? 'invalid' : ''"
                                        class="btn btn-primary square" @click="this.$refs.coverSelect.click()"><i
                                        class="fas fa-plus"></i>
                                        Добавить фото</button>
                                    <input class="banner_input" ref="coverSelect" type="file" accept="image/*"
                                        @change="coverSelect($event)">
                                </label>
                                <div class="col">
                                    <div class="select_error" v-if="v$.coverUA.$error"> UA cover url {{ v$.coverUA.$errors[0].$message}}!</div>
                                    <div class="select_error" v-if="v$.coverENG.$error"> ENG cover url {{v$.coverENG.$errors[0].$message }}!</div>
                                </div>
                                <button class="btn btn-primary square"
                                    @click="this.$store.state.news.cnewsList[this.$route.params.id].data[this.$store.state.news.newsList[this.$route.params.id].lang].cover.url = this.$store.state.news.newsList[this.$route.params.id].images[this.$store.state.news.newsList[this.$route.params.id].lang].cover.url = ''"><i
                                        class="fas fa-minus"></i>
                                    Удалить фото</button>
                            </div>
                        </div>
                        <div class="film_galery film_banner mt-3">
                            <p>Галерея картинок:</p>
                            <div class="film_image_body ml-2">
                                <div class="film_image"
                                    v-for="(image, i) in this.$store.state.news.newsList[this.$route.params.id].images[this.$store.state.news.newsList[this.$route.params.id].lang].gallery"
                                    :key="i">
                                    <span class="badge bg-danger poa" @click="delGalleryImg(i)">X</span>
                                    <img :src="image.url">
                                </div>
                                <label class="banners_add">
                                    <button class="btn btn-primary square" @click="this.$refs.newsSelect.click()"><i
                                            class="fas fa-plus"></i>
                                        Добавить фото</button>
                                    <input class="banner_input" ref="newsSelect" type="file" multiple="multiple"
                                        accept="image/*" @change="newsSelect($event)">
                                </label>
                            </div>
                        </div>
                        <div class="film_url">
                            <div class="input-group mt-3">
                                <p>Ссылка на видео:</p>
                                <input class="form-control ml-1" type="text" placeholder="Ссылка на видео в youtube"
                                    :class="(v$.trailerUA.$error || v$.trailerENG.$error) ? 'invalid' : ''"
                                    @change="trailerChenge"
                                    v-model="this.$store.state.news.newsList[this.$route.params.id].data[this.$store.state.news.newsList[this.$route.params.id].lang].trailer">
                            </div>
                            <div class="row">
                                <div class="select_error mr-2" v-if="v$.trailerUA.$error"> UA trailer {{ v$.trailerUA.$errors[0].$message }}!</div>
                                <div class="select_error" v-if="v$.trailerENG.$error"> ENG trailer {{ v$.trailerENG.$errors[0].$message }}!</div>
                            </div>
                        </div>
                        <div class="film_seo">
                            <p>SEO блок:</p>
                            <div class="input-group mt-3">
                                <p>URL:</p>
                                <input class="form-control ml-1" type="text" placeholder="URL"
                                    v-model="this.$store.state.news.newsList[this.$route.params.id].data[this.$store.state.news.newsList[this.$route.params.id].lang].seo.url">
                            </div>
                            <div class="input-group mt-3">
                                <p>Title:</p>
                                <input class="form-control ml-1" type="text" placeholder="Title"
                                    v-model="this.$store.state.news.newsList[this.$route.params.id].data[this.$store.state.news.newsList[this.$route.params.id].lang].seo.title">
                            </div>
                            <div class="input-group mt-3">
                                <p>Keywords:</p>
                                <input class="form-control ml-1" type="text" placeholder="Keywords"
                                    v-model="this.$store.state.news.newsList[this.$route.params.id].data[this.$store.state.news.newsList[this.$route.params.id].lang].seo.keywords">
                            </div>
                            <div class="input-group mt-3">
                                <p>Description:</p>
                                <textarea class="form-control ml-1" type="text" placeholder="Description"
                                    v-model="this.$store.state.news.newsList[this.$route.params.id].data[this.$store.state.news.newsList[this.$route.params.id].lang].seo.desc"></textarea>
                            </div>
                        </div>

                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary float-right"
                            @click="uploadFilm(this.$route.params.id)">Сохранить</button>
                    </div>
                    <loader v-if="this.$store.state.news.loader"></loader>
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
            titleUA: { required },
            titleENG: { required },
            coverUA: { required },
            coverENG: { required },
            descUA: { required },
            descENG: { required },
            trailerUA: { required },
            trailerENG: { required },

        }
    },
    created() {
        this.titleUA = this.$store.state.news.newsList[this.$route.params.id].data[0].title
        this.titleENG = this.$store.state.news.newsList[this.$route.params.id].data[1].title
        this.descUA = this.$store.state.news.newsList[this.$route.params.id].data[0].desc
        this.descENG = this.$store.state.news.newsList[this.$route.params.id].data[1].desc
        this.trailerUA = this.$store.state.news.newsList[this.$route.params.id].data[0].trailer
        this.trailerENG = this.$store.state.news.newsList[this.$route.params.id].data[1].trailer
        this.coverUA = this.$store.state.news.newsList[this.$route.params.id].data[0].cover.url
        this.coverENG = this.$store.state.news.newsList[this.$route.params.id].data[1].cover.url
    },
    data() {
        return {
            file: null,
            files: null,
            titleUA: '',
            titleENG: '',
            coverUA: '',
            coverENG: '',
            descUA: '',
            descENG: '',
            trailerUA: '',
            trailerENG: '',
        }
    },
    computed: {
    },
    watch: {
    },
    methods: {
        langChange() {
            this.titleUA = this.$store.state.news.newsList[this.$route.params.id].data[0].title
            this.titleENG = this.$store.state.news.newsList[this.$route.params.id].data[1].title
            this.descUA = this.$store.state.news.newsList[this.$route.params.id].data[0].desc
            this.descENG = this.$store.state.news.newsList[this.$route.params.id].data[1].desc
            this.trailerUA = this.$store.state.news.newsList[this.$route.params.id].data[0].trailer
            this.trailerENG = this.$store.state.news.newsList[this.$route.params.id].data[1].trailer
        },
        titleChenge() {
            this.titleUA = this.$store.state.news.newsList[this.$route.params.id].data[0].title
            this.titleENG = this.$store.state.news.newsList[this.$route.params.id].data[1].title
        },
        descChenge() {
            this.descUA = this.$store.state.news.newsList[this.$route.params.id].data[0].desc
            this.descENG = this.$store.state.news.newsList[this.$route.params.id].data[1].desc
        },
        trailerChenge() {
            this.trailerUA = this.$store.state.news.newsList[this.$route.params.id].data[0].trailer
            this.trailerENG = this.$store.state.news.newsList[this.$route.params.id].data[1].trailer
        },
        coverSelect(input) {
            let lang = this.$store.state.news.newsList[this.$route.params.id].lang
            let file = input.target.files[0]
            this.$store.state.news.newsList[this.$route.params.id].images[lang].cover.image = file
            this.$store.state.news.newsList[this.$route.params.id].images[lang].cover.url = URL.createObjectURL(file)
            this.coverUA = this.$store.state.news.newsList[this.$route.params.id].images[0].cover.url
            this.coverENG = this.$store.state.news.newsList[this.$route.params.id].images[1].cover.url
            if (lang === 0) {
                this.$store.state.news.newsList[this.$route.params.id].data[lang].cover.name = this.$store.state.news.newsList[this.$route.params.id].images[lang].cover.name = this.$store.state.news.newsList[this.$route.params.id].name + '-ua'

            } else {
                this.$store.state.news.newsList[this.$route.params.id].data[lang].cover.name = this.$store.state.news.newsList[this.$route.params.id].images[lang].cover.name = this.$store.state.news.newsList[this.$route.params.id].name + '-eng'
            }
        },
        async newsSelect(input) {
            let lang = this.$store.state.news.newsList[this.$route.params.id].lang
            // let id = this.$route.params.id
            let files = input.target.files
            for (let i = 0; i < files.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 1))
                if (lang === 0) {
                    this.$store.state.news.newsList[this.$route.params.id].data[lang].gallery.push({
                        id: this.$store.state.news.newsList[this.$route.params.id].images[lang].gallery.length,
                        name: 'Gallery-' + Date.now() + '-ua',
                        url: null
                    })
                } else {
                    this.$store.state.news.newsList[this.$route.params.id].data[lang].gallery.push({
                        id: this.$store.state.news.newsList[this.$route.params.id].images[lang].gallery.length,
                        name: 'Gallery-' + Date.now() + '-eng',
                        url: null
                    })
                }
                this.$store.state.news.newsList[this.$route.params.id].images[lang].gallery.push({
                    id: this.$store.state.news.newsList[this.$route.params.id].images[lang].gallery.length,
                    name: this.$store.state.news.newsList[this.$route.params.id].data[lang].gallery[i].name,
                    uploaded: false,
                    image: files[i],
                    url: URL.createObjectURL(files[i])
                })
            }
        },
        delGalleryImg(i) {
            let lang = this.$store.state.news.newsList[this.$route.params.id].lang
            // let id = this.$route.params.id

            if (this.$store.state.news.newsList[this.$route.params.id].images[lang].gallery[i].uploaded) {
                this.$store.state.news.newsList[this.$route.params.id].images[lang].deleted.push(this.$store.state.news.newsList[this.$route.params.id].images[lang].gallery[i].name)
            }
            this.$store.state.news.newsList[this.$route.params.id].data[lang].gallery.splice(i, 1)
            this.$store.state.news.newsList[this.$route.params.id].images[lang].gallery.splice(i, 1)
            for (let j = 0; j < this.$store.state.news.newsList[this.$route.params.id].images[lang].gallery.length; j++) {
                if (this.$store.state.news.newsList[this.$route.params.id].images[lang].gallery[j].id !== j) {
                    this.$store.state.news.newsList[this.$route.params.id].data[lang].gallery[j].id = this.$store.state.news.newsList[this.$route.params.id].images[lang].gallery[j].id = j
                }
            }
        },
        async uploadFilm(id) {
            this.v$.$touch()
            this.v$.$validate()
            if (!this.v$.titleUA.$error && !this.v$.titleENG.$error &&
                !this.v$.coverUA.$error && !this.v$.coverENG.$error &&
                !this.v$.descUA.$error && !this.v$.descENG.$error &&
                !this.v$.trailerUA.$error && !this.v$.trailerENG.$error) {
                this.$store.state.news.loader = true
                this.$store.state.news.newsList[id].uploaded = false;
                for (let i = 0; i < this.$store.state.news.newsList[id].images.length; i++) {
                    // upload cover image (update if was changed)
                    if (this.$store.state.news.newsList[id].images[i].cover.image !== null) {
                        try {
                            const coverRef = ref(storage, "news/cover/" + this.$store.state.news.newsList[id].images[i].cover.name);
                            await uploadBytes(coverRef, this.$store.state.news.newsList[id].images[i].cover.image).then(async () => {
                                await getDownloadURL(coverRef).then((url) => {
                                    this.$store.state.news.newsList[id].data[i].cover.url = url;
                                    this.uploadFilmData(id)
                                });
                            });
                        } catch (e) {
                            console.log(e);
                        }
                    } else { this.uploadFilmData(id) }
                    // delete images from gallery
                    if (this.$store.state.news.newsList[id].images[i].deleted.length !== 0) {
                        for (let j = 0; j < this.$store.state.news.newsList[id].images[i].deleted.length; j++) {
                            const delRef = ref(storage, "news/gallery/" + this.$store.state.news.newsList[id].images[i].deleted[j]);
                            await deleteObject(delRef).then(() => {
                                this.$store.state.news.newsList[id].images[i].deleted.splice(j, 1);
                            }).catch((e) => {
                                console.log(e);
                            });
                        }
                    }
                    this.uploadFilmData(id)
                    // upload gallery
                    if (this.$store.state.news.newsList[id].images[i].gallery.length) {
                        for (let j = 0; j < this.$store.state.news.newsList[id].images[i].gallery.length; j++) {
                            if (this.$store.state.news.newsList[id].images[i].gallery[j].image !== null) {
                                try {
                                    const galleryRef = ref(storage, "news/gallery/" + this.$store.state.news.newsList[id].images[i].gallery[j].name);
                                    await uploadBytes(galleryRef, this.$store.state.news.newsList[id].images[i].gallery[j].image).then(async () => {
                                        await getDownloadURL(galleryRef).then((url) => {
                                            this.$store.state.news.newsList[id].data[i].gallery[j].url = url;
                                            // this.$store.state.news.newsList[id].images[i].gallery[j].uploaded = true
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
                this.$store.state.news.newsList[id].uploaded = true;
                this.$store.state.news.loader = false
                this.$router.push({
                    name: 'news',
                })
            }
        },
        async uploadFilmData(id) {
            const docData = {
                lang: this.$store.state.news.newsList[id].lang,
                toggle: this.$store.state.news.newsList[id].toggle,
                creationDate: this.$store.state.news.newsList[id].creationDate,
                data: this.$store.state.news.newsList[id].data,
            }
            await setDoc(doc(db, "news", this.$store.state.news.newsList[id].name), docData).then(() => {
                // this.$store.state.news.newsList[id].uploaded = true;
            });
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

.select_error {
    padding-top: 5px;
    font-size: 14px;
    text-align: left;
    color: #F54E4E;
}

.invalid {
    box-shadow: 0px 0px 10px #F54E4E;
}
</style>
