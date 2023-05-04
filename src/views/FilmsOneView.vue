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
                                <input class="form-control ml-1" type="text" placeholder="Название фильма"
                                    v-model="this.$store.state.films.currentList[this.$route.params.id].data[0].title">
                            </div>
                        </div>
                        <div class="film_desc">
                            <div class="input-group mb-3">
                                <p>Описание:</p>
                                <textarea class="form-control ml-1" type="text" placeholder="Text"
                                    v-model="this.$store.state.films.currentList[this.$route.params.id].data[0].desc"></textarea>
                            </div>
                        </div>
                        <div class="film_banner mb-3">
                            <p>Главная картинка:</p>
                            <div class="film_image_body ml-2">
                                <div class="film_image"
                                    v-if="this.$store.state.films.currentList[this.$route.params.id].images[0].cover.url">
                                    <img
                                        :src="this.$store.state.films.currentList[this.$route.params.id].images[0].cover.url">
                                </div>
                                <label class="banners_add">
                                    <button class="btn btn-primary square" @click="this.$refs.coverSelect.click()"><i
                                            class="fas fa-plus"></i>
                                        Добавить фото</button>
                                    <input class="banner_input" ref="coverSelect" type="file" accept="image/*"
                                        @change="coverSelect($event)">
                                </label>
                                <button class="btn btn-primary square"
                                    @click="this.$store.state.films.currentList[this.$route.params.id].images[0].cover.url = ''"><i
                                        class="fas fa-minus"></i>
                                    Удалить фото</button>
                            </div>
                        </div>
                        <div class="film_galery film_banner mb-3">
                            <p>Галерея картинок:</p>
                            <div class="film_image_body ml-2">
                                <div class="film_image" 
                                    v-for="image in this.$store.state.films.currentList[this.$route.params.id].images[0].gallery" 
                                    :key="image.id" >
                                    <span class="badge bg-danger poa" @click="delGalleryImg(image.id)" >X</span>
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
                        <!-- <div class="film_url">
                            <div class="input-group mb-3">
                                <p>Ссылка на трейлер:</p>
                                <input class="form-control ml-1" type="text" placeholder="Ссылка на видео в youtube">
                            </div>
                        </div> -->
                        <!-- <div class="film_type">
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
                        </div> -->
                        <!-- <div class="film_seo">
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
                            <div class="input-group mb-3">
                                <p>Description:</p>
                                <textarea class="form-control ml-1" type="text" placeholder="Description"></textarea>
                            </div>
                        </div> -->
                    </div>
                    <div class="card-footer">
                        <div class="custom-control custom-switch custom-switch-lg ">
                            <input type="checkbox" class="custom-control-input" id="mainBannersSwitch"
                                v-model="this.$store.state.films.currentList[this.$route.params.id].data[0].toggle">
                            <label class="custom-control-label" for="mainBannersSwitch"
                                v-if="!this.$store.state.films.currentList[this.$route.params.id].data[0].toggle">
                                now
                            </label>
                            <label class="custom-control-label" for="mainBannersSwitch"
                                v-if="this.$store.state.films.currentList[this.$route.params.id].data[0].toggle">
                                upcom
                            </label>
                        </div>

                        <button class="btn btn-primary float-right"
                            @click="uploadFilm(this.$route.params.id)">Сохранить</button>
                        <button class="btn btn-primary float-right" @click="resetFilm(this.$route.params.id)">Вернуть базовую версию</button>
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
    created() {
        this.id = this.$route.params.id
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
        coverSelect() {
            // let file = input.target.files[0]
            // this.$store.state.banners.bgBanners.image = bannersBg
            // this.$store.state.banners.bgBanners.url = URL.createObjectURL(bannersBg)

            this.file = this.$refs.coverSelect.files[0]
            this.$store.state.films.currentList[this.$route.params.id].images[0].cover.image = this.file
            this.$store.state.films.currentList[this.$route.params.id].images[0].cover.url = URL.createObjectURL(this.file)
            this.$store.state.films.currentList[this.$route.params.id].data[0].cover.name = this.$store.state.films.currentList[this.$route.params.id].images[0].cover.name = this.$store.state.films.currentList[this.$route.params.id].name
        },
        filmsSelect() { 
            this.files = this.$refs.filmsSelect.files
            for (let i = 0; i < this.files.length; i++) {
                this.$store.state.films.currentList[this.$route.params.id].data[0].gallery.push({
                    id: i,
                    name: 'Gallery-' + Date.now(),
                    url: null
                })
                this.$store.state.films.currentList[this.$route.params.id].images[0].gallery.push({
                    id: i,
                    name: this.$store.state.films.currentList[this.$route.params.id].data[0].gallery[i].name,
                    uploaded: false,
                    image: this.files[i],
                    url: URL.createObjectURL(this.files[i])
                })
            }
        },
        async uploadFilm(id) {

            for (let i = 0; i < this.$store.state.films.currentList[id].images.length; i++) {
                // upload cover image (update if was changed)
                if (this.$store.state.films.currentList[id].images[0].cover.image !== null) {
                    try {
                        const coverRef = ref(storage, "films/cover/" + this.$store.state.films.currentList[id].name);
                        await uploadBytes(coverRef, this.$store.state.films.currentList[id].images[0].cover.image).then(async () => {
                            await getDownloadURL(coverRef).then((url) => {
                                this.$store.state.films.currentList[id].data[0].cover.url = url;
                                this.uploadFilmData(id)
                            });
                        });
                    } catch (e) {
                        console.log(e);
                    }
                } else { this.uploadFilmData(id) }
                // delete images from gallery
                if (this.$store.state.films.currentList[id].images[0].deleted.length !== 0) {
                    for (let j = 0; j < this.$store.state.films.currentList[id].images[0].deleted.length; j++) {
                        const delRef = ref(storage, "films/gallery/" + this.$store.state.films.currentList[id].images[0].deleted[j]);
                        await deleteObject(delRef).then(() => {
                            this.$store.state.films.currentList[id].images[0].deleted.splice(j, 1);
                        }).catch((e) => {
                            console.log(e);
                        });
                    }
                } this.uploadFilmData(id)
            }
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
        },
        async uploadFilmData(id) {
            const docData = {
                data: this.$store.state.films.currentList[id].data,
            }
            await setDoc(doc(db, "films", this.$store.state.films.currentList[id].name), docData).then(() => {
                this.uploaded = true;
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
            if (this.$store.state.films.currentList[id].uploaded) {
                for (let i = 0; i < this.$store.state.films.currentList[id].images.length; i++) {
                    this.$store.state.films.currentList[id].images[i].cover.name = null;
                    this.$store.state.films.currentList[id].images[i].cover.image = null;
                    this.$store.state.films.currentList[id].images[i].cover.url = null;
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
                    }
                }
            }
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