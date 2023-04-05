<template>
<img :src="url" alt="">

</template>

<script>
import { storage } from '../firebase/init'
import { ref, getDownloadURL } from 'firebase/storage'

export default {
    props: {
        path: String,
    },
    data() {
        return {
            url: 'https://placehold.co/400'
        }
    },
    mounted() {
        getDownloadURL(ref(storage, this.path)).then(
            (download_url) => (this.url = download_url)
        )
    }
}
</script>