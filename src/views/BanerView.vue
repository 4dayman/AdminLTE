<template>
  <content-header title="Банера" icon="fas fa-info-circle" />
  <content>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header">
            <h3>На главной верх</h3>
          </div>
          <div class="ml-3">
            <h3 class="card-title">Размер: 1000х1900</h3>
          </div>
          <div class="card-body">
            <banners-list></banners-list>
            <label class="banners_add">
              <button class="btn btn-primary square" @click="this.$refs.bannersSelect.click()"><i class="fas fa-plus"></i>
                Добавить фото</button>
              <input class="banner_input" ref="bannersSelect" type="file" multiple="multiple" accept="image/*"
                @change="bannersSelect($event)">
            </label>
          </div>
          <div class="card-footer">
            <div>
              <p>Скорость вращения: {{ this.$store.state.banners.mainBanners.rotationSpeed }}</p>
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

        <div class="card">
          <div class="card-header">
            <h3 >Сквозной банер на заднем фоне</h3>
          </div>
          <div class="ml-3">
            <h3 class="card-title">Размер: 2000х3000</h3>
          </div>
          <div class="card-body body-column">
            <div class="bg_radio">
              <input class="mt-1 mr-1" type="radio" id="img" value="img"
                v-model="this.$store.state.banners.bgBanners.radioValue">
              <label for="img">
                <p>Фото на фон</p>
              </label>
              <div class="bg_image_body ml-2" v-if="this.$store.state.banners.bgBanners.radioValue == 'img'">
                <div class="gb_image" v-if="this.$store.state.banners.bgBanners.url">
                  <img :src="this.$store.state.banners.bgBanners.url">
                </div>
                <label class="banners_add">
                  <button class="btn btn-primary square" @click="this.$refs.bannersBgSelect.click()"><i
                      class="fas fa-plus"></i>
                    Добавить фото</button>
                  <input class="banner_input" ref="bannersBgSelect" type="file" accept="image/*"
                    @change="bannersBgSelect($event)">
                </label>
                <button class="btn btn-primary square" @click="this.$store.state.banners.bgBanners.url = ''"
                  v-if="this.$store.state.banners.bgBanners.url"><i class="fas fa-minus"></i>
                  Удалить фото</button>
              </div>
            </div>

            <div class="bg_radio">
              <input class="mt-1 mr-1" type="radio" id="color" value="color"
                v-model="this.$store.state.banners.bgBanners.radioValue">
              <label for="color">
                <p>Просто фон</p>
              </label>
              <div class="bg_image_body ml-2" v-if="this.$store.state.banners.bgBanners.radioValue == 'color'">
                <div class="gb_image" :style="{ background: $store.state.banners.bgBanners.color }"
                  v-if="this.$store.state.banners.bgBanners.color">
                  {{ this.$store.state.banners.bgBanners.color }}
                </div>
                <label class="banners_add">
                  <button class="btn btn-primary square" @click="this.$refs.bannersBgColorSelect.click()"><i
                      class="fas fa-plus"></i>
                    Выбрать цвет</button>
                  <input class="banner_input" ref="bannersBgColorSelect" type="color"
                    v-model="this.$store.state.banners.bgBanners.color">
                </label>
                <button class="btn btn-primary square" @click="this.$store.state.banners.bgBanners.color = ''"
                  v-if="this.$store.state.banners.bgBanners.color"><i class="fas fa-minus"></i>
                  Удалить цвет</button>
              </div>
            </div>

          </div>
          <div class="card-footer center">
            <button class="btn btn-primary" @click="uploadBannersBgAndData">Сохранить</button>
          </div>
          <div>{{ this.$store.state.banners.bgBanners }}</div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3>На главной Новости Акции</h3>
          </div>
          <div class="ml-3">
            <h3 class="card-title">Размер: 1000х1900</h3>
          </div>
          <div class="card-body">
            <banners-news-list></banners-news-list>
            <label class="banners_add">
              <button class="btn btn-primary square" @click="this.$refs.bannersNewsSelect.click()"><i
                  class="fas fa-plus"></i>
                Добавить фото</button>
              <input class="banner_input" ref="bannersNewsSelect" type="file" multiple="multiple" accept="image/*"
                @change="bannersNewsSelect($event)">
            </label>
          </div>
          <div class="card-footer">
            <div>
              <p>Скорость вращения: {{ this.$store.state.banners.newsBanners.rotationSpeed }}</p>
              <select class="form-control" v-model="this.$store.state.banners.newsBanners.rotationSpeed">
                <option value="0">0c</option>
                <option value="1">1c</option>
                <option value="2">2c</option>
                <option value="3">3c</option>
                <option value="4">4c</option>
                <option value="5">5c</option>
              </select>
            </div>
            <button class="btn btn-primary float-right" @click="uploadBannersNewsAndData">Сохранить</button>
          </div>
          <div>{{ this.$store.state.banners.newsBanners.data }}</div>
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
import BannersNewsList from '../components/BannersNewsList.vue'

export default {
  components: {
    BannersList,
    BannersNewsList,
  },
  created() {
    this.getBanners()
    this.getBannersNews()
    this.getBannersBg()
  },
  methods: {
    // Movies
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
          console.log('uploaded(movies)')
        })
    },
    async uploadBanners() {

      if (this.$store.state.banners.mainBanners.deletedBanners.length !== 0) {
        for (let i = 0; i < this.$store.state.banners.mainBanners.deletedBanners.length; i++) {
          const delRef = ref(storage, "banners/movies/" + this.$store.state.banners.mainBanners.deletedBanners[i]);
          await deleteObject(delRef).then(() => {
            this.$store.state.banners.mainBanners.deletedBanners.splice(i, 1);
          }).catch((e) => {
            console.log(e);
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

    // Bg
    async bannersBgSelect(input) {
      let bannersBg = input.target.files[0]
      this.$store.state.banners.bgBanners.image = bannersBg
      this.$store.state.banners.bgBanners.url = URL.createObjectURL(bannersBg)
    },
    async uploadBannersBgAndData() {
      if (this.$store.state.banners.bgBanners.image !== null) {
        try {
          const bannersRef = ref(storage, "banners/bg/bg-1")
          await uploadBytes(bannersRef, this.$store.state.banners.bgBanners.image).then(async () => {
            await getDownloadURL(bannersRef).then((url) => {
              this.$store.state.banners.bgBanners.url = url
              this.$store.state.banners.bgBanners.image = null
              this.$store.state.banners.bgBanners.color = ''
              this.uploadBannersBgData()
            })
          })
        } catch (e) { console.log(e) }
      } else {
        this.$store.state.banners.bgBanners.url = ''
        this.uploadBannersBgData()
      }
    },
    async uploadBannersBgData() {
      try {
        await setDoc(doc(db, 'banners', 'bg'), {
          radioValue: this.$store.state.banners.bgBanners.radioValue,
          url: this.$store.state.banners.bgBanners.url,
          color: this.$store.state.banners.bgBanners.color
        })
      } catch (e) { console.log(e) }
    },
    async getBannersBg() {
      this.$store.state.banners.bgBanners.radioValue = ''
      this.$store.state.banners.bgBanners.url = ''
      this.$store.state.banners.bgBanners.image = null
      this.$store.state.banners.bgBanners.color = ''
      const docRef = doc(db, "banners", "bg")
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        this.$store.state.banners.bgBanners.radioValue = docSnap.data().radioValue;
        this.$store.state.banners.bgBanners.url = docSnap.data().url;
        this.$store.state.banners.bgBanners.color = docSnap.data().color;
      }
    },
    // News
    async bannersNewsSelect(input) {
      let bannersNews = input.target.files
      for (let i = 0; i < bannersNews.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1))
        this.$store.state.banners.newsBanners.data.push({
          id: this.$store.state.banners.newsBanners.data.length,
          name: 'news-' + Date.now(),
          url: '',
          imgUrl: null,
        })

        this.$store.state.banners.newsBanners.banners.push({
          id: this.$store.state.banners.newsBanners.banners.length,
          uploaded: false,
          image: bannersNews[i],
          imgUrl: URL.createObjectURL(bannersNews[i]),
        })
      }
    },
    async uploadBannersNewsAndData() {
      this.uploadBannersNews()
        .then(async () => {
          await new Promise(resolve => setTimeout(resolve, 3000))
          this.uploadBannersNewsData()
          console.log('uploaded(news)')
        })
    },
    async uploadBannersNews() {

      if (this.$store.state.banners.newsBanners.deletedBanners.length !== 0) {
        for (let i = 0; i < this.$store.state.banners.newsBanners.deletedBanners.length; i++) {
          const delRef = ref(storage, "banners/news/" + this.$store.state.banners.newsBanners.deletedBanners[i]);
          await deleteObject(delRef).then(() => {
            this.$store.state.banners.newsBanners.deletedBanners.splice(i, 1);
          }).catch((e) => {
            console.log(e);
          });
        }
      }

      for (let i = 0; i < this.$store.state.banners.newsBanners.banners.length; i++) {
        if (this.$store.state.banners.newsBanners.banners[i].image !== null) {
          try {
            const bannersRef = ref(storage, "banners/news/" + this.$store.state.banners.newsBanners.data[i].name)
            uploadBytes(bannersRef, this.$store.state.banners.newsBanners.banners[i].image).then(async () => {
              await getDownloadURL(bannersRef).then((url) => {
                this.$store.state.banners.newsBanners.data[i].imgUrl = url
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
    async uploadBannersNewsData() {
      await setDoc(doc(db, 'banners', 'news'), {
        data: this.$store.state.banners.newsBanners.data,
        rotationSpeed: this.$store.state.banners.newsBanners.rotationSpeed
      })
    },
    async getBannersNews() {
      this.$store.state.banners.newsBanners.data = []
      this.$store.state.banners.newsBanners.banners = []
      const docRef = doc(db, 'banners', 'news')
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        this.$store.state.banners.newsBanners.rotationSpeed = docSnap.data().rotationSpeed
        this.$store.state.banners.newsBanners.data = docSnap.data().data
        for (let i = 0; i < this.$store.state.banners.newsBanners.data.length; i++) {
          this.$store.state.banners.newsBanners.banners.push({
            id: i,
            uploaded: true,
            image: null,
            imgUrl: this.$store.state.banners.newsBanners.data[i].imgUrl
          })
        }
      }
    },

  }
}
</script>

<style lang="scss" scoped>
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
}

.card-body {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
}

.body-column {
  flex-direction: column;
}

.square {
  width: 100px;
  height: 100px;
}

.banner_input {
  display: none;
}

.bg_radio {
  display: flex;
  align-items: flex-start;
}

.bg_image_body {
  display: flex;
  gap: 20px;
}

.gb_image {
  width: 240px;
  max-height: 240px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}</style>