<template>
    <div class="banner" v-for="(banner, i) in banners" :key="i">
        <div class="card p-2 ">
            <span class="badge bg-danger poa" @click="deleteBanner(i)">X</span>
            <!-- <img src="https://wallpaperaccess.com/full/645154.jpg"> -->
            <img :src="banner.imgUrl">
            <!-- <button class="btn btn-primary" @click="banner.show = !banner.show">Добавить</button> -->
            <div class="input-group">
                <p>URL:</p>
                <input class="form-control ml-1" type="text" placeholder="URL" v-model="banners[i].url">
            </div>
            <div class="input-group">
                <p>Title:</p>
                <input class="form-control ml-1" type="text" placeholder="Title" v-model="banners[i].title">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    computed: {
        banners() {
            return this.$store.state.banners.banners
        }
    },
    data() {
        return {}
    },
    methods: {
        deleteBanner(i) {
            this.banners.splice(i, 1)
        }
    }
}
</script>

<style lang="scss" scoped>
.banner{
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.banner, .banner-preview {
  width: 240px;
}
.card{
    gap: 10px;
}
.poa{
    cursor: pointer;
    position: absolute;
    right: -10px;
    top: -10px;
}
</style>