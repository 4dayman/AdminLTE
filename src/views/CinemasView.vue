<template>
    <content-header title="Кинотеатры" icon="fas fa-info-circle" />
    <content class="por">
        <div class="row por">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Список кинотеатров</h3>
                    </div>
                    <div class="card-body">
                        <div class="film-card-wrap">
                            <CinemasList />
                            <button class="btn btn-primary square" @click="addCinema"><i class="fas fa-plus"></i>
                                Добавить кинотеатр</button>
                            <loader v-if="this.$store.state.cinemas.loader"></loader>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </content>
</template>

<script>
import CinemasList from '../components/CinemasList.vue'
import { collection, doc, getDocs, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db, storage } from '../firebase/init.js'
import Loader from '../components/Loader.vue'


export default {
    components: { CinemasList, Loader },
    created() {
        // this.$router.go(),
        this.getCinemas()
    },
    methods: {
        addCinema() {
            this.$store.state.cinemas.cinemasList.push({
                id: this.$store.state.cinemas.cinemasList.length,
                name: 'cinema-' + Date.now(),
                uploaded: false,
                modal: false,
                lang: 0,
                // toggle: null,
                data: [
                    {
                        title: '',
                        desc: '',
                        terms: '',
                        trailer: '',
                        logo: {
                            name: null,
                            url: null
                        },
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
                        terms: '',
                        trailer: '',
                        logo: {
                            name: null,
                            url: null
                        },
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
                        logo: {
                            name: null,
                            image: null,
                            url: null,
                            uploaded: false
                        },
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
                        logo: {
                            name: null,
                            image: null,
                            url: null,
                            uploaded: false
                        },
                        cover: {
                            name: null,
                            image: null,
                            url: null,
                            uploaded: false
                        },
                        gallery: [],
                        deleted: []
                    },
                ],
                halls: [],
                deleteHalls: []
            })
            this.$router.push({
                name: 'cinemasOne',
                params: {
                    id: this.$store.state.cinemas.cinemasList.length - 1,
                }
            })
        },
        async getCinemas() {
            this.$store.state.cinemas.loader = true
            this.$store.state.cinemas.cinemasList = [];
            const cinemasData = await getDocs(collection(db, 'cinemas'))
            cinemasData.forEach((doc) => {
                this.$store.state.cinemas.cinemasList.push({
                    id: this.$store.state.cinemas.cinemasList.length,
                    name: doc.id,
                    uploaded: true,
                    lang: 0,
                    // lang: doc.data().lang,
                    data: doc.data().data,
                    images: [
                        {
                            logo: {
                                name: doc.data().data[0].logo.name,
                                image: null,
                                url: doc.data().data[0].logo.url
                            },
                            cover: {
                                name: doc.data().data[0].cover.name,
                                image: null,
                                url: doc.data().data[0].cover.url
                            },
                            gallery: [],
                            deleted: []
                        },
                        {
                            logo: {
                                name: doc.data().data[1].logo.name,
                                image: null,
                                url: doc.data().data[1].logo.url
                            },
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
            this.$store.state.cinemas.cinemasList.forEach((cinema) => {
                for (let i = 0; i < cinema.data.length; i++) {
                    for (let j = 0; j < cinema.data[i].gallery.length; j++) {
                        cinema.images[i].gallery.push({
                            id: cinema.images[i].gallery.length,
                            name: cinema.data[i].gallery[j].name,
                            uploaded: true,
                            image: null,
                            url: cinema.data[i].gallery[j].url
                        });
                    }
                }
            })
            this.$store.state.cinemas.loader = false
            // this.$router.push({
            //     name: 'cinemas',
            // })
            // this.$router.go({ name: 'cinemas' })
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

.por {
    position: relative;
}
</style>
