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
            <tr v-for="(proms, i) in promsList" :key="i">
                <th class="table__item">{{ proms.data[0].title }}</th>
                <!-- <th class="table__item">{{ proms.data[0].publicDate }}</th> -->
                <th class="table__item">{{ proms.creationDate }}</th>
                <th class="table__item">
                    <p v-if="proms.toggle">ВКЛ</p>
                    <p v-else>ВЫКЛ</p>
                </th>
                <th class="table__item">
                    <router-link :to="`promsOne/${proms.id}`" class="input-group">
                        <i class="fas fa-pencil-alt"></i>
                    </router-link>
                </th>
                <th class="table__item">
                    <i class="far fa-trash-alt pointer" @click="proms.modal = !proms.modal"></i>
                </th>
                <div class="modal-wrap" v-if="proms.modal">
                    <div class="card p-2 modal-body">
                        <h3>Действительно хотите удалить</h3>
                        <div class="actions">
                            <button class="btn btn-primary float-right" @click="deleteFilm(proms.id)">Удалить</button>
                            <button class="btn btn-primary float-right" @click="proms.modal = !proms.modal">Отменить</button>
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
        promsList() {
            return this.$store.state.proms.promsList
        }
    },
    data() {
        return {}
    },
    methods: {
        async deleteFilm(id) {
            this.$store.state.proms.promsModal = false;
            this.$store.state.proms.loader = true
            if (this.$store.state.proms.promsList[id].uploaded) {
                // delete data
                await deleteDoc(doc(db, "proms", this.$store.state.proms.promsList[id].name));
                // delete images
                for (let i = 0; i < this.$store.state.proms.promsList[id].images.length; i++) {
                    // delete main image
                    // if (this.$store.state.proms.promsList[id].name !== null) {
                    const delRef = ref(storage, "proms/cover/" + this.$store.state.proms.promsList[id].name);
                    await deleteObject(delRef).catch((e) => {
                        console.log(e);
                    });
                    // }
                    if (this.$store.state.proms.promsList[id].images[i].gallery.length !== 0) {
                        for (let j = 0; j < this.$store.state.proms.promsList[id].images[i].gallery.length; j++) {
                            const delRef = ref(storage, 'proms/gallery/' + this.$store.state.proms.promsList[id].images[i].gallery[j].name);
                            await deleteObject(delRef).catch((e) => {
                                console.log(e);
                            });
                        }
                    }
                    if (this.$store.state.proms.promsList[id].images[i].deleted.length !== 0) {
                        for (let j = 0; j < this.$store.state.proms.promsList[id].images[i].deleted.length; j++) {
                            const delRef = ref(storage, 'proms/gallery/' + this.$store.state.proms.promsList[id].images[i].deleted[j].name);
                            await deleteObject(delRef).catch((e) => {
                                console.log(e);
                            });
                        }
                    }
                }
            }
            this.$store.state.proms.promsList.splice(id, 1);
            for (let i = 0; i < this.$store.state.proms.promsList.length; i++) {
                if (this.$store.state.proms.promsList[i].id !== i) {
                    this.$store.state.proms.promsList[i].id = i;
                }
            }
            this.$store.state.proms.loader = false
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

.pointer {
    cursor: pointer;
}</style>