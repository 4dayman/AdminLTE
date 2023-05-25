<template>
    <div class="banner" v-for="(cinema, i) in cinemasList" :key="i">
        <div class="card p-2 ">
            <span class="badge bg-danger poa" @click="cinema.modal = !cinema.modal" v-if="cinemasList.length > 1">X</span>
            <router-link :to="`cinemasOne/${cinema.id}`" class="input-group">
                <img :src="cinema.images[0].logo.url">
                <h5>{{ cinema.data[0].title }}</h5>
            </router-link>
        </div>
        <div class="modal-wrap" v-if="cinema.modal">
            <div class="card p-2 modal-body">
                <h3>Действительно хотите удалить</h3>
                <div class="actions">
                    <button class="btn btn-primary float-right" @click="deleteCinema(cinema.id)">Удалить</button>
                    <button class="btn btn-primary float-right" @click="cinema.modal = !cinema.modal">Отменить</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { collection, doc, getDocs, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db, storage } from '../firebase/init.js'
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
export default {
    components: {},
    computed: {
        cinemasList() {
            return this.$store.state.cinemas.cinemasList
        }
    },
    data() {
        return {}
    },
    methods: {
        async deleteCinema(id) {
            this.$store.state.cinemas.cinemasModal = false;
            this.$store.state.cinemas.loader = true
            if (this.$store.state.cinemas.cinemasList[id].uploaded) {
                // delete data
                await deleteDoc(doc(db, "cinemas", this.$store.state.cinemas.cinemasList[id].name));
                // delete images
                for (let i = 0; i < this.$store.state.cinemas.cinemasList[id].images.length; i++) {
                    // delete main image
                    // if (this.$store.state.cinemas.cinemasList[id].name !== null) {
                    const delRef = ref(storage, "cinemas/cover/" + this.$store.state.cinemas.cinemasList[id].images[i].cover.name);
                    await deleteObject(delRef).catch((e) => {
                        console.log(e);
                    });
                    // }
                    if (this.$store.state.cinemas.cinemasList[id].images[i].gallery.length !== 0) {
                        for (let j = 0; j < this.$store.state.cinemas.cinemasList[id].images[i].gallery.length; j++) {
                            const delRef = ref(storage, 'cinemas/gallery/' + this.$store.state.cinemas.cinemasList[id].images[i].gallery[j].name);
                            await deleteObject(delRef).catch((e) => {
                                console.log(e);
                            });
                        }
                    }
                    if (this.$store.state.cinemas.cinemasList[id].images[i].deleted.length !== 0) {
                        for (let j = 0; j < this.$store.state.cinemas.cinemasList[id].images[i].deleted.length; j++) {
                            const delRef = ref(storage, 'cinemas/gallery/' + this.$store.state.cinemas.cinemasList[id].images[i].deleted[j].name);
                            await deleteObject(delRef).catch((e) => {
                                console.log(e);
                            });
                        }
                    }
                }
            }
            this.$store.state.cinemas.cinemasList.splice(id, 1);
            for (let i = 0; i < this.$store.state.cinemas.cinemasList.length; i++) {
                if (this.$store.state.cinemas.cinemasList[i].id !== i) {
                    this.$store.state.cinemas.cinemasList[i].id = i;
                }
            }
            this.$store.state.cinemas.loader = false
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
}

.input-group {
    display: flex;
    justify-content: center;
    text-decoration: none;

    img {
        width: 100%;
        height: 240px;
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

    .actions {
        display: flex;
        justify-content: space-around;

        button {
            width: 40%;
        }

    }
}
</style>