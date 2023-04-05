<template>
  <content-header title="Банера" icon="fas fa-info-circle" />
  <content>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">На главной верх</h3>
          </div>
          <div class="card-body">


            <div><h3>Размер: 1000х190</h3></div>
            <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. -->
            <div class="banner">
              <BanerImage class="banner-preview" path="folder/1.png"/>
              <div >                     
                <img class="banner-preview" :src="url">
              </div>   
              <!-- <img class="movie-banner__upload-preview" :src="banner.url" alt=""> -->
              <!-- <input type="file" ref="banerFile" @change=""> -->
              <button class="btn btn-primary" @click="click1">Добавить</button>
               <input type="file" ref="input1"
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
            </div>
          </div>
          <div class="card-footer">
            <div>
              <p>Скорость вращения</p>
              <select class="form-control" >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <button class="btn btn-primary float-right" @click="upload">Сохранить</button>
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
import BanerImage from '../components/BanerImage.vue'

export default {
  components: {
    BanerImage
  },
  data() {
    return {
      bannerUrl: '',
      bannerTitle: '',
      url: 'https://placehold.co/400',
    }
  },
  methods: {
    click1() {
      this.$refs.input1.click()
    },
    previewImage(event) {
      const file = event.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    upload() {
      const storageRef = ref(storage, 'folder/1.png')
      
      uploadBytes(storageRef, this.$refs.input1.files[0]).then(
        (snapshot) => {
          console.log('uploaded')
        }
      )
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
</style>