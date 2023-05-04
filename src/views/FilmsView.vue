<template>
    <content-header title="Фильмы" icon="fas fa-info-circle" />
    <content>
        <div class="row">
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

export default {
    components: { FilmsList, FilmsUpcomList },
    created() {
        this.getFilms()
    },
    methods: {
        addFilm() {
            this.$store.state.films.currentList.push({
                id: this.$store.state.films.currentList.length,
                name: 'film-' + Date.now(),
                uploaded: false,
                modal: false,
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
                        toggle: null,
                    }
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
                    }
                ]
            })
            this.$router.push({
                name: 'filmsOne',
                params: {
                    id: this.$store.state.films.currentList.length - 1,
                }
            })
        },
        async getFilms() {
            this.$store.state.films.currentList = [];
            const filmsData = await getDocs(collection(db, 'films'))
            filmsData.forEach((doc) => {
                this.$store.state.films.currentList.push({
                    id: this.$store.state.films.currentList.length,
                    name: doc.id,
                    uploaded: true,
                    data: doc.data().data,
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
                    ]
                })
            });
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
}</style>
