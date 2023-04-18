<template>
  <content-header title="Банера" icon="fas fa-info-circle" />
  <content>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">На главной верх</h3>
          </div>
          <div class="ml-3"><h3>Размер: 1000х1900</h3></div>
          <div class="card-body">
            <banners-list></banners-list>
            <label class="banners_add">
              <button class="btn btn-primary square" @click="this.$refs.bannersSelect.click()"><i class="fas fa-plus"></i> Добавить фото</button>
              <input class="banner_input" ref="bannersSelect" type="file" multiple="multiple" accept="image/*" @change="bannersSelect($event)">
            </label>
          </div>
          <div class="card-footer">
            <div>
              <p>Скорость вращения {{ this.$store.state.banners.mainBanners.rotationSpeed }}</p>
              <select class="form-control" v-model="this.$store.state.banners.mainBanners.rotationSpeed">
                <option value="0">0c</option>
                <option value="1">1c</option>
                <option value="2">2c</option>
                <option value="3">3c</option>
                <option value="4">4c</option>
                <option value="5">5c</option>
              </select>
            </div>
            <button class="btn btn-primary float-right" @click="uploadBannersAndData">Сохранить</button>
          </div>
          <div>{{ this.$store.state.banners.mainBanners.data }}</div>
        </div>
      </div>
    </div>
  </content>
</template>

<script>
import { db, storage } from '../firebase/init.js'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { doc, getDoc, setDoc } from "firebase/firestore"
import BannersList from '../components/BannersList.vue'

export default {
  components: {
    BannersList
  },
  created() {
    this.getBanners()
  },
  methods: {
    async bannersSelect(input) {
      let banners = input.target.files
      for (let i = 0; i < banners.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1))
        this.$store.state.banners.mainBanners.data.push({
          id: this.$store.state.banners.mainBanners.data.length,
          name: 'banner-' + Date.now(),
          url: '',
          title: '',
          imgUrl: null,
        })
        
        this.$store.state.banners.mainBanners.banners.push({
          id: this.$store.state.banners.mainBanners.banners.length,
          uploaded: false,
          image: banners[i],
          imgUrl: URL.createObjectURL(banners[i]),
        })
      }
    },
    async uploadBannersAndData() {
       this.uploadBanners()
         .then(async () => {
          await new Promise(resolve => setTimeout(resolve, 3000))
           this.uploadBannersData()
          console.log('uploaded')
      })
    },
    async uploadBanners() {
      if (this.$store.state.banners.mainBanners.deletedBanners.length !== 0) {
        for (let i = 0; i < this.$store.state.banners.mainBanners.deletedBanners.length; i++) {
          const delRef = ref(storage, "banners/movies/" + this.$store.state.banners.mainBanners.deletedBanners[i]);
          await deleteObject(delRef).then(() => {
            this.$store.state.banners.mainBanners.deletedBanners.splice(i, 1);
          }).catch((error) => {
            console.error(error);
          });
        }
      }

      for (let i = 0; i < this.$store.state.banners.mainBanners.banners.length; i++) {
        if (this.$store.state.banners.mainBanners.banners[i].image !== null) {
        try {
            const bannersRef = ref(storage, "banners/movies/" + this.$store.state.banners.mainBanners.data[i].name)
            uploadBytes(bannersRef, this.$store.state.banners.mainBanners.banners[i].image).then(async () => {
              await getDownloadURL(bannersRef).then((url) => {
                this.$store.state.banners.mainBanners.data[i].imgUrl = url
              })
            })
          } catch (e) { console.log(e) }
        } 
      }
      // console.log( 'uploaded' )
      console.log(db)
      // await new Promise(resolve => setTimeout(resolve, 3000))
      // this.uploadBannersData()
      // console.log('uploaded')
    },
    async uploadBannersData() {
      await setDoc(doc(db, 'banners', 'movies'), {
        data: this.$store.state.banners.mainBanners.data,
        rotationSpeed: this.$store.state.banners.mainBanners.rotationSpeed
      })
    },
    async getBanners() {
      this.$store.state.banners.mainBanners.data = []
      this.$store.state.banners.mainBanners.banners = []
      const docRef = doc(db, 'banners', 'movies')
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        this.$store.state.banners.mainBanners.rotationSpeed = docSnap.data().rotationSpeed
        this.$store.state.banners.mainBanners.data = docSnap.data().data
        for (let i = 0; i < this.$store.state.banners.mainBanners.data.length; i++) {
          this.$store.state.banners.mainBanners.banners.push({
            id: i,
            uploaded: true,
            image: null,
            imgUrl: this.$store.state.banners.mainBanners.data[i].imgUrl
          })
        }
      }
    },
  }
}
 </script>

<style scoped>
.card-footer{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.banner{
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.banner, .banner-preview {
  width: 240px;
}
.card-body {
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


.banner_input {
  display: none;
}

</style>