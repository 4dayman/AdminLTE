<template>
  <content-header title="Банера" icon="fas fa-info-circle" />
  <content>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header">
            <h3>На главной верх</h3>
            <div class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
              <input type="checkbox" class="custom-control-input" id="mainBannersSwitch"
                v-model="this.$store.state.banners.mainBanners.toggle">
              <label class="custom-control-label" for="mainBannersSwitch">{{ this.$store.state.banners.mainBanners.toggle
              }}</label>
            </div>
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
            <loader v-if="this.$store.state.banners.mainBanners.loader"></loader>
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
            <button class="btn btn-primary float-right" @click="uploadBanners">Сохранить</button>
          </div>
          <!-- <div>{{ this.$store.state.banners.mainBanners.data }}</div> -->
        </div>

        <div class="card">
          <div class="card-header">
            <h3>Сквозной банер на заднем фоне</h3>
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
            <loader v-if="this.$store.state.banners.bgBanners.loader"></loader>
          </div>
          <div class="card-footer center">
            <button class="btn btn-primary" @click="uploadBannersBgAndData">Сохранить</button>
          </div>
          <!-- <div>{{ this.$store.state.banners.bgBanners }}</div> -->
        </div>

        <div class="card">
          <div class="card-header">
            <h3>На главной Новости Акции</h3>
            <div class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
              <input type="checkbox" class="custom-control-input" id="newsBannersSwitch"
                v-model="this.$store.state.banners.newsBanners.toggle">
              <label class="custom-control-label" for="newsBannersSwitch">{{ this.$store.state.banners.newsBanners.toggle
              }}</label>
            </div>

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
            <loader v-if="this.$store.state.banners.newsBanners.loader"></loader>
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
            <button class="btn btn-primary float-right" @click="uploadBannersNews">Сохранить</button>
          </div>
          <!-- <div>{{ this.$store.state.banners.newsBanners.data }}</div> -->
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
import Loader from '../components/Loader.vue'

export default {
  components: {
    BannersList,
    BannersNewsList,
    Loader,
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
    async uploadBanners() {
      this.$store.state.banners.mainBanners.loader = true
      if (this.$store.state.banners.mainBanners.deletedBanners.length !== 0) {
        for (let i = 0; i < this.$store.state.banners.mainBanners.deletedBanners.length; i++) {
          const delRef = ref(storage, "banners/movies/" + this.$store.state.banners.mainBanners.deletedBanners[i]);
          await deleteObject(delRef).then(() => {
            this.$store.state.banners.mainBanners.deletedBanners.splice(i, 1)
          }).catch((e) => {
            console.log(e);
          });
        }
        this.uploadBannersData()
      }
      for (let i = 0; i < this.$store.state.banners.mainBanners.banners.length; i++) {
        if (this.$store.state.banners.mainBanners.banners[i].image !== null) {
          try {
            const bannersRef = ref(storage, "banners/movies/" + this.$store.state.banners.mainBanners.data[i].name)
            uploadBytes(bannersRef, this.$store.state.banners.mainBanners.banners[i].image).then(async () => {
              await getDownloadURL(bannersRef).then((url) => {
                this.$store.state.banners.mainBanners.data[i].imgUrl = url
                this.uploadBannersData()
              })
            })
          } catch (e) { console.log(e) }
        } else { this.uploadBannersData() }
      }
    },
    async uploadBannersData() {
      await setDoc(doc(db, 'banners', 'movies'), {
        data: this.$store.state.banners.mainBanners.data,
        rotationSpeed: this.$store.state.banners.mainBanners.rotationSpeed,
        toggle: this.$store.state.banners.mainBanners.toggle
      })
      this.$store.state.banners.mainBanners.loader = false
      console.log('Movies data loaded')
    },
    async getBanners() {
      this.$store.state.banners.mainBanners.loader = true
      this.$store.state.banners.mainBanners.data = []
      this.$store.state.banners.mainBanners.banners = []
      const docRef = doc(db, 'banners', 'movies')
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        this.$store.state.banners.mainBanners.toggle = docSnap.data().toggle
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
      this.$store.state.banners.mainBanners.loader = false
    },

    // Bg
    async bannersBgSelect(input) {
      let bannersBg = input.target.files[0]
      this.$store.state.banners.bgBanners.image = bannersBg
      this.$store.state.banners.bgBanners.url = URL.createObjectURL(bannersBg)
    },
    async uploadBannersBgAndData() {
      this.$store.state.banners.bgBanners.loader = true
      if (this.$store.state.banners.bgBanners.image !== null) {
        try {
          const bannersRef = ref(storage, "banners/bg/bg-1")
          await uploadBytes(bannersRef, this.$store.state.banners.bgBanners.image).then(async () => {
            await getDownloadURL(bannersRef).then((url) => {
              this.$store.state.banners.bgBanners.url = url
              this.uploadBannersBgData()
            })
          })
        } catch (e) { console.log(e) }
      } else {
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
      this.$store.state.banners.bgBanners.loader = false
      console.log('Bg data loaded')
    },
    async getBannersBg() {
      this.$store.state.banners.bgBanners.loader = true
      this.$store.state.banners.bgBanners.radioValue = ''
      this.$store.state.banners.bgBanners.url = ''
      this.$store.state.banners.bgBanners.color = ''
      const docRef = doc(db, "banners", "bg")
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        this.$store.state.banners.bgBanners.radioValue = docSnap.data().radioValue;
        this.$store.state.banners.bgBanners.url = docSnap.data().url;
        this.$store.state.banners.bgBanners.color = docSnap.data().color;
      }
      this.$store.state.banners.bgBanners.loader = false
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
    async uploadBannersNews() {
      this.$store.state.banners.newsBanners.loader = true
      if (this.$store.state.banners.newsBanners.deletedBanners.length !== 0) {
        for (let i = 0; i < this.$store.state.banners.newsBanners.deletedBanners.length; i++) {
          const delRef = ref(storage, "banners/news/" + this.$store.state.banners.newsBanners.deletedBanners[i]);
          await deleteObject(delRef).then(() => {
            this.$store.state.banners.newsBanners.deletedBanners.splice(i, 1);
          }).catch((e) => {
            console.log(e);
          });
        }
        this.uploadBannersNewsData()
      }

      for (let i = 0; i < this.$store.state.banners.newsBanners.banners.length; i++) {
        if (this.$store.state.banners.newsBanners.banners[i].image !== null) {
          try {
            const bannersRef = ref(storage, "banners/news/" + this.$store.state.banners.newsBanners.data[i].name)
            uploadBytes(bannersRef, this.$store.state.banners.newsBanners.banners[i].image).then(async () => {
              await getDownloadURL(bannersRef).then((url) => {
                this.$store.state.banners.newsBanners.data[i].imgUrl = url
                this.uploadBannersNewsData()
              })
            })
          } catch (e) { console.log(e) }
        } else { this.uploadBannersNewsData() }
      }
    },
    async uploadBannersNewsData() {
      await setDoc(doc(db, 'banners', 'news'), {
        data: this.$store.state.banners.newsBanners.data,
        rotationSpeed: this.$store.state.banners.newsBanners.rotationSpeed,
        toggle: this.$store.state.banners.newsBanners.toggle
      })
      this.$store.state.banners.newsBanners.loader = false
      console.log('News data loaded')
    },
    async getBannersNews() {
      this.$store.state.banners.newsBanners.loader = true
      this.$store.state.banners.newsBanners.data = []
      this.$store.state.banners.newsBanners.banners = []
      const docRef = doc(db, 'banners', 'news')
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        this.$store.state.banners.newsBanners.toggle = docSnap.data().toggle
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
      this.$store.state.banners.newsBanners.loader = false
    },

  }
}
</script>

<style lang="scss" scoped>
.card-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

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
  flex-wrap: wrap;
}

.bg_image_body {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
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