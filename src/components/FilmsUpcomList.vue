<template>
    <div class="banner" v-for="(film, i) in currentList" :key="i" v-show="film.data[0].toggle">
        <div class="card p-2 ">
            <span class="badge bg-danger poa"
                @click="this.$store.state.films.upcomModal = !this.$store.state.films.upcomModal"
                v-if="currentList.length > 1">X</span>
            <router-link :to="`filmsOne/${film.id}`" class="input-group">
                <img :src="film.images[0].cover.url">
                <p>Title:{{ film.data[0].title }}</p>
            </router-link>
        </div>
        <div class="modal-wrap" v-if="this.$store.state.films.upcomModal">
            <div class="card p-2 modal-body">
                <h3>Действительно хотите удалить</h3>
                <div class="actions">
                    <button class="btn btn-primary float-right" @click="deleteFilm(film.id)">Удалить</button>
                    <button class="btn btn-primary float-right"
                        @click="this.$store.state.films.upcomModal = !this.$store.state.films.upcomModal">Отменить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { collection, doc, getDocs, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db, storage } from '../firebase/init.js'

export default {
    components: {},
    computed: {
        currentList() {
            return this.$store.state.films.currentList
        }
    },
    data() {
        return {}
    },
    methods: {
        async deleteFilm(id) {
            this.$store.state.films.upcomModal = false;
            this.loading = true;
            if (this.$store.state.films.currentList[id].uploaded) {
                // delete data
                await deleteDoc(doc(db, "films", this.$store.state.films.currentList[id].name));
                // delete images
                for (let i = 0; i < this.$store.state.films.currentList[id].images.length; i++) {
                    // delete main image
                    if (this.$store.state.films.currentList[id].images[i].cover.name !== null) {
                        const delRef = ref(storage, 'films/cover/' + this.$store.state.films.currentList[id].name);
                        await deleteObject(delRef).catch((e) => {
                            console.log(e);
                        });
                    }
                }
            }
            this.$store.state.films.currentList.splice(id, 1);
            for (let i = 0; i < this.$store.state.films.currentList.length; i++) {
                if (this.$store.state.films.currentList[i].id !== i) {
                    this.$store.state.films.currentList[i].id = i;
                }
            }
            this.loading = false;
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
    img {
        width: 100%;
        height: 140px;
        object-fit: cover;
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
}</style>