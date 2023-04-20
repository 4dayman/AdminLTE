<template>
    <div class="banner" v-for="(banner, i) in newsBanners.banners" :key="i">
        <div class="card p-2 ">
            <span class="badge bg-danger poa" @click="deleteBanner(banner.id)">X</span>
            <!-- <img src="https://wallpaperaccess.com/full/645154.jpg"> -->
            <img :src="banner.imgUrl">
            <!-- <button class="btn btn-primary" @click="banner.show = !banner.show">Добавить</button> -->
            <div class="input-group">
                <p>URL:</p>
                <input class="form-control ml-1" type="text" placeholder="URL" v-model="newsBanners.data[i].url">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    computed: {
        newsBanners() {
            return this.$store.state.banners.newsBanners
        }
    },
    data() {
        return {}
    },
    methods: {
        deleteBanner(id) {
            if (this.$store.state.banners.newsBanners.banners[id].uploaded) {
                this.$store.state.banners.newsBanners.deletedBanners.push(this.$store.state.banners.newsBanners.data[id].name);
            }
            this.$store.state.banners.newsBanners.banners.splice(id, 1)
            this.$store.state.banners.newsBanners.data.splice(id, 1)
            for (let i = 0; i < this.$store.state.banners.newsBanners.data.length; i++) {
                if (this.$store.state.banners.newsBanners.data[i].id !== i && this.$store.state.banners.newsBanners.banners[i].id !== i) {
                    this.$store.state.banners.newsBanners.data[i].id = this.$store.state.banners.newsBanners.banners[i].id = i;
                }
            }
        }
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

.card {
    gap: 10px;
}

.poa {
    cursor: pointer;
    position: absolute;
    right: -10px;
    top: -10px;
}
</style>