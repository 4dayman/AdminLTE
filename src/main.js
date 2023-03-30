import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ContentHeader from './components/ContentHeader.vue'
import Content from './components/Content.vue'

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import db from '@/firebase/init.js'
// import 'firebase/auth'
// import 'firebase/database'
// import 'firebase/storage'

// firebase.initializeApp({
//     apiKey: "AIzaSyAz6WI89Fem46JXvS8vZF8jIZeRPf9TrVc",
//     authDomain: "kino-cms-e6548.firebaseapp.com",
//     projectId: "kino-cms-e6548",
//     storageBucket: "kino-cms-e6548.appspot.com",
//     messagingSenderId: "326552603247",
//     appId: "1:326552603247:web:86bf55f53128ab787c9b9a",
//     measurementId: "G-NCWPE8X0EE"
// })
// firebase.auth().onAuthStateChanged(() => {
    
// })
// const firebaseConfig = {
//     apiKey: "AIzaSyAz6WI89Fem46JXvS8vZF8jIZeRPf9TrVc",
//     authDomain: "kino-cms-e6548.firebaseapp.com",
//     projectId: "kino-cms-e6548",
//     storageBucket: "kino-cms-e6548.appspot.com",
//     messagingSenderId: "326552603247",
//     appId: "1:326552603247:web:86bf55f53128ab787c9b9a",
//     measurementId: "G-NCWPE8X0EE"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = createApp(App)
app.component('content-header', ContentHeader)
    .component('content', Content)    
    .use(store).use(router).mount('#app')
