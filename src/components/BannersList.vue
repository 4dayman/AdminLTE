<template>
    <div class="banner" v-for="banner in banners" :key="banner.id">
        <div class="card p-2 ">
            <img src="https://wallpaperaccess.com/full/645154.jpg">
            <button class="btn btn-primary" @click="banner.show = !banner.show">Добавить</button>
            <div class="input-group" v-if="banner.show">
                <p>URL:</p>
                <input class="form-control ml-1" type="text" placeholder="URL" v-model="banner.url">
            </div>
            <div class="input-group" v-if="banner.show">
                <p>Title:</p>
                <input class="form-control ml-1" type="text" placeholder="Title" v-model="banner.title">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    computed: {
        banners() {
            return this.$store.getters.getBanners
        }
    },
    data() {
        return {}
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
</style>