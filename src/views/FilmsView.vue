<template>
    <content-header title="Фильмы" icon="fas fa-info-circle" />
    <content class="por">
        <div class="row por">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Список фильмов текущих</h3>
                        <button class="btn btn-primary" @click="addFilm"><i class="fas fa-plus"></i>
                            Добавить фильм</button>
                    </div>
                    <div class="card-body">
                        <div class="film-card-wrap">
                            <FilmsList />
                            <loader v-if="this.$store.state.films.loader"></loader>
                            <!-- <button class="btn btn-primary square" @click="addFilm"><i class="fas fa-plus"></i>
                                Добавить фильм</button> -->
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Список фильмов которые покажут скоро</h3>
                    </div>
                    <div class="card-body">
                        <div class="film-card-wrap">
                            <FilmsUpcomList />
                            <loader v-if="this.$store.state.films.loader"></loader>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </content>
</template>

<script>
import FilmsList from '../components/FilmsList.vue'
import FilmsUpcomList from '../components/FilmsUpcomList.vue'
import { collection, doc, getDocs, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db, storage } from '../firebase/init.js'
import Loader from '../components/Loader.vue'


export default {
    components: { FilmsList, FilmsUpcomList, Loader },
    created() {
        // this.$router.go(),
        this.getFilms()
    },
    methods: {
        addFilm() {
            this.$store.state.films.currentList.push({
                id: this.$store.state.films.currentList.length,
                name: 'film-' + Date.now(),
                uploaded: false,
                modal: false,
                lang: 0,
                toggle: null,
                data: [
                    {
                        title: '',
                        desc: '',
                        trailer: '',
                        type: [],
                        cover: {
                            name: null,
                            url: null
                        },
                        gallery: [],
                        seo: {
                            url: '',
                            title: '',
                            keywords: '',
                            desc: ''
                        },
                        
                    },
                    {
                        title: '',
                        desc: '',
                        trailer: '',
                        type: [],
                        cover: {
                            name: null,
                            url: null
                        },
                        gallery: [],
                        seo: {
                            url: '',
                            title: '',
                            keywords: '',
                            desc: ''
                        },
                        },
                ],
                images: [
                    {
                        cover: {
                            name: null,
                            image: null,
                            url: null,
                            uploaded: false
                        },
                        gallery: [],
                        deleted: []
                    },
                    {
                        cover: {
                            name: null,
                            image: null,
                            url: null,
                            uploaded: false
                        },
                        gallery: [],
                        deleted: []
                    },
                ]
            })
            this.$router.push({
                name: 'filmsOne',
                params: {
                    id: this.$store.state.films.currentList.length-1 ,
                }
            })
        },
        async getFilms() {
            this.$store.state.films.loader = true
            this.$store.state.films.currentList = [];
            const filmsData = await getDocs(collection(db, 'films'))
            filmsData.forEach((doc) => {
                this.$store.state.films.currentList.push({
                    id: this.$store.state.films.currentList.length,
                    name: doc.id,
                    uploaded: true,
                    lang: doc.data().lang,
                    data: doc.data().data,
                    toggle: doc.data().toggle,
                    images: [
                        {
                            cover: {
                                name: doc.data().data[0].cover.name,
                                image: null,
                                url: doc.data().data[0].cover.url
                            },
                            gallery: [],
                            deleted: []
                        },
                        {
                            cover: {
                                name: doc.data().data[1].cover.name,
                                image: null,
                                url: doc.data().data[1].cover.url
                            },
                            gallery: [],
                            deleted: []
                        },
                    ]
                })
            });
            this.$store.state.films.currentList.forEach((film) => {
                for (let i = 0; i < film.data.length; i++) {
                    for (let j = 0; j < film.data[i].gallery.length; j++) {
                        film.images[i].gallery.push({
                            id: film.images[i].gallery.length,
                            name: film.data[i].gallery[j].name,
                            uploaded: true,
                            image: null,
                            url: film.data[i].gallery[j].url
                        });
                    }
                }
            })
            this.$store.state.films.loader = false
            // this.$router.push({
            //     name: 'films',
            // })
            // this.$router.go({ name: 'films' })
        },
    }
}

</script>
<style lang="scss" scouped>
.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.film-card-wrap {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 20px;
}

.square {
    width: 100px;
    height: 100px;
}

.card-body {
    position: relative;
}
.por{
    position: relative;
}
</style>
