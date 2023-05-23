<template>
    <content-header title="Новости" />
    <content>
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Список Новостей</h3>
                        <button class="btn btn-primary" @click="addNews"><i class="fas fa-plus"></i>
                                Создать новость</button>
                    </div>
                    <div class="card-body">
                         <div class="film-card-wrap">
                                <NewsList />
                                <loader v-if="this.$store.state.news.loader"></loader>
                                <!-- <button class="btn btn-primary square" @click="addFilm"><i class="fas fa-plus"></i>
                                Добавить фильм</button> -->
                            </div>
                    </div>
                    <div class="card-footer">
                        Footer
                    </div>
                </div>
            </div>
        </div>
    </content>
</template>

<script>
import { collection, doc, getDocs, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db, storage } from '../firebase/init.js'
import Loader from '../components/Loader.vue'
import NewsList from '../components/NewsList.vue'


export default {
    components: { Loader, NewsList },
    created() {
        this.getNews()
    },
    methods: {
        addNews() {
            this.$store.state.news.newsList.push({
                id: this.$store.state.news.newsList.length,
                name: 'new-' + Date.now(),
                creationDate: new Date().toISOString().split("T")[0],
                uploaded: false,
                modal: false,
                lang: 0,
                toggle: true,
                data: [
                    {
                        title: '',
                        publicDate: new Date().toISOString().split("T")[0],
                        desc: '',
                        trailer: '',
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
                        publicDate: new Date().toISOString().split("T")[0],
                        desc: '',
                        trailer: '',
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
                name: 'newsOne',
                params: {
                    id: this.$store.state.news.newsList.length - 1,
                }
            })
        },
        async getNews() {
            this.$store.state.news.loader = true
            this.$store.state.news.newsList = [];
            const newsData = await getDocs(collection(db, 'news'))
            newsData.forEach((doc) => {
                this.$store.state.news.newsList.push({
                    id: this.$store.state.news.newsList.length,
                    name: doc.id,
                    uploaded: true,
                    lang: 0,
                    data: doc.data().data,
                    creationDate: doc.data().creationDate,
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
            this.$store.state.news.newsList.forEach((film) => {
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
            this.$store.state.news.loader = false
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

.por {
    position: relative;
}
</style>


