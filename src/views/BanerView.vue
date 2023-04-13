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

            <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. -->
            <!-- <div class="banner" v-for="(banner, index) in banners" :key="index">
              <BanerImage class="banner-preview" path="folder/1.png"/>
              <div >                     
                <img class="banner-preview" :src="banner.url">
              </div>   
              <button class="btn btn-primary" @click="this.$refs.input.click()">Добавить</button>
               <input type="file" ref="input"
                style="display: none"
                @change="previewImage" accept="image/*" >
              <div class="input-group">
                <p>URL:</p>
                <input class="form-control" type="text" placeholder="URL" v-model="bannerUrl">
              </div>
              <div class="input-group">
                <p>Title:</p>
                <input class="form-control" type="text" placeholder="Title" v-model="bannerTitle">
              </div>
            </div> -->
            <label class="banners_add">
              <button class="btn btn-primary square" @click="this.$refs.bannersSelect.click()"><i class="fas fa-plus"></i> Добавить фото</button>
              <input class="banner_input" ref="bannersSelect" type="file" multiple="multiple" accept="image/*" @change="bannersSelect($event)">
            </label>
          </div>
          <div class="card-footer">
            <div>
              <p>Скорость вращения {{ this.$store.state.banners.rotation }}</p>
              <select class="form-control" v-model="this.$store.state.banners.rotation">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <button class="btn btn-primary float-right" @click="uploadBanners">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  </content>
</template>

<script>
import { db, storage } from '../firebase/init'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { doc, getDoc, setDoc } from "firebase/firestore"
// import BanerImage from '../components/BanerImage.vue'
import BannersList from '../components/BannersList.vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    // BanerImage,
    BannersList
  },
  data() {
    return {
      // banners: [],
    }
  },
  computed: {
    // banners() {
    //   return this.$store.state.banners.banners
    // }
  },
  methods: {
    // click1() {
    //   this.$refs.input.click()
    // },
    // previewImage(event) {
    //   const file = event.target.files[0];
    //   this.url = URL.createObjectURL(file);
    // },

    async bannersSelect(input) {
      // const file = event.target.files[0];
      // this.url = URL.createObjectURL(file);
      let banners = input.target.files
      for (let i = 0; i < banners.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1))
        this.$store.state.banners.banners.push({
          id: this.$store.state.banners.banners.length,
          imageId: 'banner-' + Date.now(),
          imgUrl: URL.createObjectURL(banners[i]),
          url: '',
          title: '',
        })
      }
    },


    // upload() {
    //   const storageRef = ref(storage, 'folder/1.png')

    //   uploadBytes(storageRef, this.$refs.input1.files[0]).then(
    //     (snapshot) => {
    //       console.log('uploaded')
    //     }
    //   )
    // }
    uploadBanners() {
      // this.$store.banners.uploadBanners()
      for (let i = 0; i < this.$store.state.banners.banners.length; i++) { 
        const bannersRef = ref(storage, "banners/movies/" + this.$store.state.banners.banners[i].imageId)
        uploadBytes(bannersRef, this.$store.state.banners.banners[i].imgUrl).then(async () => {
          await getDownloadURL(bannersRef).then((url) => {
            this.$store.state.banners.banners[i].imgUrl = url
          })
        })
      }
      // console.log( 'uploaded' )
    }
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