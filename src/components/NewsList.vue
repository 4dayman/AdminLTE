<template>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th class="table__item">Название</th>
                <th class="table__item">Дата создания</th>
                <th class="table__item">Статус</th>
                <th class="table__item"></th>
                <th class="table__item"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(news, i) in newsList" :key="i" >
                <th class="table__item">{{ news.data[0].title }}</th>
                <!-- <th class="table__item">{{ news.data[0].publicDate }}</th> -->
                <th class="table__item">{{ news.creationDate }}</th>
                <th class="table__item"><p v-if="news.toggle">ВКЛ</p><p v-else>ВЫКЛ</p></th>
                <th class="table__item">
                    <router-link :to="`newsOne/${news.id}`" class="input-group">
                        <i class="fas fa-pencil-alt"></i>
                    </router-link>
                </th>
                <th class="table__item">
                    <i class="far fa-trash-alt pointer" @click="news.modal = !news.modal"></i>
                </th>
                <div class="modal-wrap" v-if="news.modal">
                <div class="card p-2 modal-body">
                    <h3>Действительно хотите удалить</h3>
                    <div class="actions">
                        <button class="btn btn-primary float-right" @click="deleteFilm(news.id)">Удалить</button>
                        <button class="btn btn-primary float-right" @click="news.modal = !news.modal">Отменить</button>
                    </div>
                </div>
            </div>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { collection, doc, getDocs, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db, storage } from '../firebase/init.js'
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
export default {
    components: {},
    computed: {
        newsList() {
            return this.$store.state.news.newsList
        }
    },
    data() {
        return {}
    },
    methods: {
        async deleteFilm(id) {
            this.$store.state.news.newsModal = false;
            this.$store.state.news.loader = true
            if (this.$store.state.news.newsList[id].uploaded) {
                // delete data
                await deleteDoc(doc(db, "news", this.$store.state.news.newsList[id].name));
                // delete images
                for (let i = 0; i < this.$store.state.news.newsList[id].images.length; i++) {
                    // delete main image
                    // if (this.$store.state.news.newsList[id].name !== null) {
                    const delRef = ref(storage, "news/cover/" + this.$store.state.news.newsList[id].images[i].cover.name);
                    await deleteObject(delRef).catch((e) => {
                        console.log(e);
                    });
                    // }
                    if (this.$store.state.news.newsList[id].images[i].gallery.length !== 0) {
                        for (let j = 0; j < this.$store.state.news.newsList[id].images[i].gallery.length; j++) {
                            const delRef = ref(storage, 'news/gallery/' + this.$store.state.news.newsList[id].images[i].gallery[j].name);
                            await deleteObject(delRef).catch((e) => {
                                console.log(e);
                            });
                        }
                    }
                    if (this.$store.state.news.newsList[id].images[i].deleted.length !== 0) {
                        for (let j = 0; j < this.$store.state.news.newsList[id].images[i].deleted.length; j++) {
                            const delRef = ref(storage, 'news/gallery/' + this.$store.state.news.newsList[id].images[i].deleted[j].name);
                            await deleteObject(delRef).catch((e) => {
                                console.log(e);
                            });
                        }
                    }
                }
            }
            this.$store.state.news.newsList.splice(id, 1);
            for (let i = 0; i < this.$store.state.news.newsList.length; i++) {
                if (this.$store.state.news.newsList[i].id !== i) {
                    this.$store.state.news.newsList[i].id = i;
                }
            }
            this.$store.state.news.loader = false
        },
    }
}
</script>

<style lang="scss" scoped>
.banner {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.banner {
    width: 240px;

    img {
        height: 140px;
        object-fit: cover;
    }
}

.input-group {
    display: flex;
    justify-content: center;
    text-decoration: none;

    img {
        width: 100%;
        height: 340px;
        object-fit: cover;
    }

    h5 {
        color: black;
    }
}

.card {
    gap: 10px;
}

.poa {
    cursor: pointer;
    position: absolute;
    right: -10px;
    top: -10px;
}

.modal-wrap {
    position: fixed;
    z-index: 100;
    top: 0%;
    left: 0%;
    width: 100vw;
    height: 100vh;
    background: rgba(112, 112, 112, 0.239);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-body {
    max-width: 400px;
    max-height: 200px;

    // margin: auto auto;
    // top: 20%;
    .actions {
        display: flex;
        justify-content: space-around;

        button {
            width: 40%;
        }

    }
}
.pointer{
    cursor: pointer;
}
</style>